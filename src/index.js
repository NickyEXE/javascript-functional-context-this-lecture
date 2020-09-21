// Function Context
// "Invocation Context"

// as a function (baseless function)
// as a method
// via a method of the function object
// as a contructor

function thisLogger() {
	console.log(this)
}

function locationLogger() {
	console.log(this.location)
}

const listMembers = function() {
	this.members.forEach(function(member) {
	  console.log(`Member: ${member.name}`)
	})
}


const ewf = {
	name: "Earth, Wind, and Fire",
	location: "Boogie Wonderland",
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	members: [
	  {name: 'Maurice White'},
	  {name: 'Philip Bailey'},
		{name: 'Ralph Johnson'},
		{name: 'Earth'},
		{name: 'Wind'},
		{name: 'Fire'},
	],
	listMembers: listMembers
}

const vp = {
	name: "Village People",
	location: 'In the Navy',
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	members: [
	  {name: 'Jacques Morali'},
	  {name: 'Henri Belolo'},
		{name: 'Victor Willis'},
		{name: 'Steve Guttenburg'}
	],
	listMembers: listMembers
}

const bgs = {
	name: "The Bee Gees",
	location: 'Haunting John Travolta\'s Mansion',
	thisLogger: thisLogger,
	locationLogger: locationLogger,
	members: [
	  {name: 'Jacques Morali'},
	  {name: 'Henri Belolo'},
		{name: 'Victor Willis'},
		{name: 'Steve Guttenburg'}
	],
	listMembers: listMembers

}
