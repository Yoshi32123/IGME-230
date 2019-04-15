// base line
// https://newton.now.sh/:operation/:expression
const baseURLreturn = "https://newton.now.sh";

// base vars
let url = baseURLreturn;
let userInput = "";
let takeDerivative = true;

// links functions up to reset together
let fun1 = (e) => {document.querySelector("#submit").onclick = getData};
let fun2 = (e) => {document.getElementById("searchterm").onclick = deleteDefaultText}
let fun3 = (e) => {document.getElementById("switch").onclick = switchMethod}

function start(){
    fun1();
    fun2();
    fun3();
}

window.onload = (e) => start();

function deleteDefaultText(){ 
	//Get submit button
	let submitbutton = document.getElementById("searchterm");
	//Add listener to submit button
	if(submitbutton.addEventListener){
			if (submitbutton.value == "Type text here"){
				submitbutton.value = "";
            }
	}
}

// Get the user input
function getData(){
    userInput = document.getElementById("searchterm").value;

    // finds right call based on choice
    if (takeDerivative)
    {derive(userInput);}
    else
    {integrate(userInput);}
    

    // what the url looks like
	console.log(url);
	console.log(jQuery);
	console.log($);

    // tell jQuery to download the data
    $.ajax({
    dataType: "json",
    url: url,
    data: null,
    success: jsonLoaded // callback function is called when data arrives
    })
}

// if json loaded, get the correct data out
function jsonLoaded(obj){
    // just log out the JSON for now
    console.log("obj = " + obj);
    console.log("obj stringified = " + JSON.stringify(obj));

    let result = obj.result;

    document.querySelector("#resultDiv").innerHTML = `<p id="results">${result}</p>`;
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.style.border = "1px solid black ";
    resultDiv.style.background = "#E6E6E6";
}

// switch method
function switchMethod(){
    if (takeDerivative){
        takeDerivative = false;
        document.querySelector("title").innerHTML = "Integration";
        document.querySelector("h1").innerHTML = "Integration Calculator";
        document.querySelector("button").innerHTML = "Switch to Differentiation Calculator";
    }
    else{
        takeDerivative = true;
        document.querySelector("title").innerHTML = "Differentiation";
        document.querySelector("h1").innerHTML = "Differentiation Calculator";
        document.querySelector("button").innerHTML = "Switch to Integration Calculator";
    }

    document.querySelector("#resultDiv").innerHTML = `<p id="results">[results]</p>`;
}


// --- NEWTON FUNCTIONS --- //

// Derive
function derive(input){
    url = baseURLreturn + "/derive/" + input;
}

// Integrate
function integrate(input){
    url = baseURLreturn + "/integrate/" + input;
}

