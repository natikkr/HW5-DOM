function title(){
    let inputUser, inputPassword;
    inputUser  =  document.getElementById('userName').value;
    inputPassword  =  document.getElementById('userPassword').value;
    title ();
   }

function store(){
    let inputUser = document.getElementById("userName");
    let  inputPassword = document.getElementById('userPassword');
    localStorage.setItem("userName", inputUser.value);
    localStorage.setItem("userPassword", inputPassword.value);
    document.getElementById('printchatbox_1').innerHTML ="Name: "+ inputUser.value;
    document.getElementById('printchatbox_2').innerHTML ="Password: "+ inputPassword.value;
   }

//function addElement() {   
   //document.getElementById("BtN").addEventListener("click", store());
   // let newDiv = document.createElement('div')
   // newDiv.innerHTML = 'inputUser', 'inputPassword';
   // document.body.append(div);
  //  chatDiv.appendChild(newDiv);
//}

//BtN.onclick = function() {
  //let inputUser = document.getElementById("userName");
  // let inputPassword = document.getElementById('userPassword');
    //document.getElementById('printchatbox_1').innerHTML ="Name: "+ inputUser.value;
    //document.getElementById('printchatbox_2').innerHTML ="Password: "+ inputPassword.value;

   //};
