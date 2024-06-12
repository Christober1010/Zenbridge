import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Testing({userData,setUserData}) {
    const [data, setData] = useState([])
    const navigate=useNavigate()

    const fetchData = () => {
        axios.get("https://6655bf7e3c1d3b60293aee99.mockapi.io/Users").then((resp) => {
            setData(resp.data)
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    const rowsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const pageCount = Math.ceil(data.length / rowsPerPage);
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const fetchUserDetails = (id) => {
        axios.get(`https://6655bf7e3c1d3b60293aee99.mockapi.io/Users/${id}`).then((resp)=>{
            setUserData(resp.data)
            navigate('/userDetails')
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleView=(id)=>{
        fetchUserDetails(id)
    }
    return (
        <div className='container mt-5'>
            <hr/>
            <h1>API Integration</h1>
            {[...Array(pageCount)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`btn btn-outline-dark mx-2 ${index + 1 === currentPage ? 'active' : ''}`}
                >
                    {index + 1}
                </button>
            ))}
            <table className='table'>

                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {paginatedData.map((row, index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{row.name}</td>
                            <td onClick={()=>handleView(row.id)}><i className='fa fa-eye fa-3x'></i></td>
                        </tr>
                    ))}


                </tbody>

            </table>


        </div>
    )
}

export default Testing