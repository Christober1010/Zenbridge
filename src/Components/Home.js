import React from 'react'
import pic1 from './icons/Stake holders wheel.png'
import './Home.css'
import arc from './icons/BG Arc.png'
function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm'>
                        <div className=' text-light mt-5'>
                            <div className='fw-bold home-header fs-1'>Slay your EDI Integrate Faster</div>
                        </div>
                        <div className='text-light fs-5 mt-5'>
                            <p>Leverage the power of API technology faster
                                integrations, greater data accuracy, global connectivity &
                                total automation
                            </p>
                        </div>
                        <div>
                            <button className='demo-btn  btn btn-lg'>
                                Schedule a free demo
                            </button>
                        </div>
                    </div>
                    <div className='col-sm overflow-hidden'>
                        <img src={pic1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home