import React from "react"
import {StyledSection} from "../../components/section/section"
/* import { StyledInput, StyledTextArea, StyledButton, StyledLabel, StyledContact } from "./contact.style" */
import { StyledContactIcon, StyledContactDiv } from "./contact.style"
import StyledSectionTitle from "../../components/section-title/section-title"
const Contact = () => (
    <StyledSection id="contact" auto>
        <StyledSectionTitle marginBot>Contact</StyledSectionTitle>
        {/* <StyledContact>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput placeholder="Name" type="text" id="name"></StyledInput>
            <StyledLabel htmlFor="email">E-mail:</StyledLabel>
            <StyledInput placeholder="E-Mail" type="email" id="email"></StyledInput>
            <StyledLabel htmlFor="message">Message:</StyledLabel>
            <StyledTextArea placeholder="Message" rows="5" id="message"></StyledTextArea>
            <StyledButton id="send">Send</StyledButton>
        </StyledContact> */}
        <StyledContactDiv>
            <a href="https://github.com/n3rsti" title="Github profile" aria-label="My github profile"><StyledContactIcon className="fab fa-github" ></StyledContactIcon></a>
            <a href="https://pl.linkedin.com/in/kwitucki" title="Linkedin profile" aria-label="My linkedin profile"><StyledContactIcon className="fab fa-linkedin" ></StyledContactIcon></a>
        </StyledContactDiv>
            
        
    </StyledSection>
)

export default Contact;