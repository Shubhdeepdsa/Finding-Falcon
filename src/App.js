import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
function App() {
  const [token, setToken] = useState("");
  const [planetData, setPlanetData] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);
  const tokenUrl = "https://findfalcone.geektrust.com/token";
  const planetUrl = "https://findfalcone.geektrust.com/planets";
  const vehicleUrl = "https://findfalcone.geektrust.com/vehicles";
  const getTokenApi = async () => {
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

  const getPlanetApi = async () => {
    try {
      const response = await fetch(planetUrl);
      const data = await response.json();
      setPlanetData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getVehicleApi = async () => {
    try {
      const response = await fetch(vehicleUrl);
      const data = await response.json();
      setVehicleData([...data]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getTokenApi();
    getPlanetApi();
    getVehicleApi();
  }, []);

  return (
      <div className="App">
        {planetData.length != 0 ? (
          <LandingPage
            planetData={planetData}
            setPlanetData={setPlanetData}
            vehicleData={vehicleData}
            setVehicleData={setVehicleData}
          />
        ) : (
          ""
        )}
      </div>
  );
}

export default App;
