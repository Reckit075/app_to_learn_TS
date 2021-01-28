import React, {useState} from 'react'
export const Login = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('')
  
  const handleLogin = (e: any) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e: any) => {
    setPassword(e.target.value)
  }

  const handleCheckData = () => {
    if(login==="aa" && password==="aa") localStorage.setItem('token', 'token')
  }

  return (
    <form action="">
      <label htmlFor="login" onChange={handleLogin}><input id="login" type="text"/></label>
      <label htmlFor="password" onChange={handlePassword}><input id="password" type="password"/></label>
      <button onChange={handleCheckData}>ZALOGUJ</button>
    </form>
  )
}