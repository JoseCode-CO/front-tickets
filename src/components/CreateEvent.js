import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/v1/events'
export const CreateEvents = () => {
    const [name_event, setName_event] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [unit_price, setUnit_price] = useState(0)
    const [number_tickets, setNumber_tickets] = useState(0)

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name_event: name_event, description: description, category: category, unit_price: unit_price, number_tickets: number_tickets})
        window.location.href = "http://localhost:3000/event";
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
                     value={name_event}
                     onChange={ (e) => setName_event(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Descripcion</label>
                    <input
                     value={description}
                     onChange={ (e) => setDescription(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Categoria</label>
                    <input
                     value={category}
                     onChange={ (e) => setCategory(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Precio de la boleta</label>
                    <input
                     value={unit_price}
                     onChange={ (e) => setUnit_price(e.target.value)}
                     type='number'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Numeros de tickets disponibles</label>
                    <input
                     value={number_tickets}
                     onChange={ (e) => setNumber_tickets(e.target.value)}
                     type='text'
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

export default CreateEvents
