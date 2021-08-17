// getting, matching the input field value and linking to the bank page  
document.getElementById('login-button').addEventListener('click',function(){
    const emailField= document.getElementById('email-field');
    const emailValue = emailField.value;
    // console.log(emailValue);

    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value
    // console.log(passwordValue);

    if(emailValue == 'abc@abc.com' && passwordValue == 'abc'){
        window.location.href = 'banking.html';
    }
    else{
        alert("Wrong email or password!");
    }
})

// clear the input field after press the button 
document.getElementById('login-button').addEventListener('click',function(){
    const emailField= document.getElementById('email-field');

    const passwordField = document.getElementById('password-field');

    emailField.value = '';
    passwordField.value = '';
    
})