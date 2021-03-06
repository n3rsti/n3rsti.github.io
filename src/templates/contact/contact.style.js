import styled from "styled-components"

/* const StyledContact = styled.div`
    width: 70%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
`
const StyledInput = styled.input`
    width: 100%;
    max-width: 700px;
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
    max-width: 700px;
    width: 100%;
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
  margin: 30px 0 15vh 0;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  outline: none;
  transition: .3s;
  cursor: pointer;
  align-self: center;
  
  :hover {
      transform: scale(1.1);
  }

  @media(min-width: 1000px){
      width: 110px;
      height: 50px;
  }
`
const StyledLabel = styled.label`
    text-align: left;
    font-size: 1.3rem;
    font-weight: 600;
    align-self: flex-start;
    margin-bottom: 5px;

` */
const StyledContactIcon = styled.i`
    color: ${({ theme }) => theme.colors.black};
    font-size: 5rem;
    margin: 0 30px 30px 30px;

`
const StyledContactDiv = styled.div`
    margin-bottom: 10vh;
`
export { StyledContactIcon, StyledContactDiv }