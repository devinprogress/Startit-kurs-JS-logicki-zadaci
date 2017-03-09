var people = [
{
	name: "Joe Schmoe",
	yearsExperience: 1,
	department: "IT"
},

{
	name: "Sally Salerson",
	yearsExperience: 15,
	department: "Engineering"
},

{
	name: "Bill Bilson",
	yearsExperience: 5,
	department: "Engineering"
},

{
	name: "Jane Janet",
	yearsExperience: 11,
	department: "Management"
},

{
	name: "Bob Hope",
	yearsExperience: 9,
	department: "IT"
}

];


//godine iskustva

function yearsExperienceTotal()
{
	var t = 0;
	for (var i = 0; i < people.length; i++)
	{
		t += people[i].yearsExperience;
	}
	return ('Svi ljudi ukupno imaju ' + t + ' godina iskustva.')
}

console.log(yearsExperienceTotal(people));