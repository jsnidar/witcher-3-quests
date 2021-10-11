# Witcher 3 Quests

## Description

The Witcher 3 Quests application is written in Javascript, React, HTML5, CSS3, Bootstrap and Styled Components. It displays information about characters in the Witcher 3: Wild Hunt video game. Data was originally fetched from the <a href="http://witcher3api.com/">Witcher 3 API</a>. The data was reformatted to and stored in the db.json file in this repo.

## Video Demonstration

Click on this <a href='https://watch.screencastify.com/v/O9szYIGD913lFtLUumPD'>link </a> to view a video demonstration of the application.

## Usage

### Initial Setup

To use the application you will need to:
<ol>
    <li>Open the terminal and navigate to the directory for this application.</li>
    <li>Run npm install in the terminal.</li>
    <li>Install json server by running npm i json-server in the terminal.</li>
    <li>Run json-server --watch db.json --port 3004 in the terminal. This will allow the application to access the data in the db.json file.</li>
    <li>In another tab in the terminal run npm start. This will open the application.</li>
</ol>

### View Information About a Quest

On the home page there is a list of all the quests in the game. You can view information about that quest by clicking on the title of the quest in the list, which will open the <a href='https://react-bootstrap.github.io/components/accordion/'>React JS Bootstrap accordian</a> element. 

### Favorite and Unfavorite a Quest

Users can favorite or unfavorite quests by clicking on the Add to Favorites/Unfavorite Quest button in the accordian body for each quest. Users can do this in the home page and in the favorites page.

### Search for Quests by Name

Users can search for quests by name by typing in the text area at the top of the home page. 

### View Favorited Quests

Users can view all favorited quests by clicking on Favorites in the Navbar at the top of the window. This will take them to a page with all of the favorited quests using <a href='https://reactrouter.com/web/guides/quick-start'>React Router</a>.

### Create a New Quest

Users can create a new quest by navigating to the Create New Quest. They click on Create New Quest in the Navbar, then they see a form with inputs that match the entries in the db.json file. When they complete the form and submit a new quest they are navigated back to the home page and the quest is POSTed to the db.json file. Users can then view the new quest. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
