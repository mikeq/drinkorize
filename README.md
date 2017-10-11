# Drinkorize
## Getting Started
_requirements_
- Node
- Yarn or NPM

This application was bootstrapped with the [Create React App](https://github.com/facebookincubator/create-react-app) cli 

### Install dependencies
cd into the folder where you have placed the code
```
C:\Users\mike\projects\drinkorize (master)
λ yarn
```

or

```
C:\Users\mike\projects\drinkorize (master)
λ npm install
```

### Running app in development mode on local machine
```
C:\Users\mike\projects\drinkorize (master)
λ yarn start
...
Compiled successfully!

You can now view drinkorize in the browser.

  Local:            http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

### Running the app in production mode on local machine
```
C:\Users\mike\projects\drinkorize (master)
λ yarn serve
...
   ┌───────────────────────────────────────────────┐
   │                                               │
   │   Serving!                                    │
   │                                               │
   │   - Local:            http://localhost:5000   │
   │                                               │
   │   Copied local address to clipboard!          │
   │                                               │
   └───────────────────────────────────────────────┘
```

### Building the app for deployment to production
```
C:\Users\mike\projects\drinkorize (master)
λ yarn build
...
yarn run v1.1.0
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  148.28 KB  build\static\js\main.4e09c4df.js
  635 B      build\static\css\main.f657af4d.css

The project was built assuming it is hosted at the server root.
To override this, specify the homepage in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Done in 19.07s.
```
Copy the contents of the `build/` folder to your webserver root