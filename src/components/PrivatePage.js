import Header from 'components/Header/Header';
import BottomMenu from 'components/BottomMenu/BottomMenu';

export default function PrivatePage({children}) {

  
  return (
    <>
    <Header/>
    {children}
    <BottomMenu/>
    </>
  )
}
