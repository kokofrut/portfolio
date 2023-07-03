import '../scss/projects.scss'
import { motion } from 'framer-motion'
import top_image from '../assets/stepper2.svg'
import editor from '../assets/editor.webp'
import under_construction from '../assets/und-cnst.webp'
import github from '../assets/github-mark-white.svg'
import website from '../assets/website.png'
function Projects() {
  return (
    <div id='projects' className="p-wr">
      <div className="title">
        <p >Projects</p>
      </div>
      <div className="projects-container">
        <div className="project-container" id='DIVE' data-odd="true">
          <div className="project-card">
            <motion.img
              whileInView={{
                transform: 'translateY(0)',
                opacity: 1,
                transition: { duration: 1 }
              }}
              loading='lazy'
              src={editor} />
          </div>
          <motion.section
            className='text-section'
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}>
            <div className="project-text">
              <h1>Image Editor</h1>
              <p>This is the image editor that has functionality for editing photos. The range of available edit options is not much but non the less enough for quick editing. </p>
              <p>The project was completely designed by me but I had a little bit of help on basicaly editor from my uni mate. </p>
            </div>
            <div className="project-socials" data-placement="right">
              <div className="social-btn" onClick={() => { window.open('https://github.com/kokofrut/webster_front', '_blank') }}>
                <p>CODE</p>
                <img src={github} alt="githubLogo" />
              </div>
              <div className="social-btn" onClick={() => { window.open('https://webster-front.vercel.app', '_blank') }}>
                <p>VISIT</p>
                <img src={website} alt="websiteLogo" />
              </div>
            </div>
          </motion.section>
        </div>
        <div className="project-container" data-odd="false">
          <motion.section className='text-section'
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}>
            <div className="project-text">
              <h1>Asteroids Near Earth</h1>
              <p>Discover the captivating world of near-Earth asteroids on this website!</p>
              <p>The website is under development and will be soon available.</p>
              <p>When you will visit it, you would be able to see NEOs in 3d models and a little bit of information about them.</p>
            </div>
            <div className="project-socials">
              <div className="social-btn" onClick={() => { window.open('https://github.com/kokofrut/portfolio', '_blank') }}>
                <p>CODE</p>
                <img src={github} alt="githubLogo" />
              </div>
            </div>
          </motion.section>
          <div className="project-card">
            <motion.img
              whileInView={{
                transform: 'translateY(0)',
                opacity: 1,
                transition: { duration: 1 }
              }}
              loading='lazy'
              src={under_construction} />
          </div>
        </div>
      </div>
      <img className="a-bg-image" loading='lazy' src={top_image} />
    </div>
  )
}

export default Projects