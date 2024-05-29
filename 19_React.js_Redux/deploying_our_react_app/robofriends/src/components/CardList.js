import React from "react";
import Card from './Card';

// const CardList = (props) => {
const CardList = ({ robots }) => {
  // const { robots } = props;
  // const cardsArray = robots.map((user, i) => {
    // return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
    /* BONUS:
    "key" prop should have something that doesn't change.
    For example, the index (or i in our case) could change if array items get moved.
    So a better "key" in this case would be something unique like "id". */
    // return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
    /* return (
      <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
      />
    );
  }); */

  // Error Boundaries – React
  /* if (true) {
    throw new Error('NOOOOOOO!');
  } */

  return (
    <div>
      {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
      {/* {cardsArray} */}
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email} 
            />
          );
        })
      }
    </div>
  );
};

export default CardList;