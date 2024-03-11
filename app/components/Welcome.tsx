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

const Welcome = () => {
    /* /.welcome-hero */
    return (
        <section id="welcome" className="welcome-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="header-text">
                            <h2>hi <span>,</span> i am <br /> Lu <br /> Guo <span>.</span></h2>
                            <p>Data Scientist, Data Analyst, and Software Quality Assurance Engineer</p>
                            <a href="download/Lu_Guo_resume.pdf">download resume</a>
                        </div>{/* /.header-text */}
                    </div>{/* /.col */}
                </div>{/* /.row */}
            </div>{/* /.container */}
        </section> // welcome-hero end
    );
}

export default Welcome;
