import React, { useState } from 'react';

const Form = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name, email, message)
    }

    const validateName = (e) => {
      console.log(e);
      const { name, value } = e.target;
      setName(value);
      if (name === "name") {
        if (value === "") {
          setName("");
          setErrorMessage(`Please enter your name.`);
        }
      }
      if (value.length > 0) {
        setErrorMessage(``);
      }
    };
  
    const validateEmail = (e) => {
      e.preventDefault();
      console.log(e);
      const { name, value } = e.target;
      setEmail(value);
      if (name === "email") {
        if (value === "") {
          setEmail("");
          setErrorMessage(
            `Please enter a valid email address.`
          );
        }
        const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log(!pattern.test(value));
        if (!pattern.test(value)) {
          setErrorMessage(`Please enter a valid email.`);
        } else {
          setErrorMessage("");
        }
      }
    };
  
    const validateMessage = (e) => {
      console.log(e);
      const { name, value } = e.target;
      setMessage(value);
      if (name === "message") {
        if (value === "") {
          setMessage("");
          setErrorMessage(`Please enter a message.`);
        }
      }
      if (value.length > 0) {
        setErrorMessage(``);
      }
    };
   
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} onBlur={validateName}/>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} onBlur={validateEmail}/>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} onBlur={validateMessage}/>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="error-text">{errorMessage}</p>
      </div>

      <button class="submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
  }

export default Form;

