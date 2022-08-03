import {LoginPageWrapper, Form, SignUpLink} from './LoginPage.style'
import {useState} from "react";
import {Link} from 'react-router-dom'
import trackItLogo from '../../assets/imgs/trackitLogo.svg';
import {Bars} from "react-loader-spinner";


export default function LoginPage() {

  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);

    setForm({
      email: '',
      password: ''
    }) 
	}

  console.log('isLoading = ', isLoading)

  return (
    <LoginPageWrapper>
      <img src={trackItLogo} alt="trackItLogo" />
      <Form onSubmit={executeLogin}>
        <input type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <button type="submit">
          {isLoading
            ? <Bars color={'#fafafa'} height={30} width={100}/>
            : <h2>Entrar</h2>
          }
        </button>
      </Form>
      <Link to='/cadastro' ><SignUpLink>Não tem uma conta? Cadastre-se!</SignUpLink></Link>
    </LoginPageWrapper>
  )
}

