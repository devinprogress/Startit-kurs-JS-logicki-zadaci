var weight1 = 10;
var weight2 = 10;
var maxWeight = 45;


if (weight1+weight2 <= maxWeight) 
	{
	    console.log ("nosimo oba");
	}   

	else if (weight1 > maxWeight && weight2 <= maxWeight) 

	{
	     console.log ("mozemo drugi");
	}

	else if (weight1 <= maxWeight && weight2 > maxWeight) 
	{
		console.log ("mozemo prvi");
	}

	else if (weight1 <= maxWeight && weight2 <= maxWeight && weight1+weight2 > maxWeight)
	{
		console.log ("mozemo da biramo koji cemo ali ne mozemo oba");
	}

	else 
	{
		console.log ("proveri unos");
	}