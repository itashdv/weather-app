import React, { useState, useEffect } from "react";

import { useLocation } from "../../hooks/useLocation";

import { CurrentLocationWeather } from "./CurrentLocation";

const CurrentLocation = () => {
  const { getLocation, status, url } = useLocation();

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      { status && <p>{ status }</p> }
      { url && <CurrentLocationWeather url={ url } /> }
    </>
  )
};

export default CurrentLocation;