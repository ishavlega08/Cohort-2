import { useEffect, useState } from "react";
import "./App.css";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useDebounce } from "./hooks/useDebounce";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 1000);

    return (
        <>
            Debounced value is {debouncedValue} <br />
            <input type="text" 
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            placeholder="Search..."
            />
        </>
    );
}

export default SearchBar

// function useInterval(fn, timeout) {
//     useEffect(() => {
//         const timerId = setInterval(() => {
//             fn()
//         }, timeout);

//         return () => clearInterval(timerId);
//     }, [])
// }

// function App2() {

//     const [count, setCount] = useState(0);

//     useInterval(() => {
//         setCount(c => c + 1);
//     }, 1000)

//     return (
//         <>
//             Timer is at {count}
//         </>
//     );

//     // const isOnline = useIsOnline();

//     // if(isOnline) {
//     //     return "You are online yay!!!"
//     // }

//     // return "You are offline, please connect to the internet"

//     // const mousePointer = useMousePointer();

//     // return (
//     //     <>
//     //         Your mouse position is {mousePointer.x} {mousePointer.y}
//     //     </>
//     // );
// }

// export default App2;