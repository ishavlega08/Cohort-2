import "./App.css";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";

function App2() {
    // const isOnline = useIsOnline();

    // if(isOnline) {
    //     return "You are online yay!!!"
    // }

    // return "You are offline, please connect to the internet"

    const mousePointer = useMousePointer();

    return (
        <>
            Your mouse position is {mousePointer.x} {mousePointer.y}
        </>
    );
}

export default App2;