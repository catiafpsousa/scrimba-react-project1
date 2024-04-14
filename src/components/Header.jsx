import React from "react"
import Content from "./Content.jsx"

export default function Header() {
  return(
    <header>
      <h1 className ="header--name">Cátia Sousa</h1>
      <p className="header--job">Software Engineer</p>
      <a href = "mailto:catiafpsousa@gmail.com" className="button--email"><img className="button-img-mail" src="src\assets\email.png"></img> Email</a>
      <a href = "https://www.linkedin.com/in/catiafpsousa/" className="button--linkedin"><img className= "button-img-link" src="src\assets\linkedin.png"></img> LinkedIn</a>
      <Content />
    </header>
  )
}


