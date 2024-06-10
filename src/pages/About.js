export default function About() {
    return (
        <container className="container">
            <div className="about">
                <p className="about-head">About Me</p>
                <p className="about-text">plenty of words</p>
            </div>
            <div className="about">
                <p className="about-head">Tech Stack</p>
                <p className="about-text">Languages: C/C++, Python, CSS/HTML/JS</p>
                <p className="about-text">Libraries and Frameworks: Flask, React</p>
                <p className="about-text">Databases and Technologies: SQLite, Git</p>
            </div>
            <div className="about">
                <p className="about-head">Work Experience</p>
                <p className="about-text">Piston IT intern May 2024-Aug 2024</p>
            </div>
            <div className="about">
                <p className="about-head">Education</p>
                <p className="about-text">University of Alabama, BS in Computer Science</p>
                <p className="about-text">Grad date: Dec 2025</p>
                <p className="about-text">Awards: National Diversity Merit Scholarship, Full tuition covered</p>
            </div>
        </container>
    );
}