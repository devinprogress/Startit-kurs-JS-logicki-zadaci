
//datiObjekat

var testObjekat = {
 	naziv: "Startit kurs pravljenja sajtova",
 	trajanjeNedelja: 33,
 	predavac: {
 		ime: "Petar",
 		prezime: "Popovic"
 	},
 	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1 , 9],
 	organizacija: "Startit",
 	kursJosTraje: true
	
};



//zadatak: ocene kao string '/10'


function marks() 
{
	var m = testObjekat.ocenePolaznika;

	for (var i = 0; i < m.length; i++)
	{
		m[i] = m[i] + '/10';
	}
	return m;

}

console.log(marks(testObjekat));




//zadatak: rate_count




/*ocenePolaznika = [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1 , 9];
result = {};

for(var i = 0; i < ocenePolaznika.length; ++i) {
	if(!result[ocenePolaznika[i]])
		result[ocenePolaznika[i]] = 0;
	++result[ocenePolaznika[i]];
}

console.log(result);*/



//zadatak: prosecna ocena

function averageMark ()
{
	var total = 0;
	var j = testObjekat.ocenePolaznika;

	for (i = 0; i < j.length; i++) 
	{
		total += j[i];
	}

	var avg = total/j.length;

	return ('Prosek ocena je: ' + avg.toFixed(2) + '.');
}

console.log(averageMark(testObjekat));
