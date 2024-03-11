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

const Publications = () => {
    /* /.welcome-hero */
    return (
        <section id="publications" className="portfolio">
            <div className="portfolio-details">
                <div className="section-heading text-center">
                    <h2>publications</h2>
                </div>
                <div className="container">
                    <div className="portfolio-content">
                        <div className="isotope">
                            <div className="row">
                                <h2><a href="https://aclanthology.org/2023.wassa-1.33/">1. Can ChatGPT Understand Causal
                                    Language
                                    in Science Claims?</a> (Top-tier NLP conference: ACL) </h2>
                                <p>Kim, Y., <b>Guo, L.</b>, Yu, B., & Li, Y. (2023, July). Can ChatGPT Understand Causal
                                    Language in Science Claims?. In Proceedings of the 13th Workshop on Computational
                                    Approaches to Subjectivity, Sentiment, & Social Media Analysis (pp. 379-389).</p>
                                <br/>
                                <h2><a href="https://aclanthology.org/2020.coling-main.427/">2. Measuring
                                    Correlation-to-Causation Exaggeration in Press Releases</a> (Top-tier NLP
                                    conference:
                                    COLING) </h2>
                                <p>Yu, B., Wang, J., <b>Guo, L.</b>, & Li, Y. (2020, December). Measuring
                                    correlation-to-causation exaggeration in press releases. In Proceedings of the 28th
                                    International Conference on Computational Linguistics (pp. 4860-4872).</p>
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

export default Publications;
