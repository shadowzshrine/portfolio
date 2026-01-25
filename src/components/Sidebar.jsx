import React from 'react';

const Sidebar = ({ activeSection, setActiveSection, isNavOpen, setIsNavOpen }) => {
  const navItems = [
    { id: 'home', icon: 'fa-home', name: 'Home' },
    { id: 'about', icon: 'fa-user', name: 'About' },
    { id: 'services', icon: 'fa-list', name: 'Services' },
    { id: 'projects', icon: 'fa-briefcase', name: 'Projects' },
    { id: 'contact', icon: 'fa-comments', name: 'Contact' },
  ];

  return (
    <div className={`aside ${isNavOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#"><span>M</span>ax</a>
      </div>
      <div className={`nav-toggler ${isNavOpen ? 'open' : ''}`} onClick={() => setIsNavOpen(!isNavOpen)}>
        <span></span>
      </div>
      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(item.id);
                if (window.innerWidth < 1200) setIsNavOpen(false);
              }}
            >
              <i className={`fa ${item.icon}`}></i> {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
