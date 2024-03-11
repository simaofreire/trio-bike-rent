# Bike Rental Boilerplate - ReactJS

![React Native](https://img.shields.io/badge/react-18.2.0-green?style=flat-square) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat-square)

This project was created for the Trio Challenge, where candidates must create a functional system to rent bikes.

## Stack used

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Material UI](https://mui.com/pt/material-ui/getting-started/overview/)

## How to run it

Install node modules:

```sh
yarn
```

Runs the app in the development mode.

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## How to run the unit tests

```sh
yarn test
```

Or use paths to run specific component/page test

```sh
yarn test <PATH_TO_COMPONENT>
```

## How to run the unit tests Cypress tests

```sh
yarn cypress open --config baseUrl=http://localhost:3000/
```

It launches the test runner in the interactive watch mode.

## Folder structure
- [cypress/](cypress/e2e/bikerent.cy.ts)
- [assets/](./src/assets)
  - [fonts/](./src/assets/fonts)
- [components/](./src/components)
  - [BikeCard/](./src/components/BikeCard)
  - [BikeImageList/](./src/components/BikeImageList)
  - [BikeImageSelector/](./src/components/BikeImageSelector)
  - [BikeList/](./src/components/BikeList)
  - [BikeSpecs/](./src/components/BikeSpecs)
  - [BikeType/](./src/components/BikeType)
  - [BookingAddressMap/](./src/components/BookingAddressMap)
  - [BookingConfirmation/](./src/components/BookingConfirmation)
  - [DatePicker/](./src/components/DatePicker)
  - [Header/](./src/components/Header)
- [mocks/](./src/mocks)
  - [Bike.ts](./src/mocks/Bike.ts)
- [models/](./src/models)
  - [Bike.ts](./src/models/Bike.ts)
- [pages/](./src/pages)
  - [BikeDetails/](./src/pages/BikeDetails)
  - [Home/](./src/pages/Home)
  - [Login/](./src/pages/Login)
- [routes/](./src/routes)
  - [app.routes/](./src/routes/app.routes.tsx)
  - [index/](./src/routes/index.tsx)
  - [paths/](./src/routes/paths.ts)
- [services/](./src/services)
  - [api/](./src/services/api.ts)
- [styles/](./src/styles)
  - [global.css/](./src/styles/global.css)
  - [theme/](./src/styles/theme.ts)
- [App.tsx](./src/App.tsx)

## Overview

### Desktop

https://jam.dev/c/74866ab0-e3e4-40e4-add3-69ca66df290a

### Mobile

https://jam.dev/c/a8b94bbc-0126-4de4-8dbf-1c4fbf06c504

## Test coverage (so far)

<img width="487" alt="Captura de Tela 2022-11-04 às 16 06 44" src="https://github.com/simaofreire/trio-bike-rent/assets/51380943/d544be89-9f79-4efd-bd51-9a28f7b7ecd8">
