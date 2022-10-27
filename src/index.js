import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    const request = axios.get("https://api.quotable.io/random")
    request.then((res) => {
      setAuthor(res.data.author)
      setQuote(res.data.content)
    })
  }, [])

  return (
    <>
      <p><strong>Autor:</strong> {author}</p>
      <p><strong>Frase:</strong> <i>{quote}</i></p>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"))