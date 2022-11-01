import { MenuIcon, NewIcon } from "../icons"
import Clock from "./Clock"

export default ({setShowNewForm}) => {
    return (
        <header class="bg-[#333] w-full rounded shadow p-6 flex items-center">

            <div class="flex flex-col md:flex-row items-start w-1/2 md:w-2/3">
                <h1 class="text-xl md:text-2xl font-bold md:w-1/2 text-teal-500">HaveToDo</h1>
                <div class="md:w-1/2 flex justify-center text-xl md:text-3xl mt-1 md:mt-0">
                    <Clock />
                </div>
            </div>
            <div class="w-1/2 md:w-1/3 flex justify-end gap-6">
                <button class="flex flex-col items-center gap-1 px-4 py-2 rounded bg-[#444] hover:bg-teal-500 duration-300 font-medium" onClick={() => setShowNewForm(true)}>
                    <NewIcon />
                    <p class="text-xs">New</p>
                </button>
                <button><MenuIcon /></button>
            </div>
        </header>
    )
}