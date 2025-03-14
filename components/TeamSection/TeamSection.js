import React from 'react';
import Teams from '../../api/team'
import Link from "next/link";
import Image from 'next/image';


const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="volunteersSection pb-120 pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sectionTitle text-center mb-70">
                            <span className="sectionTitle__small justify-content-center">
                                <i className="fa-solid fa-heart btn__icon"></i>
                            </span>
                            
                            <h2 className="sectionTitle__big">Meet The President & Founder</h2>
                        </div>
                    </div>
                </div>
                <section className=" founder items-center">
               <div className="container items-center">
               <div className="grid place-items-center">

                    <div className="ectionTitle__small justify-content-center">
                    {Teams.slice(0, 8).map((team, tm) => (
                        <div className="" key={tm}>
                            <div className="volunteerBlock text-center">
                                <figure className="volunteerBlock__figure">
                                    <Image className="volunteerBlock__figure__thumb" src={team.tImg} alt="Gainioz Volunteers" />
                                </figure>
                                <div className="volunteerBlock__content">
                                    <h3 className="volunteerBlock__name text-uppercase text-center">
                                        <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link>
                                    </h3>
                                    <div className="itSocial itSocial--volunteer">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

</div>
                </div>
</div>
</section>

                <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20">I am Tina Marie Harvey, an accomplished leader in advocacy, philanthropy, and community development,
                                                     with extensive expertise in law, public policy, and nonprofit administration. With over three decades of experience,
                                                      I have designed and implemented transformative initiatives that drive systemic change, expand equitable access to critical services,
                                                       and foster sustainable opportunities for youth and families. My work is grounded in ethical leadership, strategic policy development,
                                                        and evidence-based methodologies that promote long-term societal impact.
                                                </p>
                                            </div>
                </div>
                <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20">As Founder and President of the Transformative Youth Program, I oversee the development and execution of initiatives that provide structured mentorship, leadership training, and trauma-informed interventions for youth ages 7-17. Our organization cultivates resilience and self-efficacy, equipping young individuals with the critical skills necessary to navigate adversity and pursue meaningful opportunities. By integrating experiential learning models with behavioral health frameworks, we ensure holistic academic, social, and emotional development.
                                                </p>
                                            </div>
                </div>
                <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20">With a multidisciplinary background spanning Psychology, Public Administration, and Legal Studies, I develop and implement programs that exemplify the highest standards of integrity, accountability, and measurable impact. My work involves strategic collaboration with mental health practitioners, educators, and policymakers to dismantle systemic barriers and enhance the efficacy of community-based support networks.
                                                </p>
                                            </div>
                </div>
                <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20">At the Transformative Youth Program, we are committed to equipping families with the knowledge and resources necessary to make informed, future-oriented decisions that support their children's development. Through data-driven programming and strategic alliances, we create sustainable pathways that facilitate personal growth, academic success, and civic engagement.
                                                </p>
                                            </div>
                </div>
               
            </div>
        </section>
    );
}

export default TeamSection;