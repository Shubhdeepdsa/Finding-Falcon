Certainly! Here's a detailed README for your project that explains each component, its functions, and how the project works:

# Falcon Finder App

Falcon Finder is a web application that helps you find the elusive Falcon in outer space by selecting planets and vehicles. This project demonstrates the usage of React for building a user interface and making API requests to find the Falcon.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
  - [FalconMenu](#falconmenu)
  - [PlanetSelection](#planetselection)
  - [VehicleSelection](#vehicleselection)
  - [SearchButton](#searchbutton)
- [API](#api)
  - [getPlanetData](#getplanetdata)
  - [getVehicleData](#getvehicledata)
  - [getTokenData](#gettokendata)
- [Utility Functions](#utility-functions)
  - [calculateTimeTaken](#calculatetimetaken)
- [How It Works](#how-it-works)

## Getting Started

To run the Falcon Finder App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/falcon-finder.git`
2. Navigate to the project directory: `cd falcon-finder`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000` to access the app.

## Project Structure

```
src/
  ├── Components/
  │   ├── FalconMenu.js
  │   ├── PlanetSelection.js
  │   ├── VehicleSelection.js
  │   ├── SearchButton.js
  │   ├── SucessFailPage.js
  │   ├── SucessFailPage.css
  ├── api/
  │   ├── index.js
  ├── calculations.js
  ├── App.css
  ├── App.js
  ├── index.js
  └── ...
```

## Components

### FalconMenu

The main component responsible for rendering the Falcon Finder menu. It manages the state of selected planets, vehicles, time taken, and interacts with the API to search for the Falcon.

- `useState` variables:
  - `planetData`: Holds the list of available planets.
  - `vehicleData`: Holds the list of available vehicles.
  - `token`: Holds the authentication token for API requests.
  - `selectedPairs`: Holds the selected planet-vehicle pairs.
  - `timeTaken`: Holds the time taken for each selected pair.

- `useEffect`:
  - Fetches planet, vehicle, and token data on component mount.

- `handlePlanetChange`:
  - Updates selected planet and calculates time taken.

- `handleVehicleChange`:
  - Updates selected vehicle and calculates time taken.

- `handleSearch`:
  - Sends API request to find the Falcon with selected data.

### PlanetSelection

A component that renders a planet selection dropdown for a specific index.

- `props`:
  - `index`: Index of the dropdown.
  - `planetData`: List of available planets.
  - `selectedPairs`: Selected planet-vehicle pairs.
  - `handlePlanetChange`: Function to handle planet selection.

### VehicleSelection

A component that renders a vehicle selection dropdown for a specific index.

- `props`:
  - `index`: Index of the dropdown.
  - `planetData`: List of available planets.
  - `vehicleData`: List of available vehicles.
  - `selectedPairs`: Selected planet-vehicle pairs.
  - `handleVehicleChange`: Function to handle vehicle selection.

### SearchButton

A component that renders the search button and displays the total time taken.

- `props`:
  - `handleSearch`: Function to handle search button click.
  - `timeTaken`: List of time taken for each selected pair.

## API

### getPlanetData

Function to fetch the list of available planets from the API.

### getVehicleData

Function to fetch the list of available vehicles from the API.

### getTokenData

Function to fetch the authentication token from the API.

## Utility Functions

### calculateTimeTaken

Function to calculate the time taken for a selected planet-vehicle pair.

## How It Works

1. When the app loads, `FalconMenu` component fetches the list of available planets, vehicles, and authentication token using the API functions in the `api` folder.

2. Users can select a planet for each dropdown in the `FalconMenu`, which triggers the `handlePlanetChange` function. This function updates the selected planet, calculates the time taken for the pair, and enables the corresponding vehicle dropdown.

3. Users can then select a vehicle for each enabled dropdown, triggering the `handleVehicleChange` function. This function updates the selected vehicle and recalculates the time taken for the pair.

4. Once the user has selected planets and vehicles for all dropdowns, they can click the "Search" button. This triggers the `handleSearch` function, which sends an API request to find the Falcon with the selected data.

5. The API returns a result indicating success or failure, and the app displays the corresponding `SucessPage` or `FailPage` from the `SucessFailPage` component.

6. The user is informed whether they successfully found the Falcon or not, along with additional information about the mission.

Feel free to explore the codebase to understand more about the functionality and customization options.
