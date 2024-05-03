import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
    const [count, setCount] = useState(0);
    
    // wrap anyone that you wants to use the teleported value inside a provider
    return (
        <div>
          <CountContext.Provider value={count}>
            <Count count={count} setCount={setCount}/>
          </CountContext.Provider>  
        </div>
    )
}

function Count({setCount}) {
    return <div>
        <CountRenderer />
        <Buttons setCount={setCount} />
    </div>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
    const count = useContext(CountContext);
    
    return <div>
        <button onClick={() => {
            setCount(count + 1);
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1);
        }}>Decrease</button>
    </div>
}

export default App;


// // Suspense API => asynchoronous data fetching, asynchoronous component fetching
// import React, { Suspense } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import('./components/Landing'));

// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//           <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//     <button onClick={() => {
//       navigate("/");
//     }}>Landing</button>

//     <button onClick={() => {
//       navigate("/dashboard");
//     }}>Dashboard</button>
//   </div>
// }

// export default App