import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, remCounter } from "../../store/modules/counter/actions";
import "./styles.css";

const ButtonCounter = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const handleAddCounter = () => {
    setCounter(counter + 1);
    dispatch(addCounter(counter));
  };
  const handleRemCounter = () => {
    setCounter(counter - 1);
    dispatch(addCounter(counter));
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
