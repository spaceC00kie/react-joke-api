import React, { useState } from "react"

const Chuck = () => {
  const [joke, setJoke] = useState("Click for a joke")

  
  const updateJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((i) => setJoke(i.value))
  }

  return (
    <div>
      <button onClick={() => updateJoke()}>New Joke</button>
      {joke}
    </div>
  )
}

export default Chuck
