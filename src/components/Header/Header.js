import {HeaderWrapper} from './Header.style'
import {useContext} from 'react'
import UserContext from "../../contexts/UserContext";

export default function Header() {

  const {user, } = useContext(UserContext);
  console.log('user = ', user);

  return (
    <HeaderWrapper>
      <h1>Track It</h1>
      <img src={user.image} alt="profile" />
    </HeaderWrapper>
  )
}
