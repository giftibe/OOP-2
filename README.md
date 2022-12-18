# OOP-2
This repository contains two files whose major focus is on understanding and implementation of the concepts of Object Oriented Programming in JavaScript

# Usage
clone the repo and cd into the directory such that you are on OOP II
To run the solution, make sure you have nodejs installed
use the following command terminal

# run Animal.js
node Animal.js

# run Learnable.js
node Learnable.js
You can change the inputs to see a different output

# Execution for Animal.js
Pictorial Reference: https://cdn1.byjus.com/wp-content/uploads/2019/04/Animal-Kingdom-Classification-of-Animal-Kingdom.png

                        HOW TO EXECUTE ANIMAL.JS CODE
                        
FIRST:  Instantiate or create a new object of the preferred class

SECOND: Input the values/names of the creatures in the function creature. <objName>.inputCreatures("value","value")

THIRD: console.log the objName.seeNames() to view inputted animal names from above

FOURTH: console.log the <objName> to view object/animal properties

FIFTH: console.log the objectName.keyFeatures() to view object/animal features



                      SAMPLE

	const b = new Aves()

	b.inputCreatures("toad", 'salamanda', 'turkey') 

	console.log(b.seeNames());

	console.log(b);  

	console.log(b.keyFeature());
	
# Execution for Learnable.js

                        HOW TO EXECUTE LEARNABLE.JS CODE
												
FIRST:  Instantiate or create a new object of the preferred class

SECOND: Input the values/names of the user in the function followed by the values, where needed.

THIRD: console.log  objName.Learner() to view inputted learners details

FOURTH: console.log the <objName> after instantiating the Admin class to view Admins properties

FIFTH: console.log the objectName.<Funtion()> to execute desired function

	CODE SAMPLE
	let josh = new Learner('josh1', 'josh@gmail.com', 24565635843949);
	console.log(josh);
	josh.register();
	
	let Ad = new Admin();
	console.log(Ad);


			
