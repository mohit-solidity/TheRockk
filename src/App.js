import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { motion } from 'framer-motion'; // For animations
// Import icons for socials
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';

// --- 1. ALL STYLES ---
// All the CSS is combined here.
// ===================================

const globalStyles = `
:root {
  /* A more professional, "human" color palette */
  --bg-dark: #111827;      /* Deep navy blue */
  --bg-light: #1f2937;     /* Lighter navy */
  --primary-color: #38bdf8; /* A friendly, bright blue */
  --text-primary: #f8fafc;   /* Soft white */
  --text-secondary: #cbd5e1; /* Light gray */
  --shadow: rgba(0, 0, 0, 0.4);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  scroll-behavior: smooth;
  
  /* BACKGROUND IMAGE: 
    This is where you'd add your background image. 
    I've added a clean gradient as a placeholder.
  */
  background-image: linear-gradient(135deg, var(--bg-dark) 0%, #111827 100%);
  background-attachment: fixed;
}

body {
  line-height: 1.7; /* More spacing for readability */
}

.App {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  min-height: 100vh;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--primary-color);
  display: inline-block;
}

/* --- Navbar Styles --- */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1100px;
  background-color: rgba(17, 24, 39, 0.8); /* Semi-transparent navy */
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 1.5rem 2rem;
}

.navbar-brand {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-primary);
  cursor: pointer;
}

.navbar-brand span {
  color: var(--primary-color);
}

.navbar-links {
  display: flex;
  list-style: none;
}

.navbar-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
  padding-bottom: 5px;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
}

.navbar-link:hover {
  color: var(--text-primary);
}

.navbar-link.active {
  color: var(--primary-color);
}

/* --- Hero (Bio) Styles --- */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.hero-title {
  font-size: 3.5rem; /* Slightly smaller for a softer feel */
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-name {
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.8rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 650px;
  font-weight: 400;
}

.hero-cta-button {
  background-color: var(--primary-color);
  color: var(--bg-dark);
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.8rem 2.5rem;
  border-radius: 50px; /* Rounded for a friendly feel */
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.2);
}

.hero-cta-button:hover {
  background-color: var(--text-primary);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.3);
}

/* --- Services ("What I Do") Styles --- */
.services-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
}

.service-card {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #374151;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-color);
}

.service-card-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.service-card-description {
  font-size: 1rem;
  color: var(--text-secondary);
}

/* --- Projects ("Who I've Worked With") Styles --- */
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column list */
  gap: 2rem;
  width: 100%;
  max-width: 800px; /* Constrain width for a list feel */
}

.project-card {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px var(--shadow);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
}

.project-card-title {
  font-size: 1.75rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.project-card-role {
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
}

.project-card-description {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-card-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
.project-card-link:hover {
  color: var(--text-primary);
}

/* --- Footer (Socials) Styles --- */
.footer {
  text-align: center;
  padding: 4rem 0 2rem 0;
  border-top: 1px solid var(--bg-light);
  min-height: auto; /* Override section min-height */
}

.socials-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin-bottom: 1.5rem;
}

.social-link {
  color: var(--text-secondary);
  font-size: 2rem; /* Make icons large and easy to click */
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--primary-color);
  transform: scale(1.1);
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.project-logo {
width: 60px;
height: 60px;
border-radius: 50%;      /* ✅ makes it circular */
object-fit: cover;
position: absolute;       /* ✅ places it in the card corner */
top: 15px;
right: 15px;
border: 2px solid var(--primary-color);
box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

`;

// --- 2. YOUR DATA ---
// Edit all your info here
// ===================================

const bio = {
  name: 'The Rock', // Add your name
  headline: "Community Manager",
  bio: "I'm the bridge between your project and your people. As a professional community manager, I specialize in creating welcoming, active, and loyal online spaces. I don't just manage chats; I build relationships, foster discussion, and turn users into advocates.",
};

const services = [
  {
    title: 'Community Strategy',
    description:
      'Designing the blueprint for a healthy, growing community, from moderation guides to engagement calendars.',
  },
  {
    title: 'Active Moderation',
    description:
      'Keeping conversations clean, on-topic, and positive. I handle spam, FUD, and conflict resolution with empathy.',
  },
  {
    title: 'Engagement & Events',
    description:
      'Running AMAs, contests, and creating daily content that sparks conversation and brings your community to life.',
  },
  {
    title: 'User Feedback & Analytics',
    description:
      "Listening to your users and turning their feedback into actionable insights for your project's growth.",
  },
];

