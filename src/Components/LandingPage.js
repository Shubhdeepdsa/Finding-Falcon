import React, { useEffect } from "react";
import "./LandingPage.css";
export default function LandingPage(props) {
  const { planetData, setPlanetData, vehicleData, setVehicleData } = props;
  useEffect(() => {}, []);
  return (
    <>
        <div className="radial"></div>
        <div className="heading"></div>
        <div className="queen-falcon"></div>
    </>
  );
}
