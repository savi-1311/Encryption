var evalue =  document.getElementById("evalue1");
var dvalue =  document.getElementById("dvalue1");
function encrypt1() {
	var key =  document.getElementById("keyInput1").value; 
    var msg =  document.getElementById("msgInput1").value;
	var encrypted = CryptoJS.AES.encrypt(msg, key);
	evalue.textContent = encrypted.toString(); 
} 
function decrypt1() { 
	var key =  document.getElementById("keyInput1").value; 
    var msg =  document.getElementById("msgInput1").value;
	var encrypted = CryptoJS.AES.encrypt(msg, key);
	var decrypted = CryptoJS.AES.decrypt(encrypted, key);
	dvalue.textContent = decrypted.toString(CryptoJS.enc.Utf8); 
}
