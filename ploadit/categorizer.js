var science = ["Choose class", "!Biology","AP Bio", "Bio 1AC", "Bio 1A", "Bio 1", "!Chemistry","AP Chem", "Chem H", "Chem 1", "!Physics", "AP Physics", "Physics 1", "Physics H"];
var math = ["Choose class", "!Year One", "Algebra 1A/Geom A","Geom/Alg2 H","!Year Two", "Alg2/Trig A","Trig/ Analyt H", "!Year Three", "IAC", "Analysis H", "!Year Four", "AP Calc AB", "AP Calc BC"];
var language = ["Choose class", "!Chinese", "AP Chinese", "Chinese 3", "Chinese 2", "Chinese 1", "!Spanish", "Spanish for Spanish Speakers 1", "Spanish for Spanish Speakers 2", "AP Spanish", "Spanish 4", "Spanish 3", "Spanish 2", "Spanish 1" , "!German", "AP German", "German 4", "German 3", "German 2", "German 1" ,"!Japenese", "AP Japenese", "Japenese 5", "Japenese 4", "Japenese 3", "Japenese 2", "Japenese 1" , "!French", "AP French", "French H", "French 3", "French 2", "French 1"];
var history = ["Choose class", "!Year One", "World History", "!Year Two", "Contemporary World History", "US Goverment", "!Year Three", "US History", "AP US History", "!Year Four", "AP Economics", "Economics"];

//needs element e of select tag and number n of which dropdown
function showClass(e, n){
	var x = e.selectedIndex;
	var target = "class-choice" + n; //used to select which set of dropdowns to target
	
	var targetArray;
	
	if(x == 1){
	targetArray = science;
	}
	else if(x == 2){
	targetArray = math;
	}
	else if(x == 3){
	targetArray = language;
	}
	else if(x == 4){
	targetArray = history;
	}
	
	if (typeof targetArray === 'undefined') {
		document.getElementById(target).style.visibility = "hidden"; 
	}
	else{
		var HTMLresult = "";
		
		for(var i = 0; i < targetArray.length; i++){
			if(targetArray[i].charAt(0) == "!"){
				HTMLresult += "</optgroup><optgroup label='" + targetArray[i].substring(1) + "'>";
			}
			else{
				HTMLresult += "<option value='" + targetArray[i] + "'>" + targetArray[i] + "</option>";		
			}
		}
		
		document.getElementById(target).innerHTML = HTMLresult;
		document.getElementById(target).style.visibility = "visible";
	}
}