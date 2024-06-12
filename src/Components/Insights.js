import React from 'react'

function Insights() {
  return (
    <div className='container'>
        <div className='fw-bold fs-1 text-center mt-5'>Insights from <span className='text-primary'>Zenbridge</span></div>
        <div className='row mt-3 justify-content-center'>
            <div className='col-sm'>
                <div className='card p-3' >
                    <img height={'250px'} width={'100%'} src='https://media.istockphoto.com/id/1389465862/photo/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=YZEk5hp1E8cv8y-xXLumH4H5zIVyyf4UdETZvsuH8Vk='/>
                    <div className='fw-bold mt-3'>Best EDI Software for a Small
                    Business</div>
                    <button className='btn btn-outline-primary'>Read Article <i className='fa fa-arrow-circle-right'></i></button>
                </div>
            </div>
            <div className='col-sm'>
                <div className='card p-3 ' >
                    <img height={'250px'} width={'100%'} src='https://media.istockphoto.com/id/1389465862/photo/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=YZEk5hp1E8cv8y-xXLumH4H5zIVyyf4UdETZvsuH8Vk='/>
                    <div className='fw-bold mt-3'>What’s the best eDI software to use seamlessly?</div>
                    <button className='btn btn-outline-primary'>Read Article <i className='fa fa-arrow-circle-right'></i></button>
                </div>
            </div>
            <div className='col-sm'>
                <div className='card p-3 '>
                    <img height={'250px'} width={'100%'} src='https://media.istockphoto.com/id/1389465862/photo/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=YZEk5hp1E8cv8y-xXLumH4H5zIVyyf4UdETZvsuH8Vk='/>
                    <div className='fw-bold mt-3'>NetSuite EDI integration A
                    complete setup guide</div>
                    <button className='btn btn-outline-primary'>Read Article <i className='fa fa-arrow-circle-right'></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insights