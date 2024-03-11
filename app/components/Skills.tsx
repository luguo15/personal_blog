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


const Skills = () => {
    /* /.welcome-hero */
    return (
        <section id="skills" className="portfolio">
            <div className="portfolio-details">
                <div className="section-heading text-center">
                    <h2>skills</h2>
                </div>
                <div className="container">
                    <div className="portfolio-content">
                        <div className="isotope">
                            <div className="row">
                                <h2><b>Programming <span>and </span>System: </b></h2>
                                <h5>Python (TensorFlow, Keras, Pandas, Numpy), R, SQL, Git, HTML, XML, Linux</h5>
                                <br/>
                                <h2><b>Data Analysis: </b></h2>
                                <h5>Machine Learning (regression, decision trees, random forests, k-means
                                    clustering, and Transformer), Deep Learning, Natural Language Processing, Data
                                    Visualization</h5>
                                <br/>
                                <h2><b>Tools: </b></h2>
                                <h5>Power BI, Tableau, Google Analytics, Salesforce, Excel, Word,
                                    PowerPoint, Access, Illustrator, Visio, AWS, JIRA </h5>
                                <br/>
                                <h2><b>Testing Skills: </b></h2>
                                <h5>Automated Testing, Interface Testing, Functional Testing, Regression Testing, Data
                                    Driven Testing, Online Monitoring, Test Project Management, Statistical
                                    Analysis </h5>
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
    )
        ;
}

export default Skills;
