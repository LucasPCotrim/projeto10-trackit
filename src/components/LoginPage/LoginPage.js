/* eslint-disable react-hooks/exhaustive-deps */
import {LoginPageWrapper, Form, SignUpLink} from './LoginPage.style';
import {useState, useContext, useEffect} from "react";
import UserContext from "../../contexts/UserContext";
import {Link, useNavigate} from 'react-router-dom';
import trackItLogo from '../../assets/imgs/trackitLogo.svg';
import {ThreeDots} from "react-loader-spinner";
import {logIn} from '../../trackItService';


export default function LoginPage() {

  const {user, setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('trackIt-user'));
    if (loggedUser){
      setUser(loggedUser);
      navigate('/hoje');
    }
  }, []);


  const handleForm = (event)=>{
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    }) 
  }
  const clearForm = ()=>{
    setForm({
      email: '',
      password: ''
    });
  }

  function executeLogin(event){
    event.preventDefault();
    setIsLoading(true);
    const promise = logIn(form);
    promise
      .then((res)=>{
        setIsLoading(false);
        clearForm();
        localStorage.setItem("trackIt-token", JSON.stringify({
          token: res.data.token,
          loginTime: +new Date()
        }));
        localStorage.setItem("trackIt-user", JSON.stringify({...user,
          name: res.data.name,
          email: res.data.email,
          password: res.data.password,
          image: res.data.image
        }));
        setUser({...user,
          name: res.data.name,
          email: res.data.email,
          password: res.data.password,
          image: res.data.image
        });
        navigate('/hoje');
      })
      .catch((res)=>{
        setIsLoading(false);
        alert(res.response.data.message);
        clearForm();
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


