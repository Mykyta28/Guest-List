import './ErrorModal.css';
import {motion} from "framer-motion";

function ErrorModal (props) {

    return (
        <section>
            <div className='modalBackdrop' onClick={props.onClose}/>
            <motion.div className='modal-container' 
            initial={{x: -200, y: -300}}
            animate={{y: props.move ? 150 : -150}}
            transition={{type: "spring",  bounce: .5}}>
                <header>
                    <p className='title'>{props.title}</p>
                </header>
                <div className='error-msg'>
                    <p>{props.message}</p>
                </div>
                <footer className='modal-close'>
                    <motion.button onClick={props.onClose} type='button'
                    whileHover={{backgroundColor: "rgb(81, 158, 220)"}}>Close</motion.button>
                </footer>
            </motion.div>
        </section>
    )
 }

export default ErrorModal;