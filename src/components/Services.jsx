import React from 'react';

const Services = ({ active, isBack }) => {
    return (
        <section className={`service section ${active ? 'active' : ''} ${isBack ? 'back-section' : ''}`} id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    {/* ===== Service item Start ===== */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-mobile-alt"></i>
                            </div>
                            <h4>Mobile App Develop</h4>
                            <p>
                                Crafting user-friendly and high-performance mobile applications that deliver seamless
                                digital experiences on both Android and iOS platforms.
                            </p>
                        </div>
                    </div>
                    {/* ===== Service item End ===== */}
                    {/* ===== Service item Start ===== */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <h4>Web Develop</h4>
                            <p>
                                Building responsive, secure, and scalable websites using the latest web technologies
                                that bring your ideas to life on the internet.
                            </p>
                        </div>
                    </div>
                    {/* ===== Service item End ===== */}
                    {/* ===== Service item Start ===== */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-palette"></i>
                            </div>
                            <h4>Web Design</h4>
                            <p>
                                Designing visually stunning, intuitive, and engaging user interfaces that elevate
                                your brand’s online presence.
                            </p>
                        </div>
                    </div>
                    {/* ===== Service item End ===== */}
                    {/* ===== Service item Start ===== */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <h4>Backend Develop</h4>
                            <p>
                                Powering your applications with robust server-side logic, database integration, and
                                API development for smooth performance.
                            </p>
                        </div>
                    </div>
                    {/* ===== Service item End ===== */}
                    {/* ===== Service item Start ===== */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-search"></i>
                            </div>
                            <h4>Data Analyse</h4>
                            <p>
                                Unlocking insights from complex data through analysis, visualization, and reporting
                                to support smarter business decisions.
                            </p>
                        </div>
                    </div>
                    {/* ===== Service item End ===== */}
                    {/* ===== Service item Start ===== */}
                    <div className="service-item padd-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-lightbulb"></i>
                            </div>
                            <h4>Innovative Create</h4>
                            <p>
                                Transforming unique ideas into reality with a blend of creativity, design thinking,
                                and technical innovation that stands out.
                            </p>
                        </div>
                    </div>
                    {/* ===== Service item End ===== */}
                </div>
            </div>
        </section>
    );
};

export default Services;
