let SubmitBtn=document.getElementById("btn")
let name=document.getElementById("userName")
let email=document.getElementById("userEmail")
let pswd=document.getElementById("userPswd")
SubmitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const nameValue=name.value
    const emailValue=email.value
    const pswdValue=pswd.value
    console.log(nameValue)
    localStorage.setItem("name",nameValue)
    localStorage.setItem("email",emailValue)
    localStorage.setItem("pswd",pswdValue)

    alert("Singup done successfully!" )
    setTimeout(()=>{
        window.location.href="login.html"
    },2000)
    })

    const loginBtn=document.getElementById("btn")
    loginBtn.addEventListener("click",(e)=>{
        let nameStorage=localStorage.getItem("name")
        let pswdStorage=localStorage.getItem("pswd")
       
        let inputUserName=document.getElementById ("Name").value
        // console.log(inputUserName)
        let inputUserPswd=document.getElementById("Pswd").value

        if(nameStorage==inputUserName && pswdStorage==inputUserPswd){
            alert("login done successfully!")
            setTimeout(()=>{
                window.open("home.html")
            },2000)
        }else{
            alert("Oopps something went wrong")
        }
    })