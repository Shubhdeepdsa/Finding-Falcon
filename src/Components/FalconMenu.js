import React, { useEffect, useState, useMemo } from "react";
import "./FalconMenu.css";

const FalconMenu = (props) => {
  // State for holding data
  const [planetData, setPlanetData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const [token, setToken] = useState("");
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [timeTaken, setTimeTaken] = useState([0, 0, 0, 0]);

  // Destructuring props
  const { setResult } = props;

  // API URLs
  const planetUrl = "https://findfalcone.geektrust.com/planets";
  const vehicleUrl = "https://findfalcone.geektrust.com/vehicles";
  const tokenUrl = "https://findfalcone.geektrust.com/token";
  const falconFindUrl = "https://findfalcone.geektrust.com/find";

  // Memoized data for optimization
  const memoizedPlanetData = useMemo(() => planetData, [planetData]);

  // Fetch planet data from the API
  const getPlanetData = async () => {
    try {
      const response = await fetch(planetUrl);
      const data = await response.json();
      setPlanetData([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch vehicle data from the API
  const getVehicleData = async () => {
    try {
      const response = await fetch(vehicleUrl);
      const data = await response.json();
      setVehicleData([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch token data from the API
  const getTokenData = async () => {
    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setToken(data.token);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle planet selection
  const handlePlanetChange = (index, value, event) => {
    event.preventDefault();
    setSelectedPairs((prevSelectedPairs) => {
      const updatedPairs = [...prevSelectedPairs];
      updatedPairs[index] = { planet: value, vehicle: "" };
      setTimeTaken((prevTimeTaken) => {
        const updatedTimeTaken = [...prevTimeTaken];
        updatedTimeTaken[index] = calculateTimeTaken(updatedPairs[index]);
        return updatedTimeTaken;
      });
      return updatedPairs;
    });
    const updatedPlanetData = planetData.map((planet) => {
      if (planet.name === value) {
        return { ...planet, selected: true };
      }
      return planet;
    });
    setPlanetData(updatedPlanetData);
  };

  // Handle vehicle selection
  const handleVehicleChange = (index, value) => {
    setSelectedPairs((prevSelectedPairs) => {
      const updatedPairs = [...prevSelectedPairs];
      updatedPairs[index] = { ...updatedPairs[index], vehicle: value };
      setTimeTaken((prevTimeTaken) => {
        const updatedTimeTaken = [...prevTimeTaken];
        updatedTimeTaken[index] = calculateTimeTaken(updatedPairs[index]);
        return updatedTimeTaken;
      });
      return updatedPairs;
    });
  };
  // Handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    const planetNames = selectedPairs.map((pair) => pair.planet);
    const vehicleNames = selectedPairs.map((pair) => pair.vehicle);
    const requestBody = {
      token: token,
      planet_names: planetNames,
      vehicle_names: vehicleNames,
    };

    try {
      const response = await fetch(falconFindUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResult([data]);
      } else {
        throw new Error("Error in request");
      }
    } catch (error) {
      console.error(error);
    }
  };
  // Calculate time taken for a pair of planet and vehicle
  const calculateTimeTaken = (pair) => {
    if (!pair || !pair.planet || !pair.vehicle) {
      return 0;
    }
    const selectedPlanets = planetData.find(
      (planet) => planet.name === pair.planet
    );
    const selectedVehicles = vehicleData.find(
      (vehicle) => vehicle.name === pair.vehicle
    );

    if (!selectedPlanets || !selectedVehicles) {
      return 0;
    }
    const timeTaken = selectedPlanets.distance / selectedVehicles.speed;
    return timeTaken;
  };

  // Fetch initial data on component mount
  useEffect(() => {
    getPlanetData();
    getVehicleData();
    getTokenData();
  }, []);

  return (
    <div className="full-menu">
      <div className="menu-wrapper">
        <div className="menu">
          <form onSubmit={handleSearch}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="form-row">
                <div className="form-column">
                  <label>
                    Select Planet {index + 1}:
                    <select
                      value={
                        selectedPairs[index] && selectedPairs[index].planet
                      }
                      onChange={(e) =>
                        handlePlanetChange(index, e.target.value, e)
                      }
                      required
                    >
                      <option value="">Select planet</option>
                      {planetData.map((planet) => (
                        <option key={planet.name} value={planet.name}>
                          {planet.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="form-column">
                  {selectedPairs[index]
                    ? selectedPairs[index].planet && (
                        <label>
                          Select Vehicle:
                          <select
                            value={
                              selectedPairs[index]
                                ? selectedPairs[index].vehicle
                                : ""
                            }
                            onChange={(e) =>
                              handleVehicleChange(index, e.target.value)
                            }
                            required
                            disabled={
                              selectedPairs[index]
                                ? selectedPairs[index].vehicle
                                : ""
                            }
                          >
                            <option value="">Select vehicle</option>
                            {vehicleData
                              .filter((vehicle) => {
                                const selectedPlanet = planetData.find(
                                  (planet) =>
                                    planet.name ===
                                    (selectedPairs[index] &&
                                      selectedPairs[index].planet)
                                );
                                return (
                                  vehicle.max_distance >=
                                  (selectedPlanet ? selectedPlanet.distance : 0)
                                );
                              })
                              .map((vehicle) => (
                                <option key={vehicle.name} value={vehicle.name}>
                                  {vehicle.name}
                                </option>
                              ))}
                          </select>
                        </label>
                      )
                    : null}
                </div>
              </div>
            ))}
            <div className="form-row">
              <div className="form-column">
                <button type="submit">Search</button>
              </div>
              <div className="form-column time">
                Total Time: {timeTaken.reduce((sum, time) => sum + time, 0)}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FalconMenu;
