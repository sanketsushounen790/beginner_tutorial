import { useState } from 'react'

function App() {
    const [text, setText] = useState("")

    const handleTextInput=(event) =>{ setText(event.target.value)}
    return (
        <div >
            <h1>Writter</h1>

            {/* Hien thi text o day */}
            <h2 style={{backgroundColor: "pink", width: "300px", height: "300px" }}>
                {text}
            </h2>

            {/* Nhap text o day */}
            <textarea onChange={handleTextInput} type="text" placeholder='nhap text o day'style={{width: "300px", height: "300px"}} />
        </div>
    )
}

export default App
