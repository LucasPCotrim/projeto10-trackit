import {LoginPageWrapper, Form, SignUpLink} from './LoginPage.style'
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import trackItLogo from '../../assets/imgs/trackitLogo.svg';
import {ThreeDots} from "react-loader-spinner";
import {logIn} from '../../trackItService'


export default function LoginPage() {

  const navigate = useNavigate();

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
		console.log(form);
    const promise = logIn(form);
    promise
      .then((res)=>{
        console.log('THEN');
        setIsLoading(false);
        console.log(res);
        setForm({
          email: '',
          password: ''
        });
        navigate('/hoje');
      })
      .catch((res)=>{
        console.log('CATCH');
        setIsLoading(false);
        alert(res.response.data.message);
        console.log(res);
        setForm({
          email: '',
          password: ''
        });
      });
	}


  return (
    <LoginPageWrapper>
      <img src={trackItLogo} alt="trackItLogo" />
      <Form onSubmit={executeLogin}>
        <FormContent isLoading={isLoading} form={form} handleForm={handleForm}/>
      </Form>
      <Link to='/cadastro' ><SignUpLink>Não tem uma conta? Cadastre-se!</SignUpLink></Link>
    </LoginPageWrapper>
  )
}




function FormContent({isLoading, form, handleForm}){
  if (isLoading){
    return (
      <>
        <input disabled type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input disabled type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <button disabled type="submit">
          <ThreeDots color={'#fafafa'} height={13} width={51}/>
        </button>
      </>
    )
  } else{
    return (
      <>
        <input type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <button type="submit">
          <h2>Entrar</h2>
        </button>
      </>
    );
  }
  
}

