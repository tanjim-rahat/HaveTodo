import { render } from "preact"
import { useState } from "preact/hooks"

import Header from "./components/Header"
import NewTodoForm from "./components/TodoEditForm"

const App = () => {

    const [showNewFom, setShowNewForm] = useState(false)

    return (
        <div class="fixed inset-0 bg-gradient-to-br from-teal-100 to-teal-300 h-screen w-screen flex flex-col items-center text-white relative">

            <div class="w-11/12 mx-auto md:max-w-4xl py-20">
                <Header setShowNewForm={setShowNewForm} />
            </div>

            {showNewFom && <NewTodoForm setShowNewForm={setShowNewForm} />}

        </div>
    )
}



render(<App />, document.body)