import { useState, useEffect } from "preact/hooks"

export default () => {

    const [value, setValue] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <span>{value.getHours() < 10 ? `0${value.getHours()}`:value.getHours()}:{value.getMinutes() < 10 ? `0${value.getMinutes()}`:value.getMinutes()}:{value.getSeconds() < 10 ? `0${value.getSeconds()}`:value.getSeconds()}</span>
    )
}