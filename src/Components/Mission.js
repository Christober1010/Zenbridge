import React from 'react'
import rocket from './icons/Faster.png'
function Mission() {
    return (
        <div className='container mb-5'>
            <div className='row mt-5 align-items-center'>
                <div className='col-md-7 col-sm'>
                    <div className='rounded-4 bg-third p-5'>
                        <div className='text-light fs-1 fw-bolder'>We are on a mission to make <span className='text-warning'>integration</span> easy</div>
                    </div>
                </div>
                <div className='col-sm p-4'>
                    <div className='box p-3 rounded-2'>
                        <div>
                            <img src={rocket} />
                        </div>
                        <div className='fs-4 fw-bold'>Faster & stabler integrations</div>
                        <p>Our API eliminates EDI complexities using
                            a very rich modern developer toolset,
                            resulting in faster EDI integrations &
                            production environments that are 10X
                            stabler than typical EDI solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-sm box m-2 p-3 rounded-2'>
                    <i className='fa fa-globe fa-4x'></i>
                    <div className='fs-2 fw-bold'>Global connectivity</div>
                    <div>
                        Zenbridge is the only platform that offers
                        API for X12 and EDIFACT EDI standards.
                        No matter which part of the world or
                        industry your trading partner belongs to,
                        you are all set for EDI connectivity
                    </div>
                </div>
                <div className='col-sm box m-2 p-3 rounded-2'>
                    <i className='fa fa-search fa-4x'></i>
                    <div className='fs-2 fw-bold'>Real time data validation</div>
                    <div>
                        Unlike traditional EDI solutions, API can
                        validate data for partner specific
                        compliances in real time, saving hundreds
                        of manual hours lost in communication &
                        thousands of dollars lost as chargebacks
                    </div>
                </div>
                <div className='col-sm box m-2 p-3 rounded-2'>
                    <i className='fa fa-headphones fa-4x'></i>
                    <div className='fs-2 fw-bolder'>Unlimited support</div>
                    <div>
                        Zenbridge offers you a delivery manager
                        who manages trading partners & monitors
                        issues with unlimited developer support
                        24X7 chat, email & phone connectivity.

                        No more EDI support frustrations.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mission