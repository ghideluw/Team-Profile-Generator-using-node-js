# Team-Profile-Generator-using-node-js

## Description
The aim of this project was to create an Employee Team Profile using a command line application implementing node.js to generate an html page to display the team profile. When given the team members (ie. Manager, Engineer and/or Intern) prompt of questions is provided using inquirer to input the name, id, email and role of the team member. If the team member is a manager, the office number is prompted for input. If the team member is an engineer, their github profile is prompted for input. Lastly, if the team member is an intern, the school they attend is prompted for input. Given a software team dynamic, the team profile is generated with all the members profile cards displayed. Test Driven Development was utilised to test the cohesiveness of the code using Jest. In order to see if the classes and constructors were accessing and storing the coreect values, the tests were implemented. The focus of this project was to gather and apply knowledge of Object Oriented Programming , running tests to see if the logic of the code is indeed running correctly while applying the node.js interface to generate a UI output for storing and displaying employee information

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

This application required the inquirer 8.2.5 and Jest 24.9.0 dependencies for generating and testing data. to instal user must input "npm install inquirer Jest" in the 
terminal.
npm 
## Usage

In order to run the tests on the onset run "npm run test" in the terminal. A total of 4 tests should return with a pass.
In order to start the application in the command line run "node index.js" a series of prompt questions requiring input will display in the terminal. Once all team members are input with their corresponding info, the list selection of team is complete should be selected to exit the prompt and generate an index.html output for displaying the data.

##screenshot 
(dist\Screenshot (3).png)
   


## License
MIT License

Copyright (c) [2022] [Luwam Ghide]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
