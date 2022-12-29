import { useState } from 'react'

function TodoList() {
  const [list, setList] = useState([])

  const [todoInput, setTodoInput] = useState("")

  //console.log(todoInput)

  const handleInput = (event) => {
    setTodoInput(event.target.value)
  }

  const handleAddTodo = () => {
    setList([...list, todoInput])
  }
  
  const handleDeleteToDo = (todoName) =>{
    setList(list.filter(item => item !== todoName))
  }


  return (
    <div>
      <h1>
        TO DO LIST:
      </h1>

      {/* vong lap de hien thi tung cai todo */}
      <ul>
        {
          list.map((item) => {
            return (
              <div key={item} >
                <li>{item}</li>
                <button onClick={() => handleDeleteToDo(item)}>Delete</button>
              </div>

            )
          })
        }
      </ul>

      <input onChange={handleInput} type="text" />
      <button onClick={handleAddTodo}>ADD TO DO</button>

    </div>
  )
}

export default TodoList