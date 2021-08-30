import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AccountContext } from '../../contexts/account-context'
import { NavBarWrapper, NavBarItems, Logo, Hamburger } from './Navbar.style'

const Navbar = () => {
  const { account } = useContext(AccountContext)
  const [toggleNav, setToggleNav] = useState(false)

  // const handleToggle = () => setToggleNav(prev => !prev)

  return (
    <NavBarWrapper toggleNav={ toggleNav }>
      <Logo>
        <Link to='/'>StarDapp</Link>
      </Logo>
      <Hamburger  onClick={()  => {
        console.log('toggle clicked!', toggleNav)
        setToggleNav(prev => !prev)}
      }>
        <span ></span>
        <span></span>
        <span></span>
      </Hamburger >
      <NavBarItems toggleNav={ toggleNav }>
        <ul >
          <li>Cool</li>
          { account ?  <li>{ account.substring(0, 8) }</li> : <p>Connect Wallet</p> }
         
        </ul>
      </NavBarItems>
    </NavBarWrapper>
  )


}

export default Navbar
