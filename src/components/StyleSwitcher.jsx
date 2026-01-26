import React, { useEffect, useState } from 'react';

const StyleSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    useEffect(() => {
        if (isLight) {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    }, [isLight]);

    const setActiveStyle = (color) => {
        document.documentElement.style.setProperty('--skin-color', color);
    };

    const colors = [
        { name: 'color-1', value: '#fa5b0f' },
        { name: 'color-2', value: '#ec1839' },
        { name: 'color-3', value: '#37b182' },
        { name: 'color-4', value: '#1854b4' },
        { name: 'color-5', value: '#f021b2' }
    ];

    return (
        <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
            <div className="style-switcher-toggler s-icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon" onClick={() => setIsLight(!isLight)}>
                <i className={`fas ${isLight ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                {colors.map((c) => (
                    <span
                        key={c.name}
                        className={c.name}
                        onClick={() => setActiveStyle(c.value)}
                        style={{ background: c.value, cursor: 'pointer' }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default StyleSwitcher;
