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

const Aboutme = () => {
    return (
        // {/*about start */}
        <section id="about" className="about">
            <div className="section-heading text-center">
                <h2>about me</h2>
            </div>
            <div className="container">
                <div className="about-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="single-about-txt">
                                <h3>
                                    I am a Professional Data Scientist, Data Analyst, and Software Quality Assurance Engineer. I am a master student in Applied Data Science at Syracuse University, and I will graduate in May 2024. I have a strong background in data analysis, data visualization, machine learning, deep learning, natural language processing (NLP), large language model (LLM), and software testing.
                                </h3>
                                <p>
                                    I am proficient in Python, R, SQL, Tableau, and Power BI. I am also familiar with Java, HTML, and JavaScript. I am passionate about data science and software engineering in test, and I am eager to apply my skills to solve real-world problems. I am a quick learner, a good team player, and a responsible person. I am looking for a full-time job or an internship in data science, data analysis, or software engineering in test. I am open to relocation. I am authorized to work in the United States. I am a hardworking and dedicated person, and I am confident that I can make a significant contribution to your team.                                 </p>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="single-about-add-info">
                                            <h3>phone</h3>
                                            <p>315-952-8603</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-about-add-info">
                                            <h3>email</h3>
                                            <p>lguo15@syr.edu</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-about-add-info">
                                            <h3>LinkedIn</h3>
                                            <a href="https://www.linkedin.com/in/luguo15/">www.linkedin.com/in/luguo15/</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-offset-1 col-sm-5">
                            <div className="single-about-img">
                                <img src="/images/about/profile.jpg" alt="Profile Image"/>
                                <div className="about-list-icon">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        {/* / li */}
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-dribbble" aria-hidden="true"></i>
                                            </a>

                                        </li>
                                        {/* / li */}
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>

                                        </li>
                                        {/* / li */}
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        {/* / li */}
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        {/* / li */}


                                    </ul>
                                    {/* / ul */}
                                </div>
                                {/* /.about-list-icon */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Aboutme;