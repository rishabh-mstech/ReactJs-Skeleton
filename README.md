# React Skeleton

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This is a boiler plate project ready structure with scalability. The main idea behind this development is to shipped the basic project ready structure with scalability following popular standard. The skeleton comes with redux ready structure following the standard typescripts and tslint rules. The skeleton strongly used the typescript as per the industry standard as well as it also comes with the `unit testing` module using `jest` & `enzyme`.

##### **Note: This is an open source and can be customised as per requirement**

## Setup Instruction
  For setting up this boiler plate react structure, all you have to do is copy the `react-skeleton` folder to your project root location and re-name the folder to your desired project name. `cd` into the folder, open the `package.json` file and rename the `"name"` parameter's value to the project name you have given to folder. After saving the `package.json` file run `yarn setup` and all the necessary `packages` will get installed and the project will start in your `localhost`.

## Folder Structure

  ### Please the example folder for your references on the folder structure.

  - **\<Project Name>\/**
    - **Public/**
      - assets/
      - index.html
      - manifest.json
    - **src/**
      - common/
        - This folder contains all the common methods and utility classes like `constant`, `interfaces` & etc.
      - components/
        -  This folder contains all the common components used by all or some container components. See example folder for your reference
      - pages/
        - Pages or containers are the main components or modules of the project like `Login`, `Home`, `Registration` and etc.
      - routes/
        - This folder exports the `<Routes />` component of the entire react app.
      - store/
        - This folder exports the `combine Reducers` and `App Store`.
      - index.tsx ...
    - **example/**
      - This folder contains a basic example to show case the usage and structure
    - package.json

##### **Note:** Every folder has one testing folder called `__tests__` which contains the unit testing file and be tested using `yarn test` from the console. Please check the example folder for further reference.

## Pre-defined `yarn` libraries
- **Dependencies**
  - `react-router-dom`
  - `redux`
  - `react-redux`
  - `axios`
  - `lodash`
  - `moment`
  - `redux-thunk`
  - `typescripts`
  - `@types/jest`
  - `@types/node`
  - `@types/react`
  - `@types/react-dom`
  - `react`
  - `react-dom`
  - `react-scripts`
  - `jest`

- **Dev Dependencies**
  - `@types/axios`
  - `@types/enzyme`
  - `@types/enzyme-adapter-react-16`
  - `@types/enzyme-to-json`
  - `@types/lodash`
  - `@types/moment`
  - `@types/moxios`
  - `@types/react-redux`
  - `@types/react-router-dom`
  - `@types/redux`
  - `@types/redux-thunk`
  - `enzyme`
  - `enzyme-adapter-react-16`
  - `enzyme-to-json`
  - `moxios`
  - `tslint`
  - `tslint-config-prettier`
  - `tslint-config-standard`
  - `tslint-react`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn setup`

  This command is used to setting-up the initial project. Running this command will install all the defined packages in the `package.json` file and also `run` the project in your localhost.

### `yarn example`

Using this command will run the example environment for understanding the coding structure and folder creation standards. This script / command will install the example environment with simple login and listing using redux flow covering vital area's of development using redux store with react. It also gives ample idea about the folder structure which is a mix of `Duck` and `Modular` folder standards.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Coverage
- [x] Unit Testing
- [x] Type Scripting
- [x] Modular Structure
- [x] Redux Flow
- [x] TS Lint
- [x] React JS
