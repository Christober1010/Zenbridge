import React from 'react'

function Footer() {
  return (
    <div className='bg-third p-3 text-light p-5'>
        <div className='row'>
            <div className='col'>
                <div className='fw-bold fs-5  text-warning'>
                Solutions
                </div>
                <div>Developers</div>
                <div>EDI vs API</div>
                <div>API for EDI</div>
                <div>EDI Software - Decision</div>
                <div>making guide</div>
            </div>
            <div className='col'>
                <div className='fw-bold fs-5  text-warning'>
                Integrations
                </div>
                <div>NetSuite Integration</div>
                <div>Shopify Integration</div>
                <div>Quickbooks Integration</div>
                <div>Other ERP Integrations</div>

            </div>
            <div className='col'>
                <div className='fw-bold fs-5 text-warning'>
                Standards
                </div>
                <div>API for EDIFACT</div>
                <div>API for ANSI X12</div>
                <div>Pricing</div>
               
            </div>
            <div className='col'>
                <div className='fw-bold fs-5  text-warning'>
                Resources
                </div>
                <div>Blog</div>
                <div>Documentation</div>
                
            </div>
            <div className='col'>
                <div className='fw-bold fs-5 text-warning'>
                Company
                </div>
                <div>Home</div>
                <div>About us</div>
                <div>Career</div>
                <div>Why us</div>
                <div>Join us</div>
                <div>Contact</div>
            </div>
            
        </div>
        <div><span className='text-warning fw-bold'>Follow us on </span><i className='fa fa-instagram'></i> <i className='fa fa-linkedin'></i> <i className='fa fa-twitter'></i> <i className='fa fa-facebook'></i></div>
        <div className='d-flex justify-content-between'>
            <div className='text-danger'>
            © 2024. All rights reserved.
            </div>
            <div className='text-danger'>Privacy policy Terms of service</div>
        </div>
    </div>
  )
}

export default Footer