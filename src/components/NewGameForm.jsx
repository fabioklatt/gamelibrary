import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({addGame}) {

    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("") 

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({title, cover})
        setTitle("")
        setCover("")
      }

    return (
        <form onSubmit={handleSubmit}>
        <div>
         <TextInput
          id="title"
          label="Title"
          value={title}
          setValue={setTitle}
         />
        </div>
        <div>
          <TextInput
           id="cover"
           label="Cover"
           value={cover}
           setValue={setCover}
          />
        </div>
        <button>add</button>
      </form>
    )
}
