import {SignUpPageWrapper, Form, LoginLink} from './SignUpPage.style'
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import trackItLogo from '../../assets/imgs/trackitLogo.svg';
import {signUp} from '../../trackItService'
import {ThreeDots} from "react-loader-spinner";

export default function SignUpPage() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    }) 
  }

  function executeSignUp(event){
    event.preventDefault();
    setIsLoading(true);
		console.log(form);
    const promise = signUp(form);
    promise
      .then((res)=>{
        console.log('THEN');
        setIsLoading(false);
        console.log(res);
        setForm({
          email: '',
          name: '',
          image: '',
          password: ''
        });
        navigate('/');
      })
      .catch((res)=>{
        console.log('CATCH');
        setIsLoading(false);
        alert(res.response.data.message);
        console.log(res);
        setForm({
          email: '',
          name: '',
          image: '',
          password: ''
        });
      });
	}

  return (
    <SignUpPageWrapper>
      <img src={trackItLogo} alt="trackItLogo" />
      <Form onSubmit={executeSignUp}>
        <FormContent isLoading={isLoading} form={form} handleForm={handleForm}/>
      </Form>
      <Link to='/' ><LoginLink>Já tem uma conta? Faça login!</LoginLink></Link>
    </SignUpPageWrapper>
  )
}



function FormContent({isLoading, form, handleForm}){
  if (isLoading){
    return (
      <>
        <input disabled type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input disabled type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <input disabled type="text" name='name' placeholder='nome' value={form.name} onChange={handleForm} />
        <input disabled type="url" name='image' placeholder='foto' value={form.image} onChange={handleForm} />
        <button disabled type="submit">
          <ThreeDots color={'#fafafa'} height={13} width={51}/>
        </button>
      </>
    );
  } else{
    return (
      <>
        <input type="email" name='email' placeholder='email' value={form.email} onChange={handleForm} />
        <input type="password" name='password' placeholder='senha' value={form.password} onChange={handleForm} />
        <input type="text" name='name' placeholder='nome' value={form.name} onChange={handleForm} />
        <input type="url" name='image' placeholder='foto' value={form.image} onChange={handleForm} />
        <button type="submit">Cadastrar</button>
      </>
    );
  }
}

