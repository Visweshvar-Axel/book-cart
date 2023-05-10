const bankform = document.querySelector("#bankform");
const nameinput= document.querySelector("#name");
const cardinput= document.querySelector("#card");
const cvvinput= document.querySelector("#cvv");

bankform.addEventListener("submit",(bank_event)=>{
    bank_event.preventDefault();
    const uname=nameinput.value.trim();
    const card=cardinput.value.trim();
    const cvv=cvvinput.value.trim();

    if(!uname || !card || !cvv){
        alert("please enter name ,credit card,cvv");
        return;
    }
    else if(card.length != 13){
        alert("please enter a valid 13 digit card number");
        return;
    }
    else if(cvv.length != 3){
        alert("valid cvv is three digits");
        return;
    }

    alert("payment successful");
    bankform.submit();
    //window.location.href="thanks.html";
});