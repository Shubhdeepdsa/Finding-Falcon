
# Finding the Falcon

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Components](#components)
   - [App Component](#app-component)
   - [FalconMenu Component](#falconmenu-component)
   - [PlanetSelector Component](#planetselector-component)
   - [VehicleSelector Component](#vehicleselector-component)
   - [SearchButton Component](#searchbutton-component)
   - [SuccessPage Component](#successpage-component)
   - [FailPage Component](#failpage-component)
4. [API Endpoints](#api-endpoints)
5. [Functionality Overview](#functionality-overview)
6. [Deployment](#deployment)

---

## 1. Introduction <a name="introduction"></a>

This documentation provides a detailed overview of the "Finding the Falcon" project, a web application built using React. The project simulates the search for the fictional Falcon on different planets using various vehicles.

## 2. Project Overview <a name="project-overview"></a>

The project consists of several components, each responsible for a specific part of the application. Here's a high-level overview of the key components and their functionality:

## 3. Components <a name="components"></a>

### App Component <a name="app-component"></a>

**Functionality**:
- Manages the main application state.
- Fetches data from external APIs.
- Determines which page to display based on the search result.

#### Functions within the App Component:

- `fetchPlanetData`: Fetches planet data from the API and updates the `planetData` state.
- `fetchVehicleData`: Fetches vehicle data from the API and updates the `vehicleData` state.
- `fetchTokenData`: Fetches a token from the API for authentication and updates the `token` state.
- `handleDisplayPage`: Determines which page to display based on the search result.
- `renderPage`: Renders the appropriate component based on the `displayPage` state.

### FalconMenu Component <a name="falconmenu-component"></a>

**Functionality**:
- Displays a menu where users can select planets and vehicles.
- Handles planet and vehicle selection.
- Sends a search request to find the Falcon.

#### Functions within the FalconMenu Component:

- `handlePlanetChange`: Handles planet selection and updates the selected planet in the `selectedPairs` state.
- `handleVehicleChange`: Handles vehicle selection and updates the selected vehicle in the `selectedPairs` state.
- `handleSearch`: Handles the search form submission and sends a search request to find the Falcon.
- `calculateTimeTaken`: Calculates the time taken for a selected pair of planet and vehicle.

### PlanetSelector Component <a name="planetselector-component"></a>

**Functionality**:
- Provides a dropdown list for selecting a planet.
- Filters available planets based on vehicle range.
- Updates the selected planet in the FalconMenu.

### VehicleSelector Component <a name="vehicleselector-component"></a>

**Functionality**:
- Provides a dropdown list for selecting a vehicle.
- Filters available vehicles based on planet distance.
- Updates the selected vehicle in the FalconMenu.

### SearchButton Component <a name="searchbutton-component"></a>

**Functionality**:
- Displays a "Search" button.
- Calculates and displays the total time required for the search.
- Submits the search request to find the Falcon.

### SuccessPage Component <a name="successpage-component"></a>

**Functionality**:
- Displays a success message when the Falcon is found.
- Shows the planet where the Falcon was found.

### FailPage Component <a name="failpage-component"></a>

**Functionality**:
- Displays a failure message when the Falcon is not found.
- Encourages the user to try again with different strategies.

## 4. API Endpoints <a name="api-endpoints"></a>

- **Planet API**: Fetches data about available planets.
- **Vehicle API**: Fetches data about available vehicles.
- **Token API**: Fetches a token for authentication.

## 5. Functionality Overview <a name="functionality-overview"></a>

The project begins with the App component fetching planet and vehicle data and obtaining a token for authentication. Users interact with the FalconMenu component to select planets and vehicles, calculate search times, and submit search requests. The result is then used to determine whether the Falcon was found or not, leading to the display of either the SuccessPage or FailPage component.

## 6. Deployment <a name="deployment"></a>

The application can be deployed to various hosting platforms. Ensure that you configure environment variables for sensitive data such as API keys and secrets when deploying to production.
