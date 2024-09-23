# BBC
Submission of technical test
Media API Testing

This project is designed to automate testing of the MediaAPI using Jest, jest-cucumber, and Gherkin syntax for behavior-driven development (BDD). The tests validate various aspects of the MediaAPI, including structure, data integrity, and specific field values.
Pre-requistes:
Node.js
npm
Jest (added as dev dependency)
jest-cucumber (added as dev dependency)

The project includes:
1. Feature files and step definitions thereof
2. jest.config.js - Configuration for Jest to work with jest-cucumber
3. babel.config.js - Configuration for Jest to work with newer verions of javascript
4. commonSteps.js - File that contains all the common steps

Runner: Separate runner is not required, can be run using npm test command. Update the package.json 'scripts' bloack with jest.


Two manual test cases files - in traditional and BDD formats added
