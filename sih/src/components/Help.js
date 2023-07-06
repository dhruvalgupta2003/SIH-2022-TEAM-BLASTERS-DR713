import React from 'react'
import '../styles/Help.css'
import Accordion from './Accordian'
import helpBoy from '../Images/help-boy.png'

export default function Help() {

    return (
        <>
            <h2 className='heading'>Need Help?</h2>
            <p className='help-para' >How can we help you out? Our team is standing by for service and support.</p>

            <input type="text" name="searchKeyword" id="search-keyword" placeholder='Search keywords' />

            <div className="help-container">
                <div className="content-box">

                    <h2 className='heading' style={{ margin: 0 }} >FAQs</h2>
                    <p className='help-para' >Frequently Asked Questions.
                        We’ve got instant answers.</p>


                    <div className="accordion">
                        <Accordion />
                        <Accordion />
                        <Accordion />
                    </div>
                </div>
                <div className="img-box">
                    <img src={helpBoy} alt="" />
                </div>
            </div>

            <h2 className='heading' style={{ margin: '10px 0' }} >Still Have Questions? </h2>
            <p className='help-para' >If you cannot find the answer to your questions in our FAQ.</p>
            <p className='help-para' > You can always contact us we’ll answers you shortly.</p>

            <button className='contact-us-btn' >Contact Us</button>




        </>
    )
}
