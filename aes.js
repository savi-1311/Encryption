var evalue =  document.getElementById("evalue");
var dvalue =  document.getElementById("dvalue");
function encrypt1() {
	var key =  document.getElementById("keyInput").value; 
    var msg =  document.getElementById("msgInput").value;
	var encrypted = CryptoJS.AES.encrypt(msg, key);
	evalue.textContent = encrypted.toString(); 
} 
function decrypt1() { 
	var key =  document.getElementById("keyInput").value; 
    var msg =  document.getElementById("msgInput").value;
	var encrypted = CryptoJS.AES.encrypt(msg, key);
	var decrypted = CryptoJS.AES.decrypt(encrypted, key);
	dvalue.textContent = decrypted.toString(CryptoJS.enc.Utf8); 
}
