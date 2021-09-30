import ButtonCounter from "../../components/ButtonCounter";
import { useSelector } from "react-redux";
const Contador = () => {
  const cont = useSelector((state) => state.counter);

  return (
    <div>
      <div>
        <h2>Contador Básico</h2>
      </div>
      <div>
        <h3>{cont}</h3>
      </div>
      <div>
        <ButtonCounter />
      </div>
    </div>
  );
};

export default Contador;
