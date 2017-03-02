
	/*var user = Number ();

	var result = 1;

	for (i = user; i >= 0; i++)
	{
		result *= i;
	}

	console.log(result);*/

	/*function factorialize(num)
	{
		if (num===0) 
		{
			return 1;
		}

		else if (num<0)
		{
			return "type positive number"
		}
		else 
		{
			return num * factorialize(num-1)
		}
	}

	factorialize(5);*/

var user = Number(prompt("Insert a positive number"));

var sum = 1;

for (i=user; i>0; i--)
{
    sum *= i;
}

console.log(sum);

