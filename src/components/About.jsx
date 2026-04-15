import React from "react";

const About = ({ active, isBack, setActiveSection }) => {
  const skills = [
    { name: "HTML5", percent: 96 },
    { name: "CSS3", percent: 86 },
    { name: "JS", percent: 76 },
    { name: "Python", percent: 60 },
    { name: "Django", percent: 30 },
    { name: "OOPS", percent: 70 },
    { name: "Bootstrap", percent: 70 },
    { name: "Tailwind", percent: 40 },
    { name: "ReactJS", percent: 70 },
    { name: "NodeJS", percent: 30 },
    { name: "React Native", percent: 30 },
    { name: "SASS", percent: 80 },
    { name: "Adobe Photoshop", percent: 70 },
    { name: "Adobe Illustrator", percent: 60 },
    { name: "Git & GitHub", percent: 70 },
    { name: "SQLite", percent: 50 },
    { name: "MySQL", percent: 66 },
    { name: "Strapi Backend Tool", percent: 70 },
    { name: "Supa Base", percent: 70 },
    { name: "IDE with AI", percent: 96 },
    { name: "Figma", percent: 80 },
    { name: "Flutter", percent: 60 },
    { name: "Dart", percent: 30 },
    { name: "Android Studio", percent: 64 },
  ];

  return (
    <section
      className={`about section ${active ? "active" : ""} ${isBack ? "back-section" : ""}`}
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Mageshwaran S and <span>Web Developer</span>
                </h3>
                <p>
                  I'm Mageshwaran S, a passionate fullstack developer who loves
                  crafting real-world solutions using HTML, CSS, JS, React,
                  Python, and SQL. I enjoy building dynamic, responsive websites
                  and exploring cloud technologies. I aim to solve problems
                  creatively and deliver impactful digital experiences through
                  clean, functional code.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday : <span>27 may 2004</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age : <span>21</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Linkedin : <span>shadowzshrine</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email : <span>shadowzshrine@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree : <span>B.E.,CSE</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone : <span>+91 63690 43135</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City : <span>Medavakkam, Chennai</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Github : <span>shadowzshrine</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection("contact");
                      }}
                      className="btn hire-me"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="education padd-15"
              style={{ flex: "0 0 100%", maxWidth: "100%" }}
            >
              <h3 className="title">Education</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {/* ===== timeline item ===== */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2021 - 2025
                      </h3>
                      <h4 className="timeline-title">
                        Bachelor in Computer Science and Engineering
                      </h4>
                      <p className="timeline-text">
                        Pursuing my Bachelor's in Computer Science and
                        Engineering with a strong interest in full-stack
                        development, cloud integration, and database design. I
                        actively work on real-world projects using technologies
                        like HTML, CSS, JavaScript, ASP.NET, and Microsoft
                        Azure. I'm always excited to explore new tools and
                        enhance my development skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="experience padd-15">
              <h3 className="title">Intern Experience</h3>
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    {/* ===== timeline item ===== */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 11.2025 - 02.2026
                      </h3>
                      <h4 className="timeline-title">
                        Advanced Web Development & UI/UX
                      </h4>
                      <p className="timeline-text">
                        Completed a hands-on Web Development internship at Magic
                        Bus India Foundation, working on mini and major projects
                        using HTML, CSS, Bootstrap, JavaScript, and React JS.
                        Designed responsive user interfaces and layouts with a
                        strong focus on usability. Created UI designs and
                        prototypes using Figma following modern design
                        principles. This internship enhanced my practical
                        skills, teamwork, and understanding of real-world web
                        development standards.
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 03.2024 - 04.2024
                      </h3>
                      <h4 className="timeline-title">
                        Application Development Life Cycle{" "}
                      </h4>
                      <p className="timeline-text">
                        Completed a hands-on internship at [Bravery Infotech]
                        where I worked on web application development using
                        HTML, CSS, JS and Figma. Gained experience in UI/UX
                        designing and agile management. It helped me understand
                        industry standards and collaborative development.
                      </p>
                    </div>
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 01.2023 - 02.2023
                      </h3>
                      <h4 className="timeline-title">
                        Python Developer Intern
                      </h4>
                      <p className="timeline-text">
                        Successfully completed a remote Python Backend
                        internship at GR Soft Tech. Implemented backend
                        automation solutions using Python for efficient data
                        processing. Applied file handling techniques and modular
                        programming principles in real-time tasks. Gained
                        practical exposure to clean coding practices and backend
                        development workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills padd-15">
              <h3 className="title">Skills</h3>
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="skill-item padd-15" key={index}>
                    <h5>{skill.name}</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                      <div className="skill-percent">{skill.percent}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
