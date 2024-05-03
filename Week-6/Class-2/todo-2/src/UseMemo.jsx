import { useMemo, useState } from "react"


function App2() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    let count = useMemo(() => {
        console.log(`memo got called`);
        let finalCount = 0;
        for(let i=1; i<=inputValue; i++){
            finalCount += i;
        }
        return finalCount
    }, [inputValue]);

    return <div>
        <input onChange={function(e) {
            setInputValue(e.target.value);
        }} type="text" placeholder="Find sum from 1 to n"/>
        <br /> 
            Sum from 1 to {inputValue} is {count}
        <br /> <br />
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Counter ({counter})</button>
    </div>
}

export default App2