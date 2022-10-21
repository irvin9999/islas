import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  return (
    <div>
      <h1 className="color">Datos Personales</h1>
      <br></br>
      <u>
        <h2></h2>
      </u>
      <br></br>
      <i>
        <h4></h4>
      </i>

      <br></br>
      <img src="./img/manuel.jpeg" class="img-thumbnail" alt="..."></img>
      <tbody></tbody>
      <h5>Numero Telefonico: 965-124-72-74</h5>
      <h5>Correo Electronico Personal: kronosmanuel@gmail.com</h5>
      <h5>Fecha de Nacimiento: 06 de septiembre del 2001</h5>
      <h5>Edad actual: 21 Años</h5>
      <h5>Direccion: 2a av norte poniente, villa corzo, chiapas</h5>
    </div>
  );
};
export default Home;
