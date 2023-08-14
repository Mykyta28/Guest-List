import './RemoveModal.css';
import {motion} from "framer-motion";

function RemoveModal (props) {

    return (
        <section>
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
                    <div className='btn-remove-cell'>
                        <motion.button onClick={props.onClose} type='button'
                        whileHover={{backgroundColor: "rgb(81, 158, 220)"}}>Cancel</motion.button>
                        <motion.button onClick={props.onRemoveUsers} type='button'
                        whileHover={{backgroundColor: "rgb(81, 158, 220)"}}>Confirm</motion.button>
                    </div>
                </footer>
            </motion.div>
        </section>
    )
 }

export default RemoveModal;