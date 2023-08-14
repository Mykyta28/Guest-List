import './EditModal.css';
import {motion} from "framer-motion";
import { useState } from 'react';

function EditModal (props) {

    const [updateName, setUpdateName] = useState(props.initialName);
    const [updateLastName, setUpdateLastName] = useState(props.initialLastName);

    const updateNameHandler = (e) => {
        setUpdateName(e.target.value);
    }

    const updateLastNameHandler = (e) => {
        setUpdateLastName(e.target.value);
    }

    const submitEditForm = (e) => {
        e.preventDefault();

        if (!updateName.trim()|| !updateLastName.trim()) {
            return;
        }

        props.onEdit(props.userId, updateName, updateLastName);
        props.onEditClose();
    }

    return(
        <>
            <div className='edit-modal-backdrop'></div>
            <motion.div className="edit-container"
            initial={{x: -200, y: -300}}
            animate={{y: props.move ? 150 : -150}}
            transition={{type: "spring",  bounce: .5}}>
                <div className="edit-text">
                    Edit User
                </div>
                <form onSubmit={submitEditForm}>
                    <div className='edit-form-row'>
                        <div className='edit-input-data'>
                            <input type="edit-text" value={updateName} onChange={updateNameHandler} required/>
                            <div className='edit-underline'></div>
                            <label>First Name</label>
                        </div>
                        <div className='edit-input-data'>
                            <input type="edit-text" value={updateLastName} onChange={updateLastNameHandler} required/>
                            <div className='edit-underline'></div>
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className='edit-btn-cell'>
                        <button className='edit-btn' type='submit'>Save</button>
                        <button onClick={props.onEditClose} className='edit-btn' type='button'>Cancel</button>
                    </div>
                </form>
        </motion.div>
      </>
    );
}

export default EditModal;