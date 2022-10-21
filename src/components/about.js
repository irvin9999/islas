import Modal from "react-bootstrap/Modal";

const About = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Datos Academicos</Modal.Title>
        </Modal.Header>
        <br />
        <br />
        <br />
        <br />
        <img
          src="./img/logoitc.jpg"
          class="img-thumbnail"
          width="100"
          height="150"
          alt="..."
        ></img>
        <Modal.Body>
          <p>Tecnologico de Comitan:</p>
          <p>
            Actualmente estudio en el Tecnologico de comitan, la carrera de
            <p>
              {" "}
              ingeniria en sistemas computacionales, curso el 7mo semestre,
            </p>
            <p>
              stoy en el grupo B, la especilidad que llevo es Desarrollo y
              gestion de entornos web.{" "}
            </p>
          </p>
        </Modal.Body>

        <br />
        <br />
        <br />
        <br />
        <img
          src="./img/descarga.jpg"
          class="img-thumbnail"
          width="100"
          height="150"
          alt="..."
        ></img>
        <Modal.Body>
          <p>Centro de bachillerato tecnológico agropecuario No.42:</p>
          <p>
            Estudie la prepa en el cbta
            <p>Utlimo grado de estudio: 3 año</p>
            <p>Especialidad: Informatica</p>
          </p>

          <br />
          <br />
          <br />
          <br />
        </Modal.Body>
        <br />
        <br />
        <br />
        <br />
        <img
          src="./img/descarga.png"
          class="img-thumbnail"
          width="100"
          height="150"
          alt="..."
        ></img>

        <Modal.Body>
          <p>Secundaria técnica No. 7</p>
          <p>
            Ahi fue donde conoci muchos amigos, estuve en danza y fue una de las
            mejores etapas de mi vida, ahi tuve mi primera novia.
            <p>Utlimo grado de estudio: 3 año</p>
          </p>

          <br />
          <br />
          <br />
          <br />
        </Modal.Body>
      </Modal.Dialog>
      <br />
    </div>
  );
};
export default About;
