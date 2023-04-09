# expert-bus
Module 22 - Extra Credit
Module 22 Extra Credit Assignment
Due Monday by 11:59pm Points 100 Submitting a text entry box
State Challenge: Redux Store (Extra Credit)
In this module, you learned how to manage global state using React’s Context API. The Context API is quickly gaining traction as a worthy alternative or perhaps even successor to other libraries that manage global state in tandem with React, such as Flux or MobX. Nonetheless, the open-source JavaScript library Redux remains the industry standard for managing complex state in a large-scale React application, and it’s very likely that you’ll encounter it on the job.

Your challenge this week is to refactor the e-commerce platform from Activity 26Links to an external site. so that it uses ReduxLinks to an external site.. You won’t need to make sweeping changes to the code, but you will need to read through the Redux documentation on your own to find the information you need. We’ve provided some guidelines to point you in the right direction in the Getting Started section below.

ON THE JOB
Web developers are frequently asked to dive into a new technology in order to solve a problem. Their only roadmap is the tool’s documentation, and they must sift through it to find the information that matches the specific problem they’re trying to solve. As you get ready to enter your first development role, use this Challenge to practice a skill you’ll use many times over the course of your career.

End of text box.
Remember, this module's Challenge is extra credit. It is not required for submission, nor will it count towards one of the two assignments that you can skip. If you choose to submit this Challenge, you will receive extra credit points on your final grade. However, if you choose not to submit it, your final grade will not be affected in any way. This Challenge is an opportunity for you to further practice your skills and get feedback on it, with the added incentive of receiving extra credit for the work.

User Story
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
Acceptance Criteria
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
Mock-Up
This section reviews the web application's general appearance and functionality.

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

Animation showing a user registering on the Signup page and then navigating to the Products page, which displays images and description of products.

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

Animation showing the user selecting a category, choosing a product, viewing details about it on the product page, and adding it to and removing it from their shopping cart.

Finally, the user can checkout by going to their shopping cart, as shown in the following animation:

Animation showing the user checking out by going to their shopping cart.

Getting Started
To add Redux to your application, read through the Redux basic tutorialLinks to an external site. for instructions. Note that the docs will refer to additional packages that you'll need in order to complete this implementation.

IMPORTANT
Make sure you look through all of the documentation because there are newer methods that can make these tools much easier to implement. Keep in mind that React has gone through several iterations; as such, some React-and-Redux tutorials will assume you aren't using Hooks.

Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Retains all the functionality of the original application.

Application must be deployed to Heroku.

Deployment: 32%
Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository contains application code.

Application Quality: 15%
User experience is intuitive and easy to navigate.

User interface style is clean and polished.

Application resembles the mock-up functionality provided in the Challenge instructions.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README file with description, screenshot, and link to the deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.