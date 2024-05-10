import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    // state to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    }, [value])

    return debouncedValue;
}