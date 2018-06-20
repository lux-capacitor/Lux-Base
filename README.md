# Lux-Base (Node-React Flavored!)


```
       ___           ___          _____          ___                    ___           ___           ___           ___                 
      /__/\         /  /\        /  /::\        /  /\                  /  /\         /  /\         /  /\         /  /\          ___   
      \  \:\       /  /::\      /  /:/\:\      /  /:/_                /  /::\       /  /:/_       /  /::\       /  /:/         /  /\  
       \  \:\     /  /:/\:\    /  /:/  \:\    /  /:/ /\              /  /:/\:\     /  /:/ /\     /  /:/\:\     /  /:/         /  /:/  
   _____\__\:\   /  /:/  \:\  /__/:/ \__\:|  /  /:/ /:/_            /  /:/~/:/    /  /:/ /:/_   /  /:/~/::\   /  /:/  ___    /  /:/   
  /__/::::::::\ /__/:/ \__\:\ \  \:\ /  /:/ /__/:/ /:/ /\   ___    /__/:/ /:/___ /__/:/ /:/ /\ /__/:/ /:/\:\ /__/:/  /  /\  /  /::\   
  \  \:\~~~~~\/ \  \:\ /  /:/  \  \:\  /:/  \  \:\/:/ /:/  /__/\   \  \:\/:::::/ \  \:\/:/ /:/ \  \:\/:/__\/ \  \:\ /  /:/ /__/:/\:\  
   \  \:\        \  \:\  /:/    \  \:\/:/    \  \::/ /:/   \__\/    \  \::/~~~~   \  \::/ /:/   \  \::/       \  \:\  /:/  \__\/  \:\ 
    \  \:\        \  \:\/:/      \  \::/      \  \:\/:/              \  \:\        \  \:\/:/     \  \:\        \  \:\/:/        \  \:\
     \  \:\        \  \::/        \__\/        \  \::/                \  \:\        \  \::/       \  \:\        \  \::/          \__\/
      \__\/         \__\/                       \__\/                  \__\/         \__\/         \__\/         \__\/                
```

A boilerplate for quickly spinning up and crafting Node APIs + React / Redux Apps without all the setup headaches.


# What's Inside?
```
 - Node.js
 - Express
 - React (v16.3 - Embrace New lifecycle methods!)
 - Redux
 - React-Router (v4)
 - Webpack
 - Mocha
 - Babel
 - Fetch
```


# Where Does This Live?

Clone the boilerplate locally first...

```
git clone git@github.com:lux-capacitor/lux-base.git
```



# How Do I Turn This On?

For the initial setup, you'll want Node.js installed globally on your machine, then you'll simply need to run an 'npm install' once and you should be good to go. Check out the package.json file for more info on what 'npm run start' is actually doing behind the scenes.

### Initial Setup: 
```
*** Don't have Node?  https://nodejs.org/en/download ***

npm i        (shorthand for 'npm install' )
```

### Start Application / Server:
```
npm run start
```



# My Local Is Drunk - HELP!

More than likely, if you are having trouble getting the server up and running, you are missing a dependency on your local system. Below are various links that might be of use. 

#### Common Setup Issues:
 - npm: command not found - ["Install Node!"](https://nodejs.org/en/download/)
 - ["Windows Needs an Update"](https://www.apple.com/macbook-pro) :p



# File Structure:

The file structure is pretty straight-forward and can be easily modified to suit your usage as need be - its all just imports anyway, so feel free to hack away at it!  
Below is a tree map of the tool's structure.

```
CLIENT-SIDE : Architecture

index.html ( Head tags, metadata, and app root-react div live here )
   |
   |-- app
        |-- AppWrapper.jsx  ( MIDDLEWARE WRAPPER : React-Router + Redux Store wrapping on Core )
        |-- App.jsx         ( CORE APP : First parent component )
        |
        |
        |-- /components        ( React Components, organize into sub-folders by parent )
        |        |-- example  ( React-components for 'exampleApp' )
        |
        |
        |-- /css
        |     |------ app.scss   ( SCSS Manifest File )
        |     |------ base       ( SCSS Reset, Vars, and Core styles )
        |     |------ Components ( SCSS for each component )
        |
        |
        |-- /fonts ( FONTS : Webpack handles copy into /dist )
        |
        |
        |-- /img   ( IMAGE : All image assets live here )
        |
        |
        |-- /redux 
               |-- actions    ( ACTIONS : Defines functions that interact w/ reducer and import into components )
               |-- constants  ( CONSTANTS : Split file for declaring all action 'Types' )
               |-- reducers   ( REDUCERS : Handles state changes in redux store and ingestion of actions )
               |-- store      ( STORE : Contains single 'configureStore' file, bundles reducers and adds middleware )




SERVER-SIDE : Architecture

server
   |
   |-- server.js  ( ROOT : webpack setup + configure controller routing - split as it grows! )
   |
   |
   |-- /controllers ( CONTROLLERS : API route definitions, break into folders by route )
   |-- /methods     ( METHODS : get-methods.js, post-methods.js, etc for actual calls / usage in controllers)
   |-- /helpers     ( HELPERS : shared, reusable methods + expressServer wrapper ) 
```


### Naming Conventions:
Basically, simple components will want to start with a lowercase letter, full-on react components will start as Capital letter to emphasize distinction aside from '.js vs .jsx'
```
Example #1 : App.jsx
  - React Component with State
  - Starts with Capital Letter
  - .JSX


Example #2 : footerPanel.js
  - Reusable, simple component with minimal data ingestion and no local state
  - Lowercase first letter, camel case name
  - .js
```


# Documentation:
* [Node.js](https://nodejs.org/en)
* [Express](https://www.npmjs.com/package/readline-sync)
* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [react.js](https://reactjs.org)
* [redux.js](https://redux.js.org)
* [react-router](https://github.com/ReactTraining/react-router)

