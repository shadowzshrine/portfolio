import React from 'react';

const Contact = ({ active, isBack }) => {
    return (
        <section className={`contact section ${active ? 'active' : ''} ${isBack ? 'back-section' : ''}`} id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
                <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                <div className="row">
                    {/* ===== Contact info item Start ===== */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fas fa-phone"></i>
                        </div>
                        <h4>Call Us On</h4>
                        <p>+91 63690 43135</p>
                    </div>
                    {/* ===== Contact info item End ===== */}
                    {/* ===== Contact info item Start ===== */}
                    <div className="contact-info-item">
                        <div className="icon">
                            <i className="fa fas fa-location-dot"></i>
                        </div>
                        <h4>Office</h4>
                        <p>Chennai,Medavakkam</p>
                    </div>
                    {/* ===== Contact info item End ===== */}
                    {/* ===== Contact info item Start ===== */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fas fa-envelope"></i>
                        </div>
                        <h4>Email</h4>
                        <p>shadowzshrine@gmail.com</p>
                    </div>
                    {/* ===== Contact info item End ===== */}
                    {/* ===== Contact info item Start ===== */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fab fa-linkedin"></i>
                        </div>
                        <h4>Linkedin</h4>
                        <p>shadowzshrine</p>
                    </div>
                    {/* ===== Contact info item End ===== */}
                </div>
                <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>

                {/* ===== Simple Mailto Button ===== */}
                <div className="row">
                    <div className="padd-15" style={{ flex: '0 0 100%', maxWidth: '100%', textAlign: 'center' }}>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shadowzshrine@gmail.com" target="_blank" rel="noopener noreferrer" className="btn">Send Message</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
