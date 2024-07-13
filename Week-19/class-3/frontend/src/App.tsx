import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    }
    socket.onmessage = (message) => {
      console.log("Received message:", message.data);
      setLatestMessage(message.data);
    }

    return () => {
      socket.close()
    }
  }, [])

  if(!socket) {
    return <div>
      Connecting to socket server...
    </div>
  }

  return (
    <>
      {latestMessage}<br /><br />
      <input onChange={(e) => {
        setNewMessage(e.target.value)
      }} type="text" placeholder="message" />
      <button onClick={() => {
        socket.send(newMessage)
      }}>Send Message</button> 
    </>
  )
}

export default App
