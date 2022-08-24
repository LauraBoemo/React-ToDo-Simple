import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme["gray-700"]};
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin-left: 1rem;
        font-size: 2.5rem;
        font-weight: 900;
        color: ${props => props.theme["blue-400"]};

        span {
            color: ${props => props.theme["purple-600"]};
        }
    }
`