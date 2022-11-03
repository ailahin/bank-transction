document.getElementById('login-submit').addEventListener('click', function(){

    const emailField= document.getElementById('user-email');
    const userEmail= emailField.value;

    const passwordField= document.getElementById('user-password');
    const userPassword= passwordField.value;

    if (userEmail=='ailahin89@gmail.com' && userPassword =='secret'){
      //  console.log( 'valid user');
      window.location.href= 'Banking-site.html'
    }


})