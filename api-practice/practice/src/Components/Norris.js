import React, { useState } from "react"

const Norris = () => {
  const [notFunny, setNotFunny] = useState("Want to read something silly?")

  const newOne = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((i) => setNotFunny(i.value))
  }

  return (
    <div>
      {notFunny}
      <button onClick={() => newOne()}>Wanna read another?</button>
    </div>
  )
}

export default Norris
