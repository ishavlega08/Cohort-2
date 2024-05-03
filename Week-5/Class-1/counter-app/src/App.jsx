import { useState } from "react"

// state, components

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* to render a dynamic variable, it need to be wrapped inside {} brackets */}
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

// component
function CustomButton(props) {
  
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
