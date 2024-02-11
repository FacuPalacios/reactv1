//rsc crea la estructura inicial del proyecto
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Tareas = () => {
    const [tarea, setTarea] = useState(""); //useState: Estado / (""): String vacío / ([]): Array vacío
    const [tareas, setTareas] = useState([]);
    console.log(tareas);

    return (
        <div>
            <div className='container my-5 py-5 d-flex justify-content-center'>
                <Form>
                    <Form.Group>
                        <Form.Label>Ingrese la tarea a agendar</Form.Label>
                        <Form.Control type='text' onChange={(e) =>{
                            console.log(e.currentTarget.value);
                            setTarea(e.currentTarget.value); //Guardamos la tarea en un estado
                        }}/> {/*Form.Control = input en javascript // onChange: Detecta cuando cambia algo. En este caso muestra lo que vamos escribiendo (e.currentTarget.value*/}
                    </Form.Group>
                    <Button type='button' variant='primary' className='my-3' onClick={() => {
                        setTareas([...tareas, tarea]); //al setear esto, tengo guardado el valor de tarea. Los 3 puntos: desmenuza el array y lo agrega al final (como si fuera push)
                    }}>Guardar tarea</Button> {/*variant: es como la clase*/}
                </Form>
            </div>
            <div className='container'>
                <h3>Lista de Tareas a realizar</h3>
                <ol>
                    {tareas.map((elemento, index) => { //Con las llaves amarillas "activo" el js, para ingresar datos
                        return(
                            <div key={index}>
                            <li>Tarea: {elemento}</li>
                            </div>
                        )
                    })}
                </ol>
            </div>
        </div>
    );
};

export default Tareas;