import React from 'react'

function WhyZen() {
    return (
        <div className='bg-third container-fluid mt-5 p-5 text-light'>
            <div className='row p-5'>
                <div className='col-md-6 col-sm'>
                    <div className='fs-1 fw-bold text-light '>Why <span className='text-warning'>Zenbridge</span> ?</div>
                    <p>Unmatched Pricing, Unparalleled Support</p>
                </div>
                <div className='col-md-3 col-sm'>
                    <div className='fs-2 fw-bold mb-3 text-warning'>
                        Nature of use
                    </div>
                    <div><i className='fa fa-check'></i> Self serve mode</div>
                    <div><i className='fa fa-check'></i> Fully managed mode</div>
                    <div><i className='fa fa-check'></i> Fully customized implementation</div>
                </div>
                <div className='col-md-3 col-sm'>
                    <div className='fs-2 fw-bold mb-3 text-warning'>
                       Support
                    </div>
                    <div><i className='fa fa-check'></i> Exclusive delivery manager</div>
                    <div><i className='fa fa-check'></i> Unlimited developer support hours</div>
                    <div><i className='fa fa-check'></i> 24*7 support via Chat, Email & Phone</div>
                </div>
            </div>
        </div>
    )
}

export default WhyZen