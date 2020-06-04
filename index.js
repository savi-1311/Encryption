function openaes() {
	var aes = document.getElementById("aes");
	var aesc = document.getElementById("aesc");
  if (aes.style.display === "none") {
    aes.style.display = "block";
  } else {
    aes.style.display = "none";
  }
}

function openrsa() {
	var rsa = document.getElementById("rsa");
	var rsac = document.getElementById("rsac");
  if (rsa.style.display === "none") {
    rsa.style.display = "block";
  } else {
    rsa.style.display = "none";
  }
}

function opentdes() {
	var tdes = document.getElementById("tdes");
	var tdesc = document.getElementById("tdesc");
  if (tdes.style.display === "none") {
    tdes.style.display = "block";
  } else {
    tdes.style.display = "none";
  }
}
