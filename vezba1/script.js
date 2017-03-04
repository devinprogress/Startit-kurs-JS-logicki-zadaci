var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];

var trazenaVrednost = 4;
var vrednostZaZamenu = 25;
var noviNiz = [];


function newArray() {
for (var i = 0; i < niz.length; i++)
{
	if(niz[i]==4)
	{
		niz[i]=25;
	}
	noviNiz.push(niz[i]);
}
	console.log(noviNiz);
}

newArray();