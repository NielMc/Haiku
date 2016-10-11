document.addEventListener("DOMContentLoaded", init, false);
	
	
	function init() {
	
		generate();
		
		var enterButton = document.getElementById("haikuButton");
			enterButton.addEventListener("click", generate);

		}

	function generate() {
	
		var oneS = ["true", "dark", "cold", "young", "great", "balls", "one", "back", "full", "car", "song", "fast", 
"All", 
"And", 
"Are", 
"As",
"Be",
"By",
"Day",
"Did",
"Each",
"Few",
"For",
"Get",
"She", 
"So",
"State",
"Than",
"That",
"The",
"They",
"Time",
"To",
"Up",
"War",
"Was"
];
		var twoS = ["visions", "distance", "conscience", "process", "chaos",

"Again",  

"Aircraft", 

"Alleged", 

"Ancient", 

"Auto", 

"Avoid", 

"Bacon", 

"Basket", 
"Between", 
"Bible", 

"Billion", 

"Birthright", 

"Brilliant", 

"Buildings", 

"Collapsed", 

"Conscience", 

"Cycle" ];

		var threeS = ["ravishing", "amazing", "fanciful", "delightful", "delicate"];
		var fourS = ["superstitious", "continuous", "incapable", "contradicting", "overwhelming",

"Adequate", 

"Amazement", 

"Attention", 

"Attractive", 

"Average", 

"Banana", 

"Bicycle",  

"Blindingly", 

"Buffalo",  

"Cabinet", 

"Certainly", 

"Companion", 

"Complement", 

"Conference", 

"Conference",  

"Connection", 

"Considered", 


"Customary",  

"Dangerous",  

"Difficult", 

"Dilemma", 

"Dinosaur", 

"Documents",

"Easily",

"Electric", 

"Everything",

"Exciting", 

"Exercise", 

"Exhaustion", 

"Family",

"Favourite", 

"Glacier",

"Happenings",

"Horizon", 

"Illustrate",

"Industry", 

"Instrument",

"Legacy",

"Liberal",

"Library",

"Numerous", 

"Palatial",

"Period",

"Persistent", 

"Photograph",

"Reunion", 

"Substitute", 

"Terrible", 

"Typical" 

		];
		var fiveS = ["undeniable", "beautiful", "irreplaceable", "unbelievable", "irrevocable"];
		
		var num1=(Math.floor(Math.random()*10) % oneS.length);
		var num2a=(Math.floor(Math.random()*10) % twoS.length);
		var num2b=(Math.floor(Math.random()*10) % twoS.length);

		var num3=(Math.floor(Math.random()*10) % threeS.length);
		var num4=(Math.floor(Math.random()*10) % fourS.length);
		var num5=(Math.floor(Math.random()*10) % fiveS.length);
			
		var words = document.getElementById('words').innerHTML = threeS[num3] + " " + twoS[num2a]; //5
 		var words_2 = document.getElementById('words_2').innerHTML= twoS[num2b] + " " + fiveS[num5] //7
 		var words_3 = document.getElementById('words_3').innerHTML= fourS[num4] + " " + oneS[num1]; //5
		}		