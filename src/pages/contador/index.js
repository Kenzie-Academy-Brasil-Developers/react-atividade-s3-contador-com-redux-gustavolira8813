import ButtonCounter from "../../components/ButtonCounter";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./styles.css";
const Contador = () => {
  const cont = useSelector((state) => state.counter);

  const Medidor = styled.div`
    height: 50px;
    width: ${cont > 0 ? cont * 10 : cont * -1 * 10}px;
    background-color: ${cont > 0 ? "green" : "red"};
  `;
  return (
    <div>
      <div>
        <h2>Contador Básico</h2>
      </div>
      <div className="box">
        <Medidor></Medidor>
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
