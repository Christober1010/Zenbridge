import React from 'react'
import pic1 from './icons/Photo.png'
import './ThirdComponent.css'
import badges from './icons/G2 Badge.png'
function ThirdComponent() {
    return (
        <div className='bg-third container-fluid p-5'>
            <div className='row p-5 align-items-center'>
                <div className='col-sm col-md-2 '><img src={pic1} /></div>
                <div className='col-sm col-md-5'>
                    <div>
                        <div className='text-light fs-1 fw-bolder'>Not just our technology, we are loved for our <span className='text-info'>EDI Support </span>too</div>
                        <div className='text-light'>We use Zenbridge as middleware for the end to
                            end sales cycle.The customer service and
                            developer resource(s) we have partnered with
                            have been exceptional.
                        </div>
                        <p className='text-warning fw-bold mt-5 '>Seth V, Senior Director, Operations & Logistics</p>
                    </div>
                </div>
                <div className='col-sm col-md-5'>
                    <div className='row'>
                        <div className='col'><img src={badges} /></div>
                        <div className='col'><img src={badges} /></div>
                        <div className='col'><img src={badges} /></div>
                        <div className='col'><img src={badges} /></div>
                        <div className='col'><img src={badges} /></div>
                        <div className='col'><img src={badges} /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ThirdComponent