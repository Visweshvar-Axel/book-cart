const regform = document.querySelector("#reg-form");
const unameinput = document.querySelector("#uname");
const passinput = document.querySelector("#pass");
const conpassinput = document.querySelector("#conpass");
const ageinput = document.querySelector("#age");
const addinput = document.querySelector("#address");

regform.addEventListener('submit',(eve_reg) => {
    eve_reg.preventDefault();

    const uname = unameinput.value.trim();
    const pass = passinput.value.trim();
    const conpass = conpassinput.value.trim();
    const age = ageinput.value.trim();
    const add = addinput.value.trim(); 

    if(!uname || !pass || !conpass || !add){
        alert("Please enter userr name , password , confirm password , address ");
        return;
    }
    else if(age==18){
        alert("Please select your age");
        return;
    }
    else if(pass.length < 8 && conpass.length < 8){
        alert("password and confirm password is should atleast have more than \'8\' character");
        return;
    }
    else if(pass != conpass){
        alert("password and confirm password is not match");
        return;
    }

    alert("registration successfull");
    window.location.href = "login.html";
});