import React from "react";
import parkingListStyles from "./styles/ParkingList.module.css";

const ParkingList = ({ results, isLoading }) => {
  if (!results.length && !isLoading) {
    return <p>No matching results</p>;
  }
  return (
    <>
      {results.map(result => {
        const score =
          (result.review_count * result.rating) / (result.review_count + 1);
        return (
          <li key={result.id} className={parkingListStyles.ParkingCard}>
            <img
              className={parkingListStyles.ParkingCard_image}
              src={result.image_url}
              alt={result.name}
            />
            <div>
              <h3>{result.name}</h3>
              <p>
                {result.location.address1} {result.location.address2}
                {result.location.city},{result.location.state}
              </p>
            </div>
            <ul>
              <li>Parking Lot Score: {score.toFixed(2)}</li>
              <li>Rating: {result.rating}</li>
              <li>Number of Reviews: {result.review_count}</li>
            </ul>
            <a href={result.url}>Yelp Page</a>
          </li>
        );
      })}
    </>
  );
};

export default ParkingList;
