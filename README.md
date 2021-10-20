# READMEGenerator

Application to generate README.md using Node.js
This repo contains two README files

-   README.md describes the project.
-   Generated Readme file , as per project requirments READMEGenerated.md

# Description

A command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

.gitignore is added with node_modules

The application will be invoked by using the following command:

```bash
node index.js
```

## Table Of Contents

-   [Description](#Description)

-   [User Story](##UserStory)

-   [Acceptance Criteria](##AcceptanceCriteria)

-   [Viedo Link](##VideoLink)

-   [Screen Shots](##Screenshots)

## UserStory

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## AcceptanceCriteria

-   GIVEN a command-line application that accepts user input
-   WHEN I am prompted for information about my application repository
-   THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
-   WHEN I enter my project title this is displayed as the title of the README
-   WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
-   WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
-   WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
-   WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
-   WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README

## VideoLink

https://watch.screencastify.com/v/cq9vcBzwbUUBsZ00QORb

## Screenshots

![Screenshot 2021-10-20 12 18 25](https://user-images.githubusercontent.com/86656634/138012080-b283daf3-f3f7-48a9-a888-1f1fa39cc605.png)

![Screenshot 2021-10-20 12 18 32](https://user-images.githubusercontent.com/86656634/138012085-8d126754-9b4f-4da6-92b7-795227521a52.png)
