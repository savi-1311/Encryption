var pubkey =  document.getElementById("pubkey");
var evalue2 =  document.getElementById("evalue2");
var dvalue2 =  document.getElementById("dvalue2");
var PassPhrase = "The Moon is a Harsh Mistress.";
var Bits = 1024; 
var privatekey = cryptico.generateRSAKey(PassPhrase, Bits);
var publickey = cryptico.publicKeyString(privatekey);

function encrypt2() {
    var msg2 =  document.getElementById("msgInput2").value;
	var enc = cryptico.encrypt(msg2, publickey);
	evalue2.textContent = enc.cipher.toString(); 
} 
function decrypt2() { 
	var msg2 =  document.getElementById("msgInput2").value;
	var enc = cryptico.encrypt(msg2, publickey);
	var dec = cryptico.decrypt(enc.cipher, privatekey);
	dvalue2.textContent = dec.plaintext.toString(); 
}
