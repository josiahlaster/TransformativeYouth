import Link from 'next/link'
import blogs from '../../api/blogs'
import BlogSidebar from '../BlogSidebar';
import Image from 'next/image';

const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="donation pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-30">
                        <div className="innerWrapper">
                            <div className="row">
                                {blogs.slice(0, 3).map((blog, Bitem) => (
                                    <div className="col-lg-12 mb-55" key={Bitem}>
                                        <div className="blogBlock blogBlock--style4 hoverStyle">
                                            <figure className="blogBlock__figure overflow-hidden">
                                                <Link onClick={ClickHandler} href={'/blog-details/[slug]'} as={`/blog-details/${blog.slug}`} className="blogBlock__figure__link">
                                                    <Image src={blog.screens} alt="Gainioz Blog" className="blogBlock__figure__image image-saturation" />
                                                </Link>
                                            </figure>
                                            <div className="blogBlock__content">
                                                <div className="blogBlock__button">
                                                    <Link onClick={ClickHandler} href={'/blog-details/[slug]'} as={`/blog-details/${blog.slug}`} className="btn btn--styleOne btn--icon btn--icon2 it-btn">
                                                        <svg className="btn__icon" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.9336 0.890625L10.6523 1.13672C10.5117 1.3125 10.5117 1.55859 10.6523 1.73438L13.6055 4.65234H0.421875C0.175781 4.65234 0 4.86328 0 5.07422V5.42578C0 5.67188 0.175781 5.84766 0.421875 5.84766H13.6055L10.6523 8.80078C10.5117 8.97656 10.5117 9.22266 10.6523 9.39844L10.9336 9.64453C11.0742 9.82031 11.3555 9.82031 11.5312 9.64453L15.6094 5.56641C15.7852 5.39062 15.7852 5.14453 15.6094 4.96875L11.5312 0.890625C11.3555 0.714844 11.0742 0.714844 10.9336 0.890625Z" fill="#0B0B0B" />
                                                        </svg>
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
                                                    </Link>
                                                </div>
                                                <div className="blogBlock__header">
                                                    <div className="blogBlock__meta mb-15">
                                                        
                                                        
                                                    </div>
                                                    <h2 className="blogBlock__heading heading text-uppercase mb-20">
                                                        <Link onClick={ClickHandler} href={'/blog-details/[slug]'} as={`/blog-details/${blog.slug}`} className="blogBlock__heading__link">
                                                        {blog.title}
                                                        </Link>
                                                    </h2>
                                                </div>
                                                <div className="blogBlock__body mb-25">
                                                    <p className="blogBlock__text text">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have alteration
                                                        in some form, by injected humour, or randomised words which don't look even slightly.
                                                    </p>
                                                </div>
                                                <div className="blogBlock__meta blogBlock__meta--style2">
                                                    <ul>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    <BlogSidebar/>
                </div>
            </div>
        </section>

    )

}

export default BlogList;
