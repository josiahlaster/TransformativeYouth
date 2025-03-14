import React from 'react';
import Link from 'next/link'
import blogs from '../../api/blogs'
import Image from 'next/image';

const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="col-lg-4 mb-30">
            <div className="sidebarLayout">

            
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Direct Contact us</h5>
                        </div>
                        <form className="sidebarContacts" onSubmit={SubmitHandler}>
                            <input type="text" className="sidebarContacts__input" placeholder="Enter name*" />
                            <input type="email" className="sidebarContacts__input" placeholder="Enter your mail*" />
                            <textarea className="sidebarContacts__input textarea" name="message" id="message" placeholder="Massage*"></textarea>
                            <button className="btn btn--styleOne btn--primary it-btn" type='submit'>
                                <span className="btn__text">send massage</span>
                                <span className="it-btn__inner">
                                    <span className="it-btn__blobs">
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                    </span>
                                </span>
                                <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter>
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                            </feColorMatrix>
                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                        <div className="sidebarTitle">
                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Contact Info..</h5>
                        </div>
                        <div className="sidebarContact">
                            <ul>
                                <li>
                                    <span>Adress :</span>
                                    8638 Amarica Stranfod, Mailbon Star
                                </li>
                                <li>
                                    <span>Mail :</span>
                                    gainioz@info.com
                                </li>
                                <li>
                                    <span>Phone :</span>
                                    +7464 0187 3535 645
                                </li>
                                <li>
                                    <span>Fax id :</span>
                                    +9 659459 49594
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
