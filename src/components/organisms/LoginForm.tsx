import React from 'react'

const LoginForm = (props) => {
   const [userName, setUserName] = React.useState("");
   const [password, setPassword] = React.useState("");

   const handleSubmit = () => {
      // For this -- I assumed we'd be using different apis depending on login or signup
      // But we could just use the same one and have a boolean for login or signup
      // Not sure whats best practice here
      if (props.loggingIn) {
          // Login
          console.log("Logging in")
      } else if (props.signingUp) {
          // Sign Up
          console.log("Signing up")
      }
  }
  
  return (
      <div className="flex flex-col gap-8">
      <div className="text-6xl text-blue-200">NFCBoard</div>
      <input className="bg-white rounded-1xl p-4" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      <input className="bg-white rounded-1xl p-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button className="text-2xl font-bold text-center text-blue-200 hover:text-blue-400" onClick={handleSubmit}>
         {props.loggingIn ? "Log In" : "Sign Up"}
      </button>
   </div>
  )
}

export default LoginForm