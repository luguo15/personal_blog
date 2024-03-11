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


const Education = () => {
    return (
        <div id="education" className="education">
            <div className="section-heading text-center">
                <h2>education</h2>
            </div>
            <div className="container">
                <div className="education-horizontal-timeline">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="single-horizontal-timeline">
                                <div className="experience-time">
                                    <h2>2022.8 - 2024.5</h2>
                                    <h3>master <span>of </span> applied data science</h3>
                                </div>
                                {/*.experience-time*/}
                                <div className="timeline-horizontal-border">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <span className="single-timeline-horizontal"></span>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <h4 className="title">
                                            syracuse university
                                        </h4>
                                        <h5>Syracuse, NY, USA</h5>
                                        <h5>GPA: 4.0</h5>
                                        <p className="description">Relevant Coursework:</p>
                                        <p className="description">Machine Learning,</p>
                                        <p className="description"> Text Mining,</p>
                                        <p className="description"> Natural Language Processing,</p>
                                        <p className="description"> Database,</p>
                                        <p className="description">Data Visualization,</p>
                                        <p className="description">Deep Learning</p>

                                    </div>
                                    {/*.timeline-content*/}
                                </div>
                                {/*.timeline*/}
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="single-horizontal-timeline">
                                <div className="experience-time">
                                    <h2>2017.9 - 2020.6</h2>
                                    <h3>master <span>of </span> information science</h3>
                                </div>
                                {/*.experience-time*/}
                                <div className="timeline-horizontal-border">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <span className="single-timeline-horizontal"></span>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <h4 className="title">
                                            sichuan university
                                        </h4>
                                        <h5>Chengdu, Sichuan, China</h5>
                                        <h5>GPA: 3.8, top 1</h5>
                                        <p className="description">Relevant Coursework: </p>
                                        <p className="description">Information Retrieval (Elasticsearch),</p>
                                        <p className="description">Database Management,</p>
                                        <p className="description">Data Structures</p>
                                    </div>
                                    {/*.timeline-content*/}
                                </div>
                                {/*.timeline*/}
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="single-horizontal-timeline">
                                <div className="experience-time">
                                    <h2>2013.9 - 2017.6</h2>
                                    <h3>bachelor <span>of </span> Information Management <span>and</span> Information
                                        Systems</h3>
                                </div>
                                {/*.experience-time*/}
                                <div className="timeline-horizontal-border">
                                    <i className="fa fa-circle" aria-hidden="true"></i>
                                    <span className="single-timeline-horizontal spacial-horizontal-line"></span>
                                </div>
                                <div className="timeline">
                                    <div className="timeline-content">
                                        <h4 className="title">
                                            sichuan university
                                        </h4>
                                        <h5>Chengdu, Sichuan, China</h5>
                                        <h5>GPA: 3.5, top 10%</h5>
                                        <p className="description">Relevant Coursework: </p>
                                        <p className="description">Object-oriented Programming,</p>
                                        <p className="description">C,</p>
                                        <p className="description">C++</p>
                                    </div>
                                    {/*.timeline-content*/}
                                </div>
                                {/*.timeline*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> // education end
    );
}


export default Education;