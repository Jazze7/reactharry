import React, { useState } from 'react'

export default function Form() {
  const Handleupclick = () => {
    console.log('uppercase was clicked')
    let newText = text.toUpperCase()
    setText(newText)
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
  }
  const capitalization = () => {
    let updatedText="";
    let words = text.split(" ");
    words.forEach((word) => {
      let firstChar = word.charAt(0).toUpperCase();
      updatedText = updatedText + (firstChar + word.slice(1))+ " ";
    });
    setText(updatedText);
  };
  const clear = () => {
    let newText = "";
    setText(newText)
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
         <h1 className='mt-4 mb-3'>Enter your text Below</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
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
        <button className="btn btn-danger mx-3 " onClick={clear}>
          Clear Text
        </button>
        {/* <button className="btn btn-info mx-3 " onClick={Submit}>
          Submit
        </button> */}
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>
          {text.split(' ').length} Words and {text.length} Characters{' '}
        </p>
        <p>{0.008 * text.split(' ').length} Minutes taken to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
