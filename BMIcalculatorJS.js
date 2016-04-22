// creating Event Listner on Click of Button to get the input from user //
var eventCalculate = document.getElementById("calculate");
eventCalculate.addEventListener('click',BMIcalculate,false);

// creating Event Listner on Click of Button to reset the calculator //
var eventReset = document.getElementById("resetbtn");
eventReset.addEventListener('click',reset,false);


//Getting the user input for weight //
    var weightofuser  = document.getElementById("weight").value;
     //Getting the user input for height //
    var heightofuser  = document.getElementById("height").value;
    

// Creating Function to Calculate BMI //

function BMIcalculate()
{
    /*//Getting the user input for weight //
    var weightofuser  = document.getElementById("weight").value;
     //Getting the user input for height //
    var heightofuser  = document.getElementById("height").value;*/
    
//  Calculating the BMI of user //
    
    var BMI = (weightofuser / (heightofuser*heightofuser));
    
// If statement for BMI Under 18.5 ///
    if ( BMI >0  && BMI < 18.5)
        {
            // Displaying the result for Underweight //
            document.getElementById("BMIresult").innerHTML ="<li>"+ "Your BMI Measures :-" +BMI+"."+"</li>"+"<br>"+"<li>"+"You are Underweight."+"</li>";
            
        }
    
// If statement for BMI between 18.5 & including 24.9 //
    else if ( BMI >=18.5  && BMI <= 24.9)
        {
            // Displaying the result for Normal //
            document.getElementById("BMIresult").innerHTML ="<li>"+ "Your BMI Measures :-" +BMI+"."+"</li>"+"<br>"+"<li>"+"You are Normal."+"</li>";
            
        }

// If statement for BMI between 25 & including 29.9 //
    else if ( BMI >=25  && BMI <= 29.9)
        {
            // Displaying the result for Overweight //
            document.getElementById("BMIresult").innerHTML ="<li>"+ "Your BMI Measures :-" +BMI+"."+"</li>"+"<br>"+"<li>"+"You are Overweight."+"</li>";
            
        }
    
// If statement for BMI over 30 //
    else 
        {
            // Displaying the result for Obese //
            document.getElementById("BMIresult").innerHTML ="<li>"+ "Your BMI Measures :-" +BMI+"."+"</li>"+"<br>"+"<li>"+"You are Obese."+"</li>";
            
        }  
   
}

// Function will reload the page.
function reset()
{
    window.location.reload();
}


