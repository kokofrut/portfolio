import { motion } from 'framer-motion'
import '../scss/header.scss'
function Header() {
    return (
        <motion.header className="h-wr">
            <motion.div className='h-ul'
                initial={{transform: 'translateY(-50%)'}}
                animate={{ transform: 'translateY(0)'}}
                transition={{ duration: 1}}
            >
                <motion.a href="#about">
                    <motion.p animate={{ opacity: [0, 1] }}><>About</></motion.p>
                </motion.a>
                <motion.a href="#technologies">
                    <motion.p animate={{ opacity: [0, 1] }}><>Technologies</></motion.p>
                </motion.a>
                <motion.a href="#projects">
                    <motion.p animate={{ opacity: [0, 1] }}><>Projects</></motion.p>
                </motion.a>
                <motion.a href="#contact">
                    <motion.p animate={{ opacity: [0, 1] }}>Contact Me</motion.p>
                </motion.a>
            </motion.div>
        </motion.header>
    )
}

export default Header