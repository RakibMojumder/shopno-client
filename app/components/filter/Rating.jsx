import React from "react";

const Rating = (value) => {
  return <div>{[...Array(value)].map(_, index)}</div>;
};

export default Rating;
