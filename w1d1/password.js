var newPassword = "";
function obfuscate (password){
    newPassword = password.replace (/a/g,"4");
    newPassword = newPassword.replace (/e/g,"3");
    newPassword = newPassword.replace (/o/g,"0");
    newPassword = newPassword.replace (/l/g,"1");
  return newPassword;
}

console.log(obfuscate('audaciously'));
console.log(obfuscate('password'));
