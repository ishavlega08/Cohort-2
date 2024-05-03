import { useEffect, useState } from "react"
import axios from "axios";

function App() {

  const [todos, setTodos] = useState([]);

  // axios syntax
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos);
      })
  }, [])

  // fetch syntax
  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos")
  //     .then(async function(res) {
  //       const json = await res.json();
  //       setTodos(json.todos);
  //     })
  // }, [])

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )

  function Todo({title, description}) {
    return <div>
      <h1>{title}</h1>
      {description}
    </div>
  }
}

export default App
