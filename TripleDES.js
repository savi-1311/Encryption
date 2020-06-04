var evalue3 =  document.getElementById("evalue3");
var dvalue3 =  document.getElementById("dvalue3");
var key =  document.getElementById("keyInput3").value; 
function encrypt3() {
    var msg =  document.getElementById("msgInput3").value;
	var encrypted = CryptoJS.TripleDES.encrypt(msg,key);
	evalue3.textContent = encrypted.toString(); 
} 
function decrypt3() {
    var msg =  document.getElementById("msgInput3").value;
	var encrypted = CryptoJS.TripleDES.encrypt(msg,key);
	var decrypted = CryptoJS.TripleDES.decrypt(encrypted,key);
	dvalue3.textContent = decrypted.toString(CryptoJS.enc.Utf8); 
}
