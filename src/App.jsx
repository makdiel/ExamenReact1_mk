import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Form, Button, Alert } from 'react-bootstrap';
import { alertaSuccess, alertaError, alertaWarning } from '../src/functions';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [primerparcial, setA] = useState('');
  const [segundoparcial, setB] = useState('');
  const [tercerparcial, setC] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult('');
    setError(null);

    if (!primerparcial || !segundoparcial || !tercerparcial) {
      alertaWarning('Por favor, complete todos los campos');
      return;
    }

    if (primerparcial < 0) {
      alertaWarning('Por favor, no se admiten valores menor a 0');
      return;
    }
    if (segundoparcial < 0) {
      alertaWarning('Por favor, no se admiten valores menor a 0');
      return;
    }
    if (tercerparcial < 0) {
      alertaWarning('Por favor, no se admiten valores menor a 0');
      return;
    }
    if (primerparcial > 30) {
      alertaWarning('Por favor, El Valor del primer parcial no debe ser mayor a 30%');
      return;
    }
    if (segundoparcial > 30) {
      alertaWarning('Por favor, El Valor del segundo parcial no debe ser mayor a 30%');
      return;
    }
    if (tercerparcial > 40) {
      alertaWarning('Por favor, El Valor del tercer parcial no debe ser mayor a 40%');
      return;
    }
    //alertaSuccess(error);

    const discriminant = primerparcial + segundoparcial + tercerparcial;

    if (discriminant < 0) {
      setError('valores incorrectos');
      return;
    }

    if (discriminant < 60) {
      alertaError('Alumno Reprobado');
    } else if (discriminant > 59 & discriminant < 80) {
      alertaWarning('Alumno Bueno');
    } else if (discriminant > 79 & discriminant < 90) {
      alertaSuccess('Alumno Muy Bueno');
    } else if (discriminant > 89) {
      alertaSuccess('Alumno Sobresaliente');
    }
    setError(null);
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="container">

        <h1 className="text-center mt-5">EVALUACION ESTUDIANTES</h1>
       
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Form.Group controlId="formA">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Nota Primer Parcial 30%"
              value={primerparcial}
              onChange={(e) => setA(parseFloat(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="formB">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Nota Segundo Parcial 30%"
              value={segundoparcial}
              onChange={(e) => setB(parseFloat(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="formC">
            <Form.Label></Form.Label>
            <Form.Control
              type="number"
              placeholder="Nota Tercer Parcial 40%"
              value={tercerparcial}
              onChange={(e) => setC(parseFloat(e.target.value))}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Calcular
          </Button>
        </Form>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        {result && (
          <Alert variant="success" className="mt-3">
            La Evaluacion del alumno es = {result}
          </Alert>
        )}
      </div>
    </>
  )
}

export default App
