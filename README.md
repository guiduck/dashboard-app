# dashboard-app

### Overview

  This is a simple dashboard layout that consumes an API made using NextJS, Typescript, eslint, prettier, Chakra-ui and Axios. The app asks for an username(you can login using "admin" as both username and password) to authenticate then you have access to the dashboard page as long as the simulated token is saved in your cookies; the messages can be selected and archieved, other buttons have no functionallity. If the user is not authenticated it redirects to the login page or you can logout by clicking in the user avatar at the sidebar component.

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Presentation
### Screenshots

![loginDark](https://github.com/guiduck/dashboard-app/blob/main/public/images/loginDark.jpeg)
![loginLight](https://github.com/guiduck/dashboard-app/blob/main/public/images/loginLight.jpeg)
![dashboardDark](https://github.com/guiduck/dashboard-app/blob/main/public/images/dashboardDark.jpeg)
![dashboardLight](https://github.com/guiduck/dashboard-app/blob/main/public/images/dashboardLight.jpeg)

* Archieve: 

![archieve](https://github.com/guiduck/dashboard-app/blob/main/public/images/archieveGif.gif)
* Resize:

![resize](https://github.com/guiduck/dashboard-app/blob/main/public/images/resizeGif.gif)
* Resize:

![theme](https://github.com/guiduck/dashboard-app/blob/main/public/images/themeGif.gif)

## Tech Stack
### Devlopment
* UI: [React](https://reactjs.org/)
* State Control: [Context](https://pt-br.reactjs.org/docs/context.html) for global state e [React Hooks](https://reactjs.org/docs/hooks-intro.html) for local state
* Styling: [Chakra-ui](https://chakra-ui.com) 
* HTTP Client: [Axios](https://github.com/axios/axios)
* Form Control: [React-hook-form](https://react-hook-form.com)
* Icons: [Chakra-ui](https://chakra-ui.com/docs/media-and-icons/icon)

### API
* [WiiD](http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus)

### Linter
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://github.com/eslint/eslint)

## Usage
### Comands

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn dev
```

#Development mode

```sh
# run the app in development mode
yarn dev
# next dev starts the application in development mode with hot-code reloading, error reporting, and more.
```
#Production mode

```sh
# When building the Next.js app for production, you'll want to use next build:
next build
# next build creates an optimized production build of your application. The output displays information about each route.

Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

# Followed by either next start, when you want to start the production server:
next start
# next start starts the application in production mode. The application should be compiled with next build first.

# Or next export, when exporting the app as static HTML:
next export
# next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

# For more information refer to  docs.

For more information refer to * [Next.js CLI](https://nextjs.org/docs/api-reference/cli) docs.
```

## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch, used to get the token and messages in this project;
* `src/components` components isolated with its styling (if any);
* `src/context` the QuizContext used for global state control of the quiz related data;
* `src/Pages/` first level router components;

