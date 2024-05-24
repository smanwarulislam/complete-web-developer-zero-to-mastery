import React from "react";

// const Card = (props) => {
const Card = ({ id, name, email }) => {
  // const { id, name, email } = props;
  return (
    // <h1>RoboFriends</h1>
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      {/* <img src="https://robohash.org/test?200x200" alt="robots" /> */}
      {/* <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" /> */}
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        {/* <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p> */}
        {/* <h2>props.name</h2>
        <p>props.email</p> */}
        {/* <h2>{props.name}</h2>
        <p>{props.email}</p> */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;