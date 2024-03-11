import React from 'react';
import './assets/css/font-awesome.min.css';
import './assets/css/flaticon.css';
import './assets/css/animate.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootsnav.css';
import './assets/css/style.css';
import './assets/css/responsive.css';


const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-details">
                <div className="section-heading text-center">
                    <h2>portfolio</h2>
                </div>
                <div className="container">
                    <div className="portfolio-content">
                        <div className="isotope">
                            <div className="row">

                                <div className="col-sm-4">
                                    <div className="item">
                                        <img src="/images/portfolio/p1.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                ui/ux design
                                            </a>
                                        </div>
                                        {/* /.isotope-overlay */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        <img src="/images/portfolio/p2.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                ui/ux design
                                            </a>
                                        </div>
                                        {/* /.isotope-overlay */}
                                    </div>
                                    {/* /.item */}
                                </div>
                                {/* /.col */}

                                <div className="col-sm-4">
                                    <div className="item">
                                        <img src="/images/portfolio/p3.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                web design
                                            </a>
                                        </div>
                                        {/* /.isotope-overlay */}
                                    </div>
                                    {/* /.item */}
                                </div>
                                {/* /.col */}

                                <div className="col-sm-4">
                                    <div className="item">
                                        <img src="/images/portfolio/p4.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                web development
                                            </a>
                                        </div>
                                        {/* /.isotope-overlay */}
                                    </div>
                                    {/* /.item */}
                                    <div className="item">
                                        <img src="/images/portfolio/p5.jpg" alt="portfolio image"/>
                                        <div className="isotope-overlay">
                                            <a href="#">
                                                web development
                                            </a>
                                        </div>
                                        {/* /.isotope-overlay */}
                                    </div>
                                    {/* /.item */}
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/*/.isotope*/}
                    </div>
                    {/*/.gallery-content*/}
                </div>
                {/*/.container*/}
            </div>
            {/*/.portfolio-details*/}

        </section>
    );
}


export default Portfolio;