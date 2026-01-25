import React from 'react';

const Projects = ({ active, isBack }) => {
    return (
        <section className={`projects portfolio section ${active ? 'active' : ''} ${isBack ? 'back-section' : ''}`} id="projects">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My Recent Projects :</h2>
                    </div>
                </div>
                <div className="row">
                    {/* ===== Project Item Start ===== */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="/images/web_ui_projects.png" alt="Web & UI Projects" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Web & UI Projects</h4>
                                <p>Responsive web apps, Figma to web, UI/UX optimization</p>
                            </div>
                        </div>
                    </div>
                    {/* ===== Project Item End ===== */}
                    {/* ===== Project Item Start ===== */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="/images/max_notes.png" alt="Max Notes" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Max Notes</h4>
                                <p>Desktop Notes Application</p>
                            </div>
                        </div>
                    </div>
                    {/* ===== Project Item End ===== */}
                    {/* ===== Project Item Start ===== */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="/images/Finger tap game.png" alt="Finger Tap Challenge" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Finger Tap Challenge</h4>
                                <p>Mobile Game</p>
                            </div>
                        </div>
                    </div>
                    {/* ===== Project Item End ===== */}
                    {/* ===== Project Item Start ===== */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="/images/My Portfolio.png" alt="Personal Portfolio Website" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Personal Portfolio Website</h4>
                                <p>My Personal Portfolio</p>
                            </div>
                        </div>
                    </div>
                    {/* ===== Project Item End ===== */}
                </div>
            </div>
        </section>
    );
};

export default Projects;
