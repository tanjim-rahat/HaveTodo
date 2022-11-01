import { useEffect, useState, useRef } from "preact/hooks"
import { CloseIcon } from "../icons"

export default ({mode = "New", setShowNewForm}) => {

    const [className, setClassName] = useState("scale-0")
    const body = useRef() 

    useEffect(() => {

        setClassName("")
        window.addEventListener("click", blurCloser)

        return () => {
            window.removeEventListener("click", blurCloser)
        }

    }, [])

    function close () {
        setClassName("scale-0")
        setTimeout(() => setShowNewForm(false), 400)
    }

    function blurCloser (event) {
        if (!body.current.contains(event.target)) {
            close()
        }
    }

    return (
        <div className={`${className} duration-[400ms] fixed inset-0 bg-teal-400 z-50 bg-opacity-25 flex items-center justify-center`}>

            <div ref={body} className="bg-[#333] w-11/12 mx-auto md:max-w-3xl h-5/6 rounded-xl shadow flex flex-col">

                <div className="w-full flex justify-center items-center py-4 relative">
                    <h2 className="text-xl font-bold text-teal-500">{mode} Todo</h2>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 rounded-full mr-6" onClick={close}><CloseIcon className="text-white" /></button>
                </div>

                <div className="px-16 py-6 flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <label>Title</label>
                        <input className="w-full px-4 py-2 rounded bg-[#444]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Details</label>
                        <textarea className="w-full h-20 resize-none px-4 py-2 rounded bg-[#444]"></textarea>
                    </div>

                    <button className="py-2 text-xl font-medium rounded bg-teal-400 mt-4">{mode}</button>

                </div>

            </div>

        </div>
    )
}