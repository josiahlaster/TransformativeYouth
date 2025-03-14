import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import AboutTab from './AboutTab';
import FunFactSection from '../../components/FunFact/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';

const AboutUsPage = (props) => {

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main about-page">
                <PageTitle pageTitle={'About Us'} pagesub={'About'} />
                <section className="about pt-120 pb-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sectionTitle text-center mb-30">
                                    <span className="sectionTitle__small justify-content-center">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        about foundation
                                    </span>
                                    <h2 className="sectionTitle__big">We are always there others need help</h2>
                                </div>
                            </div>
                            <div className="col-lg-10 mx-auto">
                                <div className="aboutDetails text-center">
                                    <p className="aboutDetailsText mb-20">At Transformative Justice Youth Reform, we cultivate an uplifting atmosphere where children and teens can explore their interests,
                                        develop meaningful connections, and build essential life skills. Our Transformative Youth program welcomes youth ages 7 to 17,
                                        providing a space where they can engage, create, and grow through carefully designed experiences that encourage personal expression, leadership,
                                        and collaboration.</p>
                                    <p className="aboutDetailsText mb-20">Through interactive initiatives, cultural exploration, and community engagement,
                                        we ensure that every participant feels valued, supported, and inspired. Our approach blends structured programming with open-ended discovery, 
                                        allowing young minds to flourish in an environment that nurtures creativity, curiosity, and confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AboutTab />
                <FunFactSection />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <p className="aboutDetailsText mb-20 text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium
                                doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit,
                                loremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, voluptas
                                sit aspernatur aut odit aut fugit, voluptas sit aspernatur aut odit aut fugit, voluptas si.
                            </p>
                        </div>
                    </div>
                </div>
                <TeamSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutUsPage;
