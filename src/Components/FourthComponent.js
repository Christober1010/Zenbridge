import React from 'react'

function FourthComponent() {
    return (
        <div className='container mt-5'>
            <div className='fw-bold fs-1'>
                A modern day for <span className='text-primary'>EDI platform</span> your fast moving team
            </div>
            <div className='row mt-3'>
                <div className='col-md-4 col-sm'>
                    <div className='box p-3 fs-3 fw-bold text-danger my-3'>Transaction</div>
                    <div className='box p-3 fs-3 fw-bolder my-3'>Trading Partners</div>
                    <div className='box p-3 fs-3 fw-bolder my-3'>Reports</div>
                    <div className='box p-3 fs-3 fw-bolder my-3'>Issues & Alerts</div>
                    <div className='box p-3 fs-3 fw-bolder my-3'>API for EDI</div>
                    <div className='box p-3 fs-3 fw-bolder my-3'>EDI Specification Editor</div>
                </div>
                <div className='col-md-8 col-sm px-2'>
                    <div className='d-flex justify-content-between'>
                        <div className='fw-bold'>Manage EDI Transactions</div>
                        <div className=' d-flex align-items-center justify-content-center'>
                            <i className='fa fa-pause'></i>
                            <i className='fa fa-angle-left fa-2x mx-2'></i>
                            <i className='fa fa-angle-right fa-2x'></i>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <img src='https://ledgible.io/wp-content/uploads/2020/01/transactions-table-date.jpg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthComponent