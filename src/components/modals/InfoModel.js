import './InfoModel.css'
import {motion} from "framer-motion";

function InfoModal (props) {
    return (
        <>
            <div onClick={props.onClose} className='info-modal-backdrop'></div>
                <motion.div className="info"
                initial={{x: -200, y: -300}}
                animate={{y: props.move ? 150 : -150}}
                transition={{type: "spring",  bounce: .5}}>
                    <div className="title-style">
                        Guest Info
                    </div>
                    <div className='info-conteiner'>
                        <p className='info-style'>First Name: <span style={{color: "black"}}>{props.userName}</span></p>
                        <p className='info-style'>Last Name: <span style={{color: "black"}}>{props.userLastName}</span></p>
                        <p className='info-style'>Phone: <span style={{color: "black"}}>{props.userPhone}</span></p>
                        <p className='info-style'>Email: <span style={{color: "black"}}>{props.userEmail}</span></p>
                    </div>
                    <div className='btn-close-cell'>
                        <button className='close-info' onClick={props.onClose} type='button'>Close</button>
                    </div>
                </motion.div>
    </>
    )
    
}

export default InfoModal;