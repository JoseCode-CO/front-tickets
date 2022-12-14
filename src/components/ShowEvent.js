import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
const endpoint = 'http://127.0.0.1:8000/api/v1'

const ShowEvent = () => {
    const [events, setevents] = useState([])

    useEffect(() => {
        getAllClient()
    }, [])

    const getAllClient = async () => {
        const response = await axios.get(`${endpoint}/events`)
        setevents(response.data.data)
    }

    const deleteClient = async (id) => {
        await axios.delete(`${endpoint}/events/${id}`)
        getAllClient()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create-event" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Numero de ticket disponibles</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.name_event}</td>
                            <td>{event.category}</td>
                            <td>{event.unit_price}</td>
                            <td>{event.number_tickets}</td>
                            <td>
                                <button className='btn btn-danger' onClick={ ()=>deleteClient(event.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowEvent