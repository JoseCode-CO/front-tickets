import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'
const endpoint = 'http://127.0.0.1:8000/api/v1/clients'
const endpointV2 = 'http://127.0.0.1:8000/api/v1/tickets'

const AsignarEvent = () => {
    const [name_user, setName_user] = useState('')
    const [idEvent, setIdEvent] = useState('')
    
    const {id} = useParams()
    const update = async (e) => {
        e.preventDefault(e)
        await axios.post(endpointV2, {name_user: name_user, idEvent: idEvent})
        window.location.href = "http://localhost:3000/home";
    }

    useEffect(() => {
        const getClientById = async () => {
            const response = await axios.get(`${endpoint}/${id}`)
            console.log(response)
            setName_user(response.data.data.name)
          
        }

        getClientById()
    }, [])
  return (
   <div className='container'>
          <div className='row'>
            <h3>Asignar tickets</h3>
           <div className='col col-8'>
           <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                     value={name_user}
                     onChange={ (e) => setName_user(e.target.value)}
                     type='text'
                     className='form-control'
                     required
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Id del evento</label>
                    <input
                     value={idEvent}
                     onChange={ (e) => setIdEvent(e.target.value)}
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

export default AsignarEvent