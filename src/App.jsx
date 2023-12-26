import FormularioDatos from "./Components/FormularioDatos";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container className='my-5'>
      <h1 className='text-center display-3'>Formulario</h1>
      <FormularioDatos></FormularioDatos>
    </Container>
  )
}

export default App
