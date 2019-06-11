export default function sendEmail(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message")

    let valid = true;
    let invalid;

    if(name.value === ""){
        valid = false;
    }
    else {
        invalid += "name,"
    }
    if(email.value=== ""){
        valid = false;
    }
    else{
        invalid +=" email,"
    }
    if(message.value === ""){
        valid = false;

    }
    else {
        invalid += "message"
    }

    if(valid === true){
        console.log("Email sent")
    }
    else {
        console.log("Please enter valid " + invalid);
    }
}