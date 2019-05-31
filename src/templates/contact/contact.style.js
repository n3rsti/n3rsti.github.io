import styled from "styled-components"

const StyledInput = styled.input`
    width: 70%;
    background: ${({ theme }) => theme.colors.white};
    height: 30px;
    border: 0;
    border-bottom: 3px solid ${({ theme }) => theme.colors.black};
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    height: 4rem;
    padding: 10px;
    outline: none;
    ::placeholder {
        color: ${({ theme }) => theme.colors.black};
    }
`
const StyledTextArea = styled.textarea`
    width: 70%;
    background: ${({ theme }) => theme.colors.white};
    border: 0;
    border-bottom: 3px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    padding: 10px;
    height: 20rem;
    outline: none;

    ::placeholder {
        color: ${({ theme }) => theme.colors.black};
    }
`
const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.yellow};
  background: ${({ theme }) => theme.colors.black};
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: 500;
  margin: 30px 0 15% 0;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  outline: none;
  transition: .3s;
  
  :hover {
      transform: scale(1.1);
  }
`
export { StyledInput, StyledTextArea, StyledButton }