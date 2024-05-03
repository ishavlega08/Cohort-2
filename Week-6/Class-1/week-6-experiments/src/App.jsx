

function App() {
  
  return (
    <div>
      <CardWrapper>
        <CardWrapper>
          <TextComponent />
        </CardWrapper>
      </CardWrapper>
      <CardWrapper>
        <div>
          hello there
        </div>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 20}}>
    {children}
  </div>
}

function TextComponent() {
  return <div>
    hi there
  </div>
}

// function TextComponent2() {
//   return <div>
//     hi there 2
//   </div>
// }

export default App