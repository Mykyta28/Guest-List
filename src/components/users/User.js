import './User.css';
import {motion} from "framer-motion";
import RemoveModal from '../modals/RemoveModal';
import { useState } from 'react';
import EditModal from '../modals/EditModal';
import InfoModal from '../modals/InfoModel';

function User (props) {

    const [remove, setRemove] = useState();
    const [edit, setEdit] = useState();
    const [showInfo, setShowInfo] = useState()

    const removeUserHandler = () => {
        props.onRemove(props.id);
    }

    const closeRemovalModalWimdow = () => {
        setRemove(false);
    }

    const confirmRemoving = (e) => {

        setRemove({
            title: 'User Removing',
            message: 'Are you sure you wnat to remove this user?'
          })
          return
    }

    const confirmEditing = () => {
        setEdit(true)
    }

    const closeEditForm = () => {
        setEdit(false);
    }

    const showInfoModal = () => {
        setShowInfo(true)
    }

    const hideInfoModal = () => {
        setShowInfo(false)
    }

    return(
        <>
            { remove && 
                <RemoveModal
                    title={remove.title}
                    message={remove.message}
                    onClose={closeRemovalModalWimdow}
                    onRemoveUsers={removeUserHandler}/> 
            }
            { edit &&   
                <EditModal 
                    userId={props.id}
                    initialName={props.firstName}
                    initialLastName={props.lastName}
                    onEditClose={closeEditForm}
                    onEdit={props.onEdit}   
                />
            }
            {showInfo && 
                <InfoModal
                    userId={props.id}
                    userName={props.firstName}
                    userLastName={props.lastName}
                    userPhone={props.phone}
                    userEmail={props.email}
                    onClose={hideInfoModal}
                />
            }
            <motion.li className="user-item"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            whileHover={{scale: 1.03, duration: 0.5}}>
                {props.children}
                <div className='btn-cell'>
                    <button className='btn-delete-style' type='button' onClick={confirmRemoving}>Remove</button>
                    <button className='btn-edit-style' type='submit' onClick={confirmEditing}>Edit</button>
                    <button className='btn-info-style' type='submit' onClick={showInfoModal}>More Info</button>
                </div>
            </motion.li>
        </>
    )
}

export default User;