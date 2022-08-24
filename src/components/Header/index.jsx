import logo from '../../assets/RocketIcon.svg'

import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Purple and Blue Rocket Icon"/>
            <h1>to<span>do</span></h1>
        </HeaderContainer>
    )
}