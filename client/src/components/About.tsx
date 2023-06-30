import '../scss/about.scss'
import { motion } from 'framer-motion'
import me_image from '../assets/me.png'
import back_image from '../assets/layered-peaks-haikei3.svg'
import pdf_image from '../assets/pdf-icon.png'
function About() {
    const handlePDF = () => {
        const pdfUrl = '/cv.pdf';
        window.open(pdfUrl, '_blank');
    };
    return (
        <motion.div className="a-wr" id='about'>
            <motion.div className="a-cnt-1">
                <div className="a-cnt-line">

                    <motion.div
                        whileInView={{
                            transform: 'translateX(0)',
                            opacity: 1,
                            transition: { duration: 1 }
                        }}
                        className="a-cnt">
                        <p>I am</p>
                        <p className="a-text">Frontend React Developer</p>
                    </motion.div>
                    <motion.div
                        whileInView={{
                            transform: 'translateX(0)',
                            opacity: 1,
                            transition: { duration: 1 }
                        }}
                        className="a-cnt">
                        <p>My CV</p>
                        <button className='btn-pdf' onClick={handlePDF}>
                            {/* <PictureAsPdfIcon sx={{ width: '200px', height: '200px' }} /> */}
                            <img src={pdf_image} style={{ width: '100px', height: '100px'}}/>
                        </button>
                    </motion.div>
                </div>

            </motion.div>
            <div className="a-cnt-2">
                <motion.div className='a-img-cnt'>
                    <motion.img
                        initial={{ transform: 'translateX(100%)' }}
                        whileInView={{ transform: 'translateX(0)' }}
                        transition={{ duration: 0.6 }}
                        alt='me first'
                        src={me_image} />
                    <motion.img
                        initial={{ transform: 'translateX(100%)' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileInView={{ transform: 'translateX(0)' }}
                        alt='me second'
                        src={me_image} />
                    <motion.img
                        initial={{ transform: 'translateX(100%)' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileInView={{ transform: 'translateX(0)' }}
                        alt='me third'
                        src={me_image} />
                </motion.div>
            </div>
            <motion.img className="a-bg-image" loading='lazy' src={back_image} />
        </motion.div>
    )
}

export default About