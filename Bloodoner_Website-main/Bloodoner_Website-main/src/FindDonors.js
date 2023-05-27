import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "./Firebase";

const FindDonors = () => {
  const [donors, setDonors] = useState([]);

  const Card = ({ item }) => {
    console.log(item);
    return (
      <div className="donor-data">
        <p>Name</p> {item?.name}
        <p>Number</p> {item?.phone} <p>Location</p> {item?.address} <p>Blood Group</p> {item?.blood}
      </div>
    );
  };

  useEffect(() => {
    const starCountRef = ref(database, "BloodDonationRequest");
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();
      data = Object.keys(data).map((key) => data[key]);

      setDonors(data);
    });
  }, []);

  return (
    <div>
      <div className="FindDonors-heading">
        <h2> Donor Request</h2>
      </div>

      <div>
        {donors.map((donor) => (
          <Card item={donor} />
        ))}
      </div>
    </div>
  );
};

export default FindDonors;
