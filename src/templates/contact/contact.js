import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledInput, StyledTextArea, StyledButton } from "./contact.style"
import StyledSectionTitle from "../../components/section-title/section-title"
const Contact = () => (
    <StyledSection id="contact">
        <StyledSectionTitle marginBot>Contact</StyledSectionTitle>
        <StyledInput placeholder="Name" type="text"></StyledInput>
        <StyledInput placeholder="E-mail" type="text"></StyledInput>
        <StyledTextArea placeholder="Message" rows="5"></StyledTextArea>
        <StyledButton>Send</StyledButton>
    </StyledSection>
)
export default Contact;