const gradeFunction= () => {
    var x = document.getElementById("formScore").elements[0].value;
  var score = parseInt(x);
  //  score = parseInt(prompt("Enter your score"));
  if (score >= 80 && score <=100) {
      //console.log("You scored an A");
     
      document.getElementById("demo").innerHTML = "You scored an A";
  }
  else if (score < 80 && score >= 60 ) {
      // console.log("You scored an B");
     
       document.getElementById("demo").innerHTML = "You scored an B";
  }
    else if (score < 60 && score >= 40 ) {
       //console.log("You scored an C");
      
       document.getElementById("demo").innerHTML = "You scored an C";
  }
        else if (score < 40 && score >= 20 ) {
       //console.log("You scored an D");
       
       document.getElementById("demo").innerHTML = "You scored an D";
  }
      else if (score < 20 && score >= 0 ) {
      // console.log("You scored an E");
      
       document.getElementById("demo").innerHTML = "You scored an E";
  }  
  
  else {
 
    // document.getElementById("demo").innerHTML = "Error:Please input values between 0 and 100";
    alert("Please input values between 0 and 100");
  }
}
 