import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetails({ userData }) {
    const navigate=useNavigate()
    return (
        <div className=''>
            <hr />
            <h1>User Details</h1>
            <div className='card box p-3' style={{ width: "18rem" }}>
                <img src={userData.avatar} height={'100%'} />
                <div className='mt-5 fw-bold fs-5'>User name :{userData.name}</div>
                <div>User ID :{userData.id}</div>
                <button className='btn btn-outline-danger' onClick={()=>navigate('/list')}>Back</button>
            </div>
        </div>

    )
}

export default UserDetails