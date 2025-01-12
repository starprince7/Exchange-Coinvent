import React, { } from 'react';
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
// import { Row, Col, Card } from 'react-bootstrap'



function Contact() {

    return (
        <><Header1 />
            <div className="contact-form section-padding">
                <div className="container">
                    <div className="get-touch section-padding">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6">
                                    <div className="section-title">
                                        <h2>Get in touch. Stay in touch.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="get-touch-content">
                                        <div className="media">
                                            <span><i className="fa fa-shield"></i></span>
                                            <div className="media-body">
                                                <h4>24 / 7 Support</h4>
                                                <p>Got a problem? Just get in touch. Our support team is available 24/7.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="get-touch-content">
                                        <div className="media">
                                            <span><i className="fa fa-cubes"></i></span>
                                            <div className="media-body">
                                                <h4>Tradix Blog</h4>
                                                <p>News and updates from the world’s leading cryptocurrency exchange.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="get-touch-content">
                                        <div className="media">
                                            <span><i className="fa fa-certificate"></i></span>
                                            <div className="media-body">
                                                <h4>Careers</h4>
                                                <p>Help build the future of technology. Start your new career at Tradix.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="get-touch-content">
                                        <div className="media">
                                            <span><i className="fa fa-life-ring"></i></span>
                                            <div className="media-body">
                                                <h4>Community</h4>
                                                <p>Tradix is global. Join the discussion in our worldwide communities.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>Let us hear from you directly!</h2>
                                <p>We always want to hear from you! Let us know how we can best help you and we'll do our
                                    very best.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="info-list">
                                <h5 className="mb-3">Address</h5>
                                <ul>
                                    <li><i className="fa fa-phone"></i> (+880) 1843 666660</li>
                                    <li><i className="fa fa-envelope"></i> bitvent.com@gmail.com</li>
                                    <li><i className="fa fa-map-marker"></i> 3062 Woodside Road, Woodside, CA 94062</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-5">


                                            <label for="contactName">
                                                Full name
                                        </label>


                                            <input type="text" className="form-control" id="contactName"
                                                placeholder="Full name" />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-5">


                                            <label for="contactEmail">
                                                Email
                                        </label>


                                            <input type="email" className="form-control" id="contactEmail"
                                                placeholder="hello@domain.com" />

                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-7 mb-md-9">

                                            <label for="contactMessage">
                                                What can we help you with?
                                        </label>

                                            <textarea className="form-control" id="contactMessage" rows="5"
                                                placeholder="Tell us what we can help you with!"></textarea>

                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-auto">


                                        <button type="submit" className="btn btn-primary lift">
                                            Send message
                                    </button>

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Bottom />

            <Footer1 />
        </>
    )
}

export default Contact;