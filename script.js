 //
 
 
 //
 
 // if u tried this ctrl shift I, im kinda dissapointed, why did u do it? for sure its not even for u. well shame on u cuz now
 // u will see what inside of this site a make. and dont judge me since im not great with this yet.

 
 function login() {
  const correctSurname = "navidad"; 
  const correctBirthdate = "keres...";

  const enteredSurname = document.getElementById("surname").value.trim().toLowerCase();
  const enteredBirthdate = document.getElementById("birthdate").value.trim().toLowerCase();

  console.log("Entered surname:", enteredSurname);
  console.log("Entered birthdate:", enteredBirthdate);

  if (enteredSurname === correctSurname && enteredBirthdate === correctBirthdate) {
    document.getElementById("surname").style.display = "none";
    document.getElementById("birthdate").style.display = "none";
    document.querySelector("button").style.display = "none";

     document.getElementById("main-title").style.display = "none";
    document.getElementById("subtitle").style.display = "none";

    document.getElementById("story").style.display = "block";
  } else {
    alert("at least put an effort to decode it girl, or maybe you're not her?");
  }
  

  


}