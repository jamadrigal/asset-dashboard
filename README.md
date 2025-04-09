# Frontend Setup and Running Instructions

## Setting Up the Project
Follow these steps to get the project running:
--before running frontend make sure the Apollo server is running--

### Prerequisites:
Node.js ((https://nodejs.org/en/download))
npm or yarn (https://classic.yarnpkg.com/lang/en/docs/install)

### Steps
1. Clone the repository:
`git clone https://github.com/jamadrigal/asset-dashboard.git`
`cd asset-dashboard`

2. Install dependencies:
`npm install`
    or
`yarn install`

3. Start the development server:
 `npm start`
    or
 `yarn start`

Runs the app in the development mode.
This will launch the application in your default browser, typically at http://localhost:3000

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Design Decisions
Component-based Architecture
The project is built using React, a component-based UI library, for maintainability and scalability.

Components are designed to be reusable and isolated, upholding to the Single Responsibility Principle.

State Management
The app uses React's useState and useEffect hooks, as well as Apollo useQuery for state management and side effects. 

Styling
Tailwind CSS is used for utility-first CSS styling, allowing for fast and flexible design without writing custom CSS.

GraphQL Integration
Apollo Client is integrated for handling GraphQL queries and mutations efficiently. Apollo client is organized in separate folder to split the client call and queries. 



## Trade-offs & Limitations
Due to time constraints, several decisions were made that impact the app's scalability and functionality:

1. Minimal Error Handling:
Error handling for GraphQL requests is limited. This should be expanded to handle network failures, server errors, and display appropriate messages to users. I added a simple error loading data but want to add more error handling when different forms of data is sent back from the backend.

2. Limited Styling:
The app uses basic styling with Tailwind CSS to ensure it looks clean. However, I would have wanted to spend more time on the responsiveness on different devices and screen sizes. I would also had made the modal not super responsive with the size when clicking on the different tabs. 

3. Feature Prioritization:
Focus was placed on getting the core features (displaying assets, interacting with GraphQL API) up and running. I would have wanted to create a better overview, holding and detail tab features that I did not prioritized in the initial version but could be added later. 

4. No Backend Integration:
The project assumes that the GraphQL API is already set up and functioning. There is no backend setup included in this repository, meaning the app will need a running GraphQL server or mock data for testing.





