import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, remCounter } from "../../store/modules/counter/actions";
import "./styles.css";

const ButtonCounter = () => {
  const dispatch = useDispatch();

  const cont = useSelector((state) => state.counter);

  const handleAddCounter = () => {
    dispatch(addCounter(cont));
  };
  const handleRemCounter = () => {
    dispatch(remCounter(cont));
  };
  return (
    <>
      <div className="container">
        <div className="divBtn">
          <button className="divBtn_rem" onClick={handleRemCounter}>
            -
          </button>
          <button className="divBtn_add" onClick={handleAddCounter}>
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default ButtonCounter;
