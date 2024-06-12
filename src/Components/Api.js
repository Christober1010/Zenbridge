import React from 'react'

function Api() {
    return (
        <div className='row mt-5 container-fluid p-5'>
            <div className='col-md-8 col-sm'>
                <div className='fs-1 fw-bold'>With our APIs, we are challenging the status quo of <span className='text-primary'>EDI integrations</span> ?</div>
                <p>EDI integrations don t have to be slow, frustrating, or costly.
                    Invest in the fastest growing new age EDI technology and save
                    your company from EDI nightmares.</p>
            </div>
            <div className='col-md-4 col-sm'>
                <div className='row'>
                    <div className='col-2'><i className='fa fa-sticky-note fa-2x'></i></div>
                    <div className='col-8'>
                        <div className='fw-bold'>100 Million+</div>
                        <p>Transactions & counting</p>
                    </div>


                </div>
                <div className='row'>
                    <div className='col-2'><i className='fa fa-flash fa-2x'></i></div>
                    <div className='col-8'>
                        <div className='fw-bold'>3-4 Weeks</div>
                        <p>Fastest integration time</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'><i className='fa fa-money fa-2x'></i></div>
                    <div className='col-8'>
                        <div className='fw-bold'>$  0.05</div>
                        <p>Lowest transaction fee</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Api