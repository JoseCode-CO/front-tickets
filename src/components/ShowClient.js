import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
const endpoint = 'http://127.0.0.1:8000/api/v1'

const ShowClient = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        getAllClient()
    }, [])

    const getAllClient = async () => {
        const response = await axios.get(`${endpoint}/clients`)
        setClients(response.data.data)
    }

    const deleteClient = async (id) => {
        await axios.delete(`${endpoint}/clients/${id}`)
        getAllClient()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.lastname}</td>
                            <td>{client.email}</td>
                            <td>
                                <Link to={`/edit/${client.id}`} className='btn btn-warning'>Editar</Link>
                                <button className='btn btn-danger' onClick={ ()=>deleteClient(client.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowClient