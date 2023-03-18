const forgetpasswordForm=document.querySelector('#login-form');
const emailInput = document.querySelector('#email');


forgetpasswordForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  const email=e.target.email.value;

    const myobj={
      email
    }
    
    axios.post("http://localhost:3000/password/forgotpassword",myobj)
    .then((res)=>{
        window.location.href='./login.html';
    }).catch((err)=>{
     console.log(err);
    })
   emailInput.value='';
 
}
