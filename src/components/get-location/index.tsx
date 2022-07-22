import React, { useEffect, useState } from "react";

const API_KEY = "0a3b458dba5c7807c022b803f8a82a49";

const GetLocation = () => {

  const [lat, setLat] = useState<null | number>(null);
  const [lng, setLng] = useState<null | number>(null);
  const [status, setStatus] = useState<null|string>(null);
  const [location, setLocation] = useState<null | string>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser!");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, error => {
        setStatus(error.message);
      })
    }
  }

  useEffect(() => {
    if (!lat || !lng) return;
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${ lat }&lon=${ lng }&limit=${ 3 }&appid=${ API_KEY }`)
      .then(response => response.json())
      .then(data => {
        setStatus(null);
        setLocation(data[0].name);
      });
  }, [lat, lng]);

  useEffect(() => {
    if (!location) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ API_KEY }`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }, [location, lat, lng]);

  return (
    <>
      <button onClick={getLocation}>Get location</button>
      { status && <p>{ status }</p> }
      { location && <p>{ location }</p> }
    </>
  )
}

export default GetLocation;