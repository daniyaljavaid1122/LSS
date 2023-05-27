import React, { useState } from "react";

const DonateBlood = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    blood: "",
    date: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone, address, blood, date, message } = userData;

    if (name && email && phone && address && blood && date) {
      try {
        const res = await fetch(
          "https://bloodoner-1-default-rtdb.firebaseio.com/BloodDonationRequest.json",
          {
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
              date,
              message,
            }),
          }
        );
        if (res.ok) {
          setUserData({
            name: "",
            email: "",
            phone: "",
            address: "",
            blood: "",
            date: "",
            message: "",
          });
          alert("Data Stored");
        } else {
          throw new Error("Something went wrong. Please try again later.");
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <div className="main-div">
        <h2>DONATE BLOOD!</h2>
        <p>
          {" "}
          Bloodoner’s prime objective is to fulfill the basic requirements of
          blood for its patients through comprehensive voluntary blood donation
          drive. Blood donation is one of the most significant contribution that
          a person can make towards the society. It is estimated that, Pakistan
          requires around 8,000+ units of blood every day, while the transfusion
          needs outstrip the current availability of blood. According to a
          report approximately 100,000 patients are suffering from Thalassemia
          in Pakistan and every year 5,000 babies are born with this deadly
          disease. These patients need regular blood transfusion and iron
          chelation. Those with a severe form of thalassemia require blood
          transfusions as often as every two weeks, the blood supply is of
          special importance to the thalassemia community.
        </p>
        <p>
          {" "}
          Bloodoner is the pioneer of the voluntary blood transfusion service
          and has been tackling the issues related to blood transfusion services
          at a fairly large scale. Besides the continuous need of financial
          support from kind hearted persons & organizations, Sundas Foundation
          desperately require the sustainable supplies of the healthy blood for
          its suffering from different blood disorders. Donating blood is one of
          the easiest ways to help save lives. In fact, each pint of blood
          donated can save up to three lives! All you have to do is make an
          appointment. In case you are interested to donate blood, please
          contact us on 03306178305 or via submitting the blood assessment form.
        </p>
      </div>

      {/* form section */}
      <form method="POST">
        <div className="donation-heading ">
          <h2>BLOOD DONATION FORM</h2>
        </div>
        <div className="donation-form">
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
            <select
              name="blood"
              value={userData.blood}
              onChange={postUserData}
              autoComplete="off"
              required
            >
              {/* <option value="">Select a blood group</option> */}
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <label>Date Of Birth</label>
            <input
              type="date"
              name="date"
              placeholder="date"
              value={userData.date}
              onChange={postUserData}
              autoComplete="off"
              required
            />

            <label>Message</label>
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={userData.message}
              onChange={postUserData}
            />
            <button type="submit" onClick={submitData}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default DonateBlood;
