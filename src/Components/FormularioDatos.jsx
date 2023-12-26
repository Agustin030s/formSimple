import { Button, Form } from "react-bootstrap";

const FormularioDatos = () => {
  return (
    <section className="border border-dark p-4 my-3 sectionForm">
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su DNI" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" required/>
        </Form.Group>
        <Button type="submit" className="btnForm">
            Enviar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioDatos;
