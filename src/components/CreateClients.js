import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/v1/clients'
export const CreateClients = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [telephone, setTelephone] = useState('')
    const [direction, setDirection] = useState(0)
    const [identy_document, setIdenty_document] = useState(0)
    const [email, setEmail] = useState('')

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name: name, lastname: lastname, telephone: telephone, direction: direction, identy_document: identy_document, email:email})
        window.location.href = "http://localhost:3000/";
    }
    return (
      <div className='container'>
          <div className='row'>
            <h3>Crear cliente</h3>
           <div className='col col-8'>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                     value={name}
                     onChange={ (e) => setName(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellidos</label>
                    <input
                     value={lastname}
                     onChange={ (e) => setLastname(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                     value={telephone}
                     onChange={ (e) => setTelephone(e.target.value)}
                     type='number'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Documento de identidad</label>
                    <input
                     value={identy_document}
                     onChange={ (e) => setIdenty_document(e.target.value)}
                     type='number'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Direccion</label>
                    <input
                     value={direction}
                     onChange={ (e) => setDirection(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                     value={email}
                     onChange={ (e) => setEmail(e.target.value)}
                     type='email'
                     className='form-control'
                     required
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
           </div>
        </div>
      </div>
    )
}

export default CreateClients
