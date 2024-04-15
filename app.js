
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".pt", ".net"]
let output = [];
const randomName = (string1, string2, string3 , string4) => {
  //write your code here
  

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      for (let k = 0; k < string3.length; k++) {
        for (let l = 0; l < string4.length; l++){

             let myTarget = document.getElementById("row");
         let myElement = document.createElement("p");
         myElement.innerText =string1[i] + string2[j] + string3[k]+ string4[l];
         myTarget.appendChild(myElement);

        }

       
       // output.push();
      }
    }
  }
  return output;
};
randomName(pronoun, adj, noun , domain);

