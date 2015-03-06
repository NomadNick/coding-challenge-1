var person = [
{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 7
},
{
	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 9
},
{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 4
},
{
	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 2
},
{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 33
},
{
	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 6
},
{
	name: 'Zaphod',
	occupation: 'President of the Galaxy',
}
];

var awesomeAverage = function () {
	var collectiveAwesomeness = 0;
	var programmerCount = 0;
	for (var i = 0; i < person.length; i++) {
		if (person[i].occupation == 'programmer'){
			collectiveAwesomeness+=(person[i].awesomeIndex);
			programmerCount++; 
		}
	}
	return collectiveAwesomeness/programmerCount;
};

	$('#awesome-index').append(awesomeAverage().toFixed(1));