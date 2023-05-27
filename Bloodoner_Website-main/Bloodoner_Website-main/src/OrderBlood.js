import React, { useState } from "react";

const OrderBlood = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    blood: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  // firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone, address, blood } = userData;

    if (name && email && phone && address && blood) {
      const res = await fetch("https://bloodoner-1-default-rtdb.firebaseio.com/Orders.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          blood,
        }),
      });
      if (res) {
        setUserData({
          name: "",
          email: "",
          phone: "",
          address: "",
          blood: "",
        });
        alert("Successfully Order");
      } else {
        alert("Fill the data");
      }
    } else {
      alert("Fill the data");
    }
  };

  return (
    <>
      <form method="POST">
        <div className="order-heading ">
          <h2>BLOOD Order</h2>
        </div>
        <div className="order-form">
          <div className="iner-box">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userData.name}
              onChange={postUserData}
              autoComplete="off"
              required
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email@example.com"
              value={userData.email}
              onChange={postUserData}
              autoComplete="off"
              required
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={postUserData}
              autoComplete="off"
              required
            />

            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={userData.address}
              onChange={postUserData}
              autoComplete="off"
              required
            />

            <label>Blood Group</label>
            <input
              type="text"
              name="blood"
              placeholder="A+"
              value={userData.blood}
              onChange={postUserData}
              autoComplete="off"
              required
            />

            <button type="submit" onClick={submitData}>
              Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderBlood;
