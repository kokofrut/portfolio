import { motion } from 'framer-motion'
import TypingAnimation from './Typing'


function Hello() {

    return (
        <motion.div className="title-wr">
            <motion.div className="title-cnt">
                <TypingAnimation />
            </motion.div>
        </motion.div>
    )
}

export default Hello