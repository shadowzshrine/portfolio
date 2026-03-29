import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = ({ active, isBack }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Fresher", "Aspiring Software Developer", "Multimedia Designer", "FullStack Developer", "AI Agent Trainer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className={`home section ${active ? 'active' : ''} ${isBack ? 'back-section' : ''}`} id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello, I am <span className="name">Mageshwaran S</span></h3>
                        <h3 className="my-profession">I' m a <span className="typing" ref={el}></span></h3>
                        <p>"I'm passionate about building real-world software solution"</p>
                        <a href="/documents/MAX Resume.pdf" download="MAX Resume.pdf" className="btn">Download CV</a>
                    </div>
                    <div className="home-img">
                        <img src="/images/profile pic.jpeg" alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
