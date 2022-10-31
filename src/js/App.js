import { render } from "preact"
import { useState, useEffect } from "preact/hooks"
import { CogIcon, MenuIcon, NewIcon } from "./icons"

const App = () => {

    return (
        <div class="fixed inset-0 bg-gradient-to-br from-teal-100 to-teal-300 h-screen w-screen flex flex-col items-center text-white">

            <div class="w-11/12 mx-auto md:max-w-4xl py-20">
                <header class="bg-[#333] w-full rounded shadow p-6 flex items-center">

                    <div class="flex flex-col md:flex-row items-start w-1/2 md:w-2/3">
                        <h1 class="text-xl md:text-2xl font-bold md:w-1/2 text-teal-500">HaveToDo</h1>
                        <div class="md:w-1/2 flex justify-center text-xl md:text-3xl mt-1 md:mt-0">
                            <Clock />
                        </div>
                    </div>
                    <div class="w-1/2 md:w-1/3 flex justify-end gap-6">
                        <button class="flex flex-col items-center gap-1 px-4 py-2 rounded bg-[#444] hover:bg-teal-500 duration-300 font-medium">
                            <NewIcon />
                            <p class="text-xs">New</p>
                        </button>
                        <button><MenuIcon /></button>
                    </div>
                </header>
            </div>

        </div>
    )
}

const Clock = () => {

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

render(<App />, document.body)