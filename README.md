(c) Victor Cottin @ wecodebetter.se

# NPM
Work in your groups and follow the instructions below step by step and make sure to write down answers to any questions marked with a :camel:. Write down your answers inside this README.md file.

### In this lab we will learn:

- Reading and implementing basic requirements
- Using an npm package and independently reading it's api docs and finding apropriate functions to use
- Publishing a package to npm
- The difference between es6 modules and "old" javascript packages on npm
- Using npm packages locally with npm link


# Time period helper
You are tasked with building a utility library with time and date related helper functions to be published to npm. The folder `date-and-time-helpers` contains the skeleton for the utility library. The `reddays` folder contains a `react` application that should use the `date-and-time-helpers` library.

### 1. Fork
One group member forks this repo with your github account and adds your group member as a collaborator. Both members then clone your fork to your local machines.

### 2. Get familiar
Look inside the `reddays` folder and run `npm install` and `npm start` inside to see how the app looks like in the browser. Try selecting a couple of different dates and see how the app is behaving.

### 3. Code the timeHelper function
Go to the `date-and-time-helpers` folder and look at the `src/timeHelper.mjs` file. Your first task is to code this function while making sure to fulfill the following requirements:

- The function should take 2 arguments, `startDate` and `endDate` that are strings eg. `"2021-08-01" and "2021-08-31"`
- You need to use the [day.js](https://day.js.org/) library.	
	- Install it with npm
	- Have a look in its docs to try to find a couple of good functions to help with implementing the requirements below.
- The function should return a "nice" string of text representing the time period that stretches between the two dates like the following:
	- A full month should be represented as the name of the month followed by the year, eg. `startDate=2021-08-01, endDate=2021-08-31 should return "August"`
	- A full year should be represented as the year itself, eg. `startDate=2021-01-01, endDate=2021-01-01 should return "2021"`
	- All other periods should return "No valid period"
- Start with added the following to the beginning of timeHelper.mjs:

		import dayjs from 'dayjs'
		import 'dayjs/locale/en-gb.js'
		dayjs.locale('en-gb') // en-gb starts week on monday, en does not
		const yyyymmdd = 'YYYY-MM-DD' // useful for simple .format(yyyymmdd)

Tip: A simple way of temporarily testing your function in `timeHelper.mjs` could be to run the following line in your terminal:

	node timeHelper.mjs
	// ...but in order for that to work you'd have to add some code to timeHelper.mjs such as:
	const timeHelper = ({startDate, endDate}) => {
		return 'November'
	}	
	// Added lines:
	console.log(timeHelper({startDate: '2021-08-01', endDate: '2021-08-31'}), ' == August')
	console.log(timeHelper({startDate: '2021-05-01', endDate: '2021-05-31'}), ' == May')
	console.log(timeHelper({startDate: '2021-01-01', endDate: '2021-12-31'}), ' == 2021')
	console.log(timeHelper({startDate: '2018-01-01', endDate: '2018-12-31'}), ' == 2018')
	console.log(timeHelper({startDate: '2021-01-05', endDate: '2021-03-15'}), ' == No valid period')

	// console.log('\n--------------\nHarder requirements ("extras"):')
	// console.log(timeHelper({startDate: '2019-11-01', endDate: '2019-11-30'}), ' == November 2019')
	// console.log(timeHelper({startDate: '2018-08-01', endDate: '2018-08-31'}), ' == August 2018')
	// console.log(timeHelper({startDate: '2021-07-05', endDate: '2021-08-20'}), ' == 5 Jul - 20 Aug')
	// console.log(timeHelper({startDate: '2021-01-01', endDate: '2021-05-30'}), ' == 1 Jan - 30 May')
	// console.log(timeHelper({startDate: '2019-11-10', endDate: '2019-11-29'}), ' == 10 Nov 2019 - 29 Nov 2019')
	// console.log(timeHelper({startDate: '2021-10-18', endDate: '2021-10-24'}), ' == W42')




:camel: **Question 1**: can you think of any other (better) way of testing your utility function while developing it?

### 4. Publish to npm
When you've finished your function publish it to npm.

- In your terminal, check who you're logged in as in npm `npm whoami`
- If you're not logged in, follow [these instructions](http://npm.github.io/installation-setup-docs/installing/logging-in-and-out.html) to create an npm account and login to npm from your terminal.
- Run `npm publish` inside the `date-and-time-helpers` folder

:camel: **Question 2**: Do you need to have commited your code to repo before publishing to npm?

:camel: **Question 3**: what error message do you get and how do you solve it?

- After you figure our what's wrong and fixed it, run `npm publish` again

:camel: **Question 4**: what error message do you get this time and how do you solve it?

- After you figure our what's wrong and fixed it, run `npm publish` again. The publish should work and you should get an output similar to the one below. If you don't, ask the teacher or a classmate for help.

```
npm notice 
npm notice 📦  date-and-time-helpers2@0.0.1
npm notice === Tarball Contents === 
npm notice 1.1kB LICENSE          
npm notice 511B  README.md        
npm notice 38B   babel.config.json
npm notice 289B  lib/timeHelper.mjs
npm notice 576B  package.json     
npm notice 68B   src/timeHelper.mjs
npm notice === Tarball Details === 
npm notice name:          date-and-time-helpers2                  
npm notice version:       0.0.1                                   
npm notice filename:      date-and-time-helpers2-0.0.1.tgz        
npm notice package size:  1.7 kB                                  
npm notice unpacked size: 2.6 kB                                  
npm notice shasum:        0732...cb968f77bfa
npm notice integrity:     sha512-xR3NBD0azMhdl[...]R39FleMBk+x+A==
npm notice total files:   6                                       
npm notice 
+ date-and-time-helpers@0.0.1
```

- Open your browser to https://www.npmjs.com/package/[your-package-name] and have a look at it

:camel: **Question 5**: How many dependencies and what different kind of dependencies can you see for your package on npm?

### 5. Use your newly published package

- In your terminal, go to the reddays folder and install your newly published package with npm
- In `App.js` create a new react component that uses your newly published timeHelper function where it says: `{/*	Component goes here */}`

:camel: **Question 6**: can you use your timeHelper function defined in `timeHelper.mjs` directly by `import timeHelper from 'date-and-time-helpers'`? Is something more needed?

- Make sure your component "passes" all the tests by manually clicking on the blue `TestLink`s in your browser and make sure your component is showing the expected output.

:metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: 

You've made it to check point 1! We'll go through the assignment so far shortly. Go ahead and do the extra **6.** below while you wait for your classmates to reach here too.

:metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: 

### 6. Extra
The requirement of your function in timeHelper.mjs has gotten tougher (use red test links in browser to test these):

- A full month in the `current` year should be represented as the name of the month, eg. `startDate=2021-08-01, endDate=2021-08-31 should return "August"`
- A full month in the any other year should be represented as the name of the month and that year, eg. `startDate=2018-08-01, endDate=2018-08-31 should return "August 2018"`
- A full week in the `current` year should be represented as a "W" and the number of the week, eg. `startDate=2021-10-18, endDate=2021-10-24 should return "W42"`
- Any other time period in the `current` year should return both dates in a "nice" string like so: "20 aug - 31 dec"
- Any other time period outside the `current` year should return both dates in a "nice" string like so: "20 aug 2018 - 31 dec 2019"


---
---
---
---

# Time period helper continued
Now let's continue to use and work with your npm library.

### 1. Commonjs

- In your terminal, open the commonjs folder
- Install your npm package
- Run `npm start`

:camel: **Question 1**: What error are you getting? What do you think the problem is?

### 2. Build for commonjs

- In your terminal, open date-and-time-helpers and run `npm run build`

:camel: **Question 2**: What happened?

- Republish your npm package
- In your terminal, go back to commonjs and reinstall your package and make sure you get the new version
- run `npm start` again

:camel: **Question 3**: Why did it work this time?

- In date-and-time-helpers, examine `package.json` and specifically the `scripts` section.

:camel: **Question 3**: What does `"clean", "build", "dist", "pub"` do and how do you imaging they can be used in an everyday work flow?

- Try bumping the version number in `date-and-time-helpers/package.json` and run `npm run pub`

:camel: **Question 4**: What do you think happened from looking at the output in the terminal?

### 3. Work locally
It's not a very nice workflow having to republish new versions of your package every time you want to change something and use it in reddays.

- Read about [npm link](https://docs.npmjs.com/cli/v7/commands/npm-link)
- Get npm link to work for you and implement the updated requirements below without having to republish your package

The requirement of your function in timeHelper.mjs has gotten tougher: (NOTE: If you already did this as extra above, continue to the next step)

Start by uncommenting the `Harder requirements` in timeHelper.js.

- A full month in the `current` year should be represented as the name of the month, eg. `startDate=2021-08-01, endDate=2021-08-31 should return "August"`
- A full month in the any other year should be represented as the name of the month and that year, eg. `startDate=2018-08-01, endDate=2018-08-31 should return "August 2018"`

- After you've implemented the features above, click red links to test that it works in the browser for reddays

:metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: 

You've made it to check point 2! We'll go through the assignment so far shortly. Go ahead and do the extra **4.** below while you wait for your classmates to reach here too.

:metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: :metal: 

### 4. Extra
- If you havent done them before, continue implementing these harder requirements
	- A full week in the `current` year should be represented as a "W" and the number of the week, eg. `startDate=2021-10-18, endDate=2021-10-24 should return "W42"`
	- Any other time period in the `current` year should return both dates in a "nice" string like so: "20 aug - 31 dec"
	- Any other time period outside the `current` year should return both dates in a "nice" string like so: "20 aug 2018 - 31 dec 2019"

- In `App.js` you'll find `<div className="day-list"></div>`
- Inside that div, list out all the days residing in src/reddays.js by using the RedDay component
- Make sure to filter out and show only the red days between the two selected dates startDate and endDate.


# Finish
This will not be part of a hand-in so if you want you can delete your npm package and your fork of this repo if you want.

:camel::camel::camel::camel::camel::camel::camel: Good job!!! :camel::camel::camel::camel::camel::camel::camel:



# npm-exercise
# npm-exercise
