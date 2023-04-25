import './App.css';
import { useState, useEffect } from 'react';
function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Email can't be empty")
  const [passwordError, setPasswordError] = useState("Password can't be empty")
  const [formValid, setFormValid] = useState(false)

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break;
      case 'password':
        setPasswordDirty(true)
        break;
    }
  }

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    console.log(e);
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email')
    }
    else {
      setEmailError("")
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Should be larger than 3 and not longer than 8")
      if (!e.target.value) {
        setPasswordError("Should be larger than 3 and not longer than 8")
      }
    } else {
      setPasswordError("")
    }
  }

  return (

    <div className="App">
      <h1 className='warning'>
        It will only work if: email is with @, and if password is larger than 3, and not longer than 8
      </h1>
      <div className="bod">
        <div class="box">

          <div class="container">

            <div class="top">
              <header>Login</header>
            </div>

            <div class="input-field">


              <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="input" name="email" type="text" placeholder="Place your email..." />
              {!(emailDirty && emailError) && <div> &nbsp; </div>}
              {(emailDirty && emailError) && <div style={{ color: 'red' }}>{<div className="eror"> {emailError}</div>}</div>}

            
            </div>

            <div class="input-field2">
              <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} className="input" name="password" type="password" placeholder="Enter your password..." />
              {!(passwordDirty && passwordError) && <div> &nbsp; </div>}
              {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}


            </div>

            <div class="btn-block">
              <button disabled={!formValid} class="submi"  className={formValid ? "active" : null} type="submit">Submit</button>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;