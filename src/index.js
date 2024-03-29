// Function Context
// "Invocation Context"

// as a function (baseless function)

function thisLogger() {
	console.log(this)
}

function locationLogger() {
	console.log(this.location)
}

const listMembers = function() {
	console.log("in the outer function: ", this)
	this.members.forEach((member) => {
	  console.log(`${member.name} is a member of ${this.name}`)
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

// Factory Pattern
function bandFactory(name, membersArray){
	function list(){
		this.members.forEach((member) => {
			console.log(`${member.name} is a member of ${this.name}`)
		})
	}
	return {
		name: name,
		members: membersArray.map(member => ({name: member})),
		listMembers: list
	}
}

// Constructor function
function Band(name, members){
	this.name = name
	this.members = members.map(member => ({name: member}))
}

Band.prototype.list = function(){
	this.members.forEach((member) => {
		console.log(`${member.name} is a member of ${this.name}`)
	})
}

class Band {
	static all = []
	constructor(name, members){
		this.name = name
		this.members = members.map(member => ({name: member}))
		this.constructor.all.push(this)
	}

	list(){
		console.log(this)
		this.members.forEach((member) => {
			console.log(`${member.name} is a member of ${this.name}`)
		})
	}

	static whoAmI(){
		console.log(this)
	}
}
