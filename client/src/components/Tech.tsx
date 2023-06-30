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
            <motion.div className='outer-container' >
                <div className='cards-wr'>
                    <div className='cards-title'>
                        <p>Frontend</p>
                    </div>
                    <motion.div className='cards-container'>
                        <div className='skill-card'>
                            <img src={typescriptic} />
                            <p>Typescript</p>
                        </div>
                        <div className='skill-card'>
                            <img src={reactic} />
                            <p>React</p>
                        </div>
                        <div className='skill-card'>
                            <img src={muiic} />
                            <p>Material UI</p>
                        </div>
                        <div className='skill-card'>
                            <img src={figmaic} />
                            <p>Figma</p>
                        </div>
                        <div className='skill-card'>
                            <img src={reduxic} />
                            <p>Redux</p>
                        </div>
                        <div className='skill-card'>
                            <img src={sassic} />
                            <p>Saas</p>
                        </div>
                    </motion.div>
                </div>
                <div className='cards-wr'>
                    <div className='cards-title'>
                        <p>Backend</p>
                    </div>
                    <motion.div className='cards-container'>
                        <div className='skill-card'>
                            <img src={nodeic} />
                            <p>Node JS</p>
                        </div>
                        <div className='skill-card'>
                            <img src={nestic} />
                            <p>NestJS</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Tech