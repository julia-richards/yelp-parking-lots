import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import ParkingList from "./Components/ParkingList";
import { getParkingLots } from "./services";

function App() {
  const [location, setLocation] = useState("NYC");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getParkingLots(location)
      .then(data => setResults(data))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [location]);
  return (
    <>
      <h1>Find A Parking Lot</h1>
      <div>
        <Search />
      </div>
      <ParkingList results={results} isLoading={isLoading} />
    </>
  );
}

export default App;
