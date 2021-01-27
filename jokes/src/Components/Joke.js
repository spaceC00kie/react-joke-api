import React, { useState } from "react"

const Joke = () => {
  const loadJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((funny) => setSilly(funny.value))
  }
  const [silly, setSilly] = useState("Click the button for a JOKE")
  return (<div>
    {silly}
    <button onClick={() => loadJoke()}>Wanna read a joke?</button>
  </div>)
}

export default Joke
