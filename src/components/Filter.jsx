import React from "react";
import Button from "../subComponents/button";
function Filter(props) {
  // let a = buttonInfo.filter((buttonss) => buttonss.buttonTitle === "Message");
  // console.log(buttonInfo[0].buttonTitle);
  // let redCars = cars.filter((car) => car.color === "red");

  // console.log(props);
  return (
    <div className= "container__filter">
      <Button buttonName={props.buttonName} buttonIcon={props.buttonIcon} />
      <Button buttonName={props.applyTagIcon} buttonIcon={props.applyTagTitle} />
    </div>
  );
}

export default Filter;
