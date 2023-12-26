import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormularioDatos = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert('Completar todos los datos');
    }

    alert('Datos enviados correctamente');
    setValidated(true);
  };
  return (
    <section className="border border-dark p-4 my-3 sectionForm">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" required />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu nombre
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            required
          />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu apellido
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su DNI" required />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu DNI
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" required />
          <Form.Control.Feedback type="invalid">
            Debes ingresar tu Email
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="btnForm">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioDatos;
