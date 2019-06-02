import React from "react"
import {StyledSection} from "../../components/section/section"
import { StyledInput, StyledTextArea, StyledButton, StyledLabel, StyledContact } from "./contact.style"
import StyledSectionTitle from "../../components/section-title/section-title"
const Contact = () => (
    <StyledSection id="contact" auto>
        <StyledSectionTitle marginBot>Contact</StyledSectionTitle>
        <StyledContact>
            <StyledLabel for="name">Name:</StyledLabel>
            <StyledInput placeholder="Name" type="text" id="name"></StyledInput>
            <StyledLabel for="email">E-mail:</StyledLabel>
            <StyledInput placeholder="E-Mail" type="email" id="email"></StyledInput>
            <StyledLabel for="message">Message:</StyledLabel>
            <StyledTextArea placeholder="Message" rows="5" id="message"></StyledTextArea>
            <StyledButton>Send</StyledButton>
        </StyledContact>
    </StyledSection>
)
export default Contact;