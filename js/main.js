
function cocktail() {

	var bottleSize = Number(document.getElementById('bottleSize').value);
	var bottleCost = Number(document.getElementById('bottleCost').value);
	var pourAmount = Number(document.getElementById("pourAmount").value);
	var bevCost = Number(document.getElementById("bevCost").value);
	var bottleOz = (bottleSize * 0.033814023);
	var poursPerBottle = (bottleOz / pourAmount);
	var costPerOz = ((bottleCost / bottleSize)*10);
	var costOfDrink = Math.round(costPerOz * ((bevCost / 10)*3));
	var drinksPerBottle = Math.floor(bottleOz / pourAmount);
	var totalGrossPerBottle = Math.round(costOfDrink * drinksPerBottle);



//HTML output for the user
	document.getElementById("charge").innerHTML = 
	"You should charge about"+" $"+ costOfDrink + " for that tasty beverage.";

	document.getElementById("totalGross").innerHTML = 
	"The total Gross profit for the bottle should be about"+ " $" + totalGrossPerBottle +".00" +".";

	document.getElementById("numDrinks").innerHTML = 
	"You should be getting about"+ " " + drinksPerBottle + " " + "drinks if they are poured correctly."


	//if statments to control input


		if ( isNaN(bottleCost))  {
			alert("Please enter a correct cost for the bottle!")
		} else {
			return;
		}

		if ( isNaN(pourAmount)) {
			 alert("Please enter a correct number!")
		} else {
			return;
		}

	};