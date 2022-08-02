import {HeaderWrapper} from './Header.style'
import profilePic from '../../assets/imgs/profile_pic.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Track It</h1>
      <img src={profilePic} alt="profile" />
    </HeaderWrapper>
  )
}
