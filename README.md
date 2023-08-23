# Innoloft Frontend Task

This application provides a dashboard for displaying and editing product information, along with a white-labeling feature.

## Tech Stack

1. `React.Js`
2. `Typescript`
3. `Redux toolkit`
4. `Tailwind CSS`
5. `React-hook-form`
6. `Eslint`
7. `Prettier`

## Requirement to run an application on local

1. Ensure that you have Node Package Manager (NPM) installed on your machine.
2. Create a `.env` file in the root directory of the application.
3. Copy the contents from the `.env.example` file and paste them into the `.env` file.
4. Assign the App ID to the `REACT_APP_APP_ID` environment variable in the `.env` file.

## Steps to start an application on local

1. Navigate to the root directory of the application.
2. Run `npm install`.
3. Run `npm start`. This will launch the application on a local server. You can access it by opening [http://localhost:3000/](http://localhost:3000/) in your browser.

## Features we added

1. Dashboard Page
2. Product View Page (All sections as specified in the requirements)
3. Product Edit Page (All sections as specified in the requirements)
4. White-labeling
5. API integration with redux toolkit and thunk
6. Responsive Design for Mobile and Laptop Screens

## Limitations

1. The application cannot display the mainColor from the configuration in the header, as the header uses this [logo](https://img.innoloft.com/logo.svg) which is not directly related to the main color. Therefore, we have only implemented showing and hiding the user info based on the `hasUserSection` value.
