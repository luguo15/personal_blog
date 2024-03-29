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

const Head = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // 阻止默认行为
        scrollToSection(id);
    };

    return (
        <section className="header-area">
            {/* Start Navigation */}
            <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

                <div className="container">

                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" onClick={(e) => handleLinkClick('welcome', e)} href="#welcome">Lu Guo</a>
                    </div>
                    {/*/.navbar-header*/}
                    {/* End Header Navigation */}

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="smooth-menu active"></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('education', e)} href="#education">education</a></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('experience', e)} href="#experience">experience</a></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('skills', e)} href="#skills">skills</a></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('publications', e)} href="#publications">publications</a></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('portfolio', e)} href="#portfolio">portfolio</a></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('clients', e)} href="#clients">clients</a></li>
                            <li className="smooth-menu"><a onClick={(e) => handleLinkClick('contact', e)} href="#contact">contact</a></li>
                        </ul>
                        {/*/.nav */}
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/*/.container*/}
            </nav>
            {/*/nav*/}
            {/* End Navigation */}
        </section> // header-area end
    );
}

export default Head;
