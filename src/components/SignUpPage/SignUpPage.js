import {SignUpPageWrapper, Form, LoginLink} from './SignUpPage.style'
import {useState} from "react";
import {Link} from 'react-router-dom'
import trackItLogo from '../../assets/imgs/trackitLogo.svg';


export default function SignUpPage() {

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    picture: ''
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    }) 
  }

  function executeSignUp(event){
    event.preventDefault();

		console.log(form);

    setForm({
      email: '',
      password: '',
      name: '',
      picture: ''
    }) 
	}

  return (
    <SignUpPageWrapper>
      <img src={trackItLogo} alt="trackItLogo" />
      <Form onSubmit={executeSignUp}>
        <input type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <input type="text" name='name' placeholder='nome' value={form.name} onChange={handleForm} />
        <input type="url" name='picture' placeholder='foto' value={form.picture} onChange={handleForm} />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to='/' ><LoginLink>Já tem uma conta? Faça login!</LoginLink></Link>
    </SignUpPageWrapper>
  )
}

