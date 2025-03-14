import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import aImg from '/public/images/map/map-about-tab.svg'
import aImg1 from '/public/images/about/aboutDetailsthumb1.jpg'
import aImg2 from '/public/images/about/aboutDetailsthumb2.jpg'
import aImg3 from '/public/images/about/aboutDetailsthumb3.jpg'
import Image from 'next/image';


const AboutTab = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className="about position-relative">
            <Image src={aImg} alt="Gainioz" className="map-about-tab" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="featureTab">
                            <Nav tabs className="nav justify-content-center">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Our Mission
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                       Our Programs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >

                                       A Foundation for Growth
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="pt-55">
                                <TabPane tabId="1">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20">We are committed to fostering inclusive,
                                                    enriching experiences that promote self-awareness,
                                                    resilience, and social responsibility. By offering dynamic opportunities tailored to various interests and strengths, 
                                                    we empower youth to develop essential skills that prepare them for a lifetime of success and meaningful connections.
                                                </p>
                                            </div>
                                            <div className="aboutDetailsThumbs pt-100">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <Image src={aImg1} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                                            <Image src={aImg2} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <Image src={aImg3} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetailsThumbs">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <Image src={aImg1} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                                            <Image src={aImg2} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <Image src={aImg3} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="aboutDetails text-center  pt-100">
                                                <p className="aboutDetailsText mb-20">Each initiative is designed to encourage exploration, engagement, and empowerment in ways that stimulate growth and build character:
                                                </p>
                                                <p className="aboutDetailsText mb-20">
                                                    <b>Group Dynamics & Social Development:</b>
                                                </p>
                                                    <p className="aboutDetailsText mb-20">
                                                    Interactive activities that strengthen communication, teamwork, and emotional intelligence.
                                                    </p>
                                                <p className="aboutDetailsText mb-20">
                                                    <b>Creative & Expressive Arts: </b>
                                                </p>
                                                        <p className="aboutDetailsText mb-20">
                                                        Music, dance, visual arts, and storytelling that encourage self-expression and imaginative thinking.
                                                        </p>
                                                <p className="aboutDetailsText mb-20">
                                                    <b>Personal Growth & Leadership:</b>
                                                </p>
                                                        <p className="aboutDetailsText mb-20">
                                                        Confidence-building experiences that instill decision-making skills, accountability, and independent thinking.
                                                        </p>
                                                <p className="aboutDetailsText mb-20">
                                                    <b>Mindfulness & Well-Being: </b>
                                                </p>
                                                        <p className="aboutDetailsText mb-20">
                                                        Strategies that promote emotional balance, stress management, and self-care practices.
                                                        </p>
                                                <p className="aboutDetailsText mb-20">
                                                    <b>Community Involvement & Outreach:</b>
                                                </p>
                                                        <p className="aboutDetailsText mb-20">
                                                        Meaningful service opportunities that foster empathy, civic responsibility, and collective engagement.
                                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                <div className="row">
                                        <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20">We recognize that every child brings unique talents, perspectives, and aspirations. 
                                                    Our programs are designed to celebrate individuality while fostering a sense of belonging and purpose. 
                                                    Parents can trust that their children will be immersed in a safe, stimulating, and encouraging environment where they can develop friendships, discover passions, and gain confidence to take on new challenges.
                                                    At Transformative Justice Youth Reform, we believe that early exposure to positive, hands-on experiences creates a lasting impact.
                                                    By connecting young individuals with enriching opportunities, we help them embrace their strengths, overcome obstacles, and step boldly into their future.
                                                    </p>
                                                    <p className="aboutDetailsText mb-20">
                                                    Join us in shaping a generation of resilient, compassionate, and empowered youth!
                                                    </p>
                                            </div>
                                            <div className="aboutDetailsThumbs pt-100">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <Image src={aImg1} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                                            <Image src={aImg2} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <Image src={aImg3} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTab;