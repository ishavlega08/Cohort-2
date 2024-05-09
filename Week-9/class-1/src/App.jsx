import React, { useEffect } from "react";
import "./App.css"

function App() {
  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("component mounted");

    return () => {
      // Cleanup code (similar to compenentWillUnmount)
      console.log("component unmounted");
    };
  }, [])

  // Render UI
  return <div>
    From inside my component
  </div>
} 

export default App