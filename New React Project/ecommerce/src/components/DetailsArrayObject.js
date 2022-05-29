import React, { useState } from "react";

const DetailsArrayObject = () => {
  const [details, setDetails] = useState({
    contributions: {
      nameValuePairs: [
        {
          name: "Test",
          value: "1",
        },
        {
          name: "Test2",
          value: "12",
        },
      ],
    },
  });

  console.log(details);

  return <div>DetailsArrayObject</div>;
};

export default DetailsArrayObject;
