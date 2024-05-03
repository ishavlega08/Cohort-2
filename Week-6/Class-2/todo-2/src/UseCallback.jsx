import { memo, useCallback, useState } from "react"


function App3() {
    const [count, setCount] = useState(0);

    const logSomething = useCallback(() => {
        console.log(`child clicked`);
    }, [])

    return <div>
        <ButtonComponent inputFunction={logSomething} />
        <button onClick={() => {
            setCount(count + 1);
        }}>Click me {count}</button>
    </div>
}

const ButtonComponent = memo(({inputFunction}) => {
    console.log(`child render`);

    return <div>
        <button onClick={inputFunction}>Button clicked</button>
    </div>
})

export default App3