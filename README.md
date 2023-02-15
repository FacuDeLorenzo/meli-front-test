# Meli frontend test 

Monorepo created to resolve Mercado Libre's frontend test.

The API was built using Nest, which can use express and has typescript & jest built in.

The Front was built using a combination of Create-React-App for an out of the box running react app.
It uses [react-router](https://reactrouter.com/en/main) for simple and efficient routing.
I decided to use [Material-ui](https://mui.com/) which delivers out of the box elegant themable UI elements and allows for performant styled-components with emotion + inline dynamic styles with an attached prop (sx).

### `npm run dev:front-api`

Concurrently runs API & front proyects.
It requires [concurrently](https://www.npmjs.com/package/concurrently) to be installed globally.

```
npm i -g concurrently
```

### `npm run dev:front`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run dev:api`

Runs the API in the development mode on http://localhost:3001

### `npm run test:api`

Executes API tests.

### `npm run build:front`

Production-ready build