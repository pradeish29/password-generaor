let Keylist= 'QWERTUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*'
let password=''
let passgen =(plength) =>{
    password= ''
for (i=0; i<plength; i++){
    password+=(Keylist.charAt(Math.floor(Math.random()* Keylist.length)))
}    
    return password
}
let genpass =(plength) =>{
    document.pass.output.value= passgen(plength)
}