const API_KEY = process.env.REACT_APP_API_KEY;

export const getParkingLots = location => {
  const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&categories=parking`;
  return fetch(`${encodeURI(endpoint)}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "appliation/json",
    },
  })
    .then(res => res.json())
    .then(res => res.businesses);
};