const projects = [
  {
    id: 1,
    title: 'CLORE',
    role: 'Lead Community Manager (2023-Till Now)',
    description:
      'Grew the Discord community from 1,000 to 50,000 members in 3 months. Established a team of 15 international moderators and ran all community-facing events.',
    image:"https://pbs.twimg.com/profile_images/1668774525020848128/D9cTRbPy_400x400.jpg"
    },
  {
    id: 2,
    title: 'XY Finance',
    role: 'Head Moderator (2023-2024)',
    description:
      'Managed a high-traffic Telegram and Discord during a sold-out mint. Developed the anti-FUD strategy and maintained a positive, hype-filled environment.',
    image:"https://pbs.twimg.com/profile_images/1470075194286903297/ALMnRaAP_400x400.jpg"
  },
  {
    id: 3,
    title: 'DYNEX',
    role: 'Community Manager(2023-2024)',
    description:
      'Managed 24/7 community support during major announcements and releases. Developed quick-response protocols that improved issue resolution and member satisfaction.',
    image:"https://pbs.twimg.com/profile_images/1648647889109827585/JLmTtf5v_400x400.jpg"
  },
  {
    id: 4,
    title: 'Boxbet',
    role: 'Community Support Lead (2022-2024)',
    description:
      'Led community strategy for a major NFT mint, maintaining high excitement and transparency. Coordinated moderators to provide real-time updates and support to thousands of users.',
    image:"https://pbs.twimg.com/profile_images/1901911345953480704/lypbkwyF_400x400.jpg"
  },
  {
    id: 5,
    title: 'ALIEN SAUSAGE',
    role: 'Community Lead (2023-2024)',
    description:
      'Designed and executed an anti-FUD communication framework, reducing misinformation and boosting member confidence. Fostered a positive, hype-driven atmosphere throughout key project moments.',
    image:"https://pbs.twimg.com/profile_images/1871392723678216194/Eux38T7__400x400.jpg"
  },
  {
    id: 6,
    title: 'XSpaceSpy',
    role: 'Community Support Lead (2024-2025)',
    description:
      'Built and nurtured a strong ambassador/moderator team across multiple platforms. Streamlined communication flows, enabling consistent messaging and improved community sentiment.',
    image:"https://pbs.twimg.com/profile_images/1892439922843205632/-W7pySAh_400x400.jpg"
  },
];

const socials = {
  discord: 'https://discord.gg/users/936265284627595274',
  telegram: 'https://t.me/Therrockk',
  twitter: 'https://x.com/the_rrockk',
};

// --- 3. COMPONENTS ---
// All components are defined here
// ===================================

// --- Navbar Component ---
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="navbar-brand"
      >
        The Rock<span></span>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
            activeClass="active"
          >
            Bio
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
            activeClass="active"
          >
            What I Do
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// --- Hero (Bio) Component ---
const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="hero-title">
        Hi, I'm <span className="hero-name">{bio.name}</span>
      </h1>
      <h2 className="hero-subtitle">{bio.headline}</h2>
      <p className="hero-description">{bio.bio}</p>
      <Link
        to="projects"
        smooth={true}
        offset={-70}
        duration={500}
        className="hero-cta-button"
      >
        See My Work
      </Link>
    </motion.div>
  );
};

// --- Services Component ---
const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="services-section">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>What I Do</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, borderColor: 'var(--primary-color)' }}
          >
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Projects Component ---
const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="projects-section">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Projects I've Worked With</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(56, 189, 248, 0.2)' }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-logo"
            />

            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-role">{project.role}</p>
            <p className="project-card-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <ul className="socials-list">
        <li>
          <a
            href={socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
        </li>
        <li>
          <a
            href={socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </li>
        <li>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </li>

      </ul>
      <p className="footer-text">
        Let's connect! I'm always open to new opportunities and conversations.
      </p>
      <p className="footer-text">
        © {new Date().getFullYear()} {bio.name}. All rights reserved.
      </p>
    </footer>
  );
};

// --- 4. MAIN APP ---
// This brings all the components together
// ===================================

function App() {
  return (
    <div className="App">
      {/* This injects all the styles */}
      <style>{globalStyles}</style>

      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* The Footer is its own section for contact */}
        <Footer />  
      </main>
    </div>
  );
}

export default App;