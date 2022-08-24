import styled from 'styled-components';

export const InputContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: -1rem;

    form {
        width: 100%;
        display: flex;
        padding: 0 5rem;
        justify-content: center;

        input {
            padding: .7rem;
            width: 100%;
            border-radius: 8px;
            border: 0;
            margin-right: 1rem;
            background-color: ${props => props.theme["gray-500"]};
            color: ${props => props.theme["white"]};
        }

        button {
            display: flex;
            align-items: center;
            border-radius: 8px;
            border: 0;
            padding: 0 1rem;
            font-size: .8rem;
            font-weight: 700;
            background-color: ${props => props.theme["blue-500"]};
            color: ${props => props.theme["gray-100"]};

            transition: background-color .3s;

            svg {
                margin-left: .3rem;
            }

            &:hover,
            &:focus,
            &:active {
                cursor: pointer;
                background-color: ${props => props.theme["blue-400"]};
            }
        }
    }
`

export const TaskListContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid  ${props => props.theme["gray-400"]};
    
        h3 {
            font-size: 1rem;
            color: ${props => props.theme["blue-400"]};

            span {
                margin-left: .2rem;
                padding: .2rem .5rem;
                border-radius: 8px;
                background-color: ${props => props.theme["gray-400"]};
                color: ${props => props.theme["white"]};
            }
        }

        .concludedTasks {
            color: ${props => props.theme["purple-500"]};
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`