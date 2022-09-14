import React, { useState } from 'react'

export default function Form(props) {
  const Handleupclick = () => {
    console.log('uppercase was clicked')
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase!", "Success")
  }
  const Handleonchange = (event) => {
    setText(event.target.value)
  }
  // const Submit = () => {
  //   alert('Successfully Submitted')
  // }
  const Handleloclick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase!", "Success")
  }
  const capitalization = () => {
    let updatedText = ''
    let words = text.split(' ')
    words.forEach((word) => {
      let firstChar = word.charAt(0).toUpperCase()
      updatedText = updatedText + (firstChar + word.slice(1)) + ' '
      props.showAlert("Converted to Title Case!", "Success")
    })
    setText(updatedText)
  }
  const clear = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text Cleared!", "Success")
  }
  const Copy = () => {
    let text = document.getElementById('box')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard!", "Success")
  }
  const counter = () =>{
   return text.trim().length === 0 ? 0 : text.trim().split(" ").length
  }
  const [text, setText] = useState('Enter your text here')
  return (
    <>
      <div className="container">
        {/* <div className="mb-3 mt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div> */}
        <div className="mb-3">
          <h1 className="mt-4 mb-3">Enter your text Below</h1>
          <textarea
            className="form-control"
            id="box"
            value={text}
            onChange={Handleonchange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={Handleupclick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={Handleloclick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-3 " onClick={capitalization}>
          To title case
        </button>
        <button className="btn btn-primary mx-3 " onClick={Copy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-3 " onClick={clear}>
          Clear Text
        </button>

        {/* <button className="btn btn-info mx-3 " onClick={Submit}>
          Submit
        </button> */}
      </div>
      <div className="container mt-3">
        <h1>Text Summary</h1>
        <p>
          {counter()} Words and {text.length} Characters{' '}
        </p>
        <p>{0.008 * counter()} Minutes taken to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
