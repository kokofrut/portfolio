import { motion } from 'framer-motion'
import '../scss/tech.scss'
import typescriptic from '/icons/icons8-typescript.svg'
import muiic from '/icons/icons8-material-ui.svg'
import figmaic from '/icons/icons8-figma.svg'
import reduxic from '/icons/icons8-redux.svg'
import reactic from '/icons/icons8-react.svg'
import nestic from '/icons/icons8-nestjs.svg'
import sassic from '/icons/icons8-sass.svg'
import nodeic from '/icons/icons8-nodejs.svg'
function Tech() {
    return (
        <div className="t-wr" id="technologies">
            <div className="title">
                <p>Technologies</p>
            </div>
            <motion.div className='outer-container' >
                <div className='cards-wr'>
                    <div className='cards-title'>
                        <p>Frontend</p>
                    </div>
                    <motion.div className='cards-container'>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={typescriptic} />
                            <p>Typescript</p>
                        </motion.div>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={reactic} />
                            <p>React</p>
                        </motion.div>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={muiic} />
                            <p>Material UI</p>
                        </motion.div>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={figmaic} />
                            <p>Figma</p>
                        </motion.div>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={reduxic} />
                            <p>Redux</p>
                        </motion.div>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={sassic} />
                            <p>Saas</p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='cards-wr'>
                    <div className='cards-title'>
                        <p>Backend</p>
                    </div>
                    <motion.div className='cards-container'>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={nodeic} />
                            <p>Node JS</p>
                        </motion.div>
                        <motion.div className='skill-card' whileInView={{ opacity: 1, transition: { duration: 1 } }}>
                            <img src={nestic} />
                            <p>NestJS</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Tech