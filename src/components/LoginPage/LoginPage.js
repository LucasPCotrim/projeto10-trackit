import {LoginPageWrapper, Form, SignUpLink} from './LoginPage.style'
import {useState} from "react";
import {Link} from 'react-router-dom'
import trackItLogo from '../../assets/imgs/trackitLogo.svg';



export default function LoginPage() {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    }) 
  }

  function executeLogin(event){
    event.preventDefault();

		console.log(form);

    setForm({
      email: '',
      password: ''
    }) 
	}

  return (
    <LoginPageWrapper>
      <img src={trackItLogo} alt="trackItLogo" />
      <Form onSubmit={executeLogin}>
        <input type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <button type="submit">Entrar</button>
      </Form>
      <Link to='/cadastro' ><SignUpLink>Não tem uma conta? Cadastre-se!</SignUpLink></Link>
    </LoginPageWrapper>
  )
}

