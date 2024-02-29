const model = document.createElement('div')
    model.id = 'model'

const model2 = document.createElement('div')
    model2.id = 'model2'
let signin_one = document.querySelector(".bodyArea3")
let signin_two = document.querySelector(".bodyArea2")
let content1 = document.createElement('span')

function validateForm(event) {
    let Firstname = document.forms["Signup_Form"]["Firstname"].value;
    let Lastname = document.forms["Signup_Form"]["Lastname"].value;
    let Password = document.forms["Signup_Form"]["Password"].value;
    let Re_entry = document.forms["Signup_Form"]["re-enter_password"].value;
    let Mobile = document.forms["Signup_Form"]["Mobile"].value;
    let Mail = document.forms["Signup_Form"]["Mail"].value;
    let Address = document.forms["Signup_Form"]["Address"].value;

    let Firstnamefalse = /^[a-zA-Z]+$/.test(Firstname);
    let Lastnamefalse = /^[a-zA-Z]+$/.test(Lastname);
    let PasswordTest = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/.test(Password);
    let Mobileval = /^[0-9]+$/.test(Mobile);
    let Mailvar = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(Mail);

    if (Firstname.length<4 || Firstname.length>15 || !Firstnamefalse){
        alert("Enter a valid FirstName");
        return false;
    }else if(Lastname.length<4 || Lastname.length>15 || !Lastnamefalse){
        alert("Enter a valid LastName");
        return false;
    }else if(Password.length<8 || Password.length>15 || !PasswordTest){
        alert("Enter a valid Password");
        return false;
    }else if(Password != Re_entry){
        alert("Password not Matching");
        return false;
    }else if(Mobile.length !==10 || !Mobileval){
        alert("Enter a valid Mobile Number");
        return false;
    }else if(!Mailvar){
        alert("Enter a valid Email Address");
        return false;
    }else if(Address.length<30){
        alert("Enter a valid Address");
        return false;
    }else{
        signin_two.appendChild(model2)
        model2.classList.add('active')
        content1.textContent=`SignUp Successful! Please LogIn to Continue`
        model2.appendChild(content1)
        event.preventDefault();
    }
}

model2.addEventListener('click',()=>{
    model2.classList.remove('active')
    window.location.href = "signIn.html";
})





function togglefn(){
    let getEle = document.querySelector(".navBar")
    getEle.classList.toggle("active")
}
let sandwichBtn = document.querySelector(".sandwich")
sandwichBtn.addEventListener('click',()=>{
    togglefn()
})



// content1

function SignInvalidateForm(event) {
    let Signup = document.forms["SignIn_Form"]["userid"].value;
    let Password = document.forms["SignIn_Form"]["Password"].value;

    let UserIDfalse = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/.test(Signup) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Signup);
    let PasswordTest = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,15}$/.test(Password);


    if (!UserIDfalse){
        alert("Enter a valid User Name");
        return false;
    }else if(!PasswordTest){
        alert("Enter a valid Password");
        return false;
    }else{
        signin_one.appendChild(model)
        model.classList.add('active')
        content1.textContent=`Signed In Successfully`
        model.appendChild(content1)
        event.preventDefault();
        // return true
    } 

    model.addEventListener('click',()=>{
        model.classList.remove('active')
        window.location.href = "ToDoList.html";
    })
}

model.addEventListener('click',()=>{
    model.classList.remove('active')
    window.location.href = "ToDoList.html";
})

// ToDo List

document.addEventListener("DOMContentLoaded", function() {

let btnbutton = document.getElementById("addbtn")
let InputValueList = document.getElementById("myinput")
let upload = document.querySelector(".outputs")


btnbutton.addEventListener("click",(event)=>{
    event.preventDefault();
    ToDoFunction()
})

function ToDoFunction(){
    let newEle = document.createElement("span")
    let closeBtn = document.createElement("button")
    closeBtn.className="removeBtn"
    closeBtn.textContent="X"

    let newVar = document.createElement("div")
    newVar.className="EleList"
    newEle.textContent = InputValueList.value
    if(InputValueList.value==""){
        alert("Enter a value")
    }else{
        upload.appendChild(newVar)
        newVar.appendChild(newEle)
        newVar.appendChild(closeBtn)
        InputValueList.value=''
    }
    closeBtn.addEventListener('click',()=>{
        removefn(newVar)
})
}

function removefn(child) {
    upload.removeChild(child)    
}
})

document.addEventListener("DOMContentLoaded", function () {
fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(res=>res.forEach(element => {
                displayfn(element)
            }))
        })

function displayfn(e){
    let create = document.createElement("li")
    create.innerHTML = `<div class="card">`+
                            `<div class="cardimg">`+
                                `<img src="`+e.image+`" alt="">`+
                            `</div>`+
                            `<span>`+e.title+`</span>`+
                        `</div>`

    document.getElementById("uli").appendChild(create)
}






