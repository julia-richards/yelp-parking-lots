import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import ParkingList from "./Components/ParkingList";
import { getParkingLots } from "./services";
import useDebounce from "./hooks/useDebounce";
import AppStyles from "./Components/styles/App.module.css";

function App() {
  const [location, setLocation] = useState("NYC");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const debouncedLocation = useDebounce(location, 500);

  useEffect(() => {
    if (!debouncedLocation) {
      //skip fetch if search is blank
      return;
    }
    setError();
    setIsLoading(true);
    getParkingLots(debouncedLocation)
      .then(data => setResults(data))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [debouncedLocation]);
  return (
    <>
      <div className={AppStyles.MainDiv}>
        <h1 className={AppStyles.Title}>Find A Parking Lot</h1>
        <Search
          className={AppStyles.Search}
          location={location}
          setLocation={setLocation}
        />
        <div>
          {!!error && (
            <div>
              <h4>Oh no! An error occured.</h4>
              <p style={{ color: "red" }}>{error.message}</p>
            </div>
          )}
        </div>
      </div>
      <ParkingList results={results} isLoading={isLoading} />
    </>
  );
}

export default App;
