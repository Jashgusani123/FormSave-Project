let arr = [];
function on() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let conpass = document.getElementById("conpass");

    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);
    // console.log(conpass.value);

    if (name.value == "" || email.value == "" || password.value == "" || conpass.value == "") {
        alert("Plz Full Fill");
        name.focus();
        return false;
    } else {
        if (password.value === conpass.value && password.value !== "") {
            function re() {
                localStorage.setItem("name", name.value);
                localStorage.setItem("email", email.value);
                localStorage.setItem("password", password.value);
                localStorage.setItem("conpass", conpass.value);

                loded1();
            }
            re();

        } else {
            alert("Plz Enter same Password");
        }

    }
}
function loded1() {
    if (localStorage.length > 0) {
        let div1 = document.getElementById("em");
        div1.style.display = "none";
        let div2 = document.getElementById("contenar");
        div2.style.display = "block";
        let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    p1.innerText = `Name = ${localStorage.getItem("name")}`;
    p2.innerText = `Email = ${localStorage.getItem("email")}`;
    p3.innerText = `PassWord = ${localStorage.getItem("password")}`;
    p4.innerText = `ConformPassword = ${localStorage.getItem("conpass")}`;
    let div = document.getElementById("value");
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    }else{
        on();
}
}
window.onload = () => loded1();

