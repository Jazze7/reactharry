import React, { useState } from 'react'

export default function Form() {
  const Handleupclick = () => {
    console.log('uppercase was clicked')
    let newText = text.toUpperCase();
    setText(newText)
  }
  const Handleonchange = (event) => {
    setText(event.target.value)
  }
  const Submit = () => {
    alert("Successfully Submitted")
  }
  const [text, setText] = useState('Enter your text here')
  return (
    <>
      <div className="mb-3 mt-5">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
    
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={Handleonchange}
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={Handleupclick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-info mx-3 " onClick={Submit}>Submit</button>
    </>
  )
}
