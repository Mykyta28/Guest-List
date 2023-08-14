import React, {useState} from 'react';
import './UserForm.css'
import ErrorModal from '../modals/ErrorModal';
import InputMask from 'react-input-mask';

function UserForm (props) {

    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let phoneRegex = /^\d{10}$/;

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [error, setError] = useState();
    const [move, setMove] = useState(false);   
    

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    }

    const phoneHandler = (e) => {
        const phoneValue = e.target.value.replace(/\D/g, ''); 
        setPhone(phoneValue);

    }

    const phoneBlurHendler = () => {
        if (!phoneRegex.test(phone)) {
            setPhoneError("Invalid phone");
        } else {
            setPhoneError("");
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const emailBlurHandler = () => {
        if(!emailRegex.test(email)){
            setErrorEmail("invalid e-mail");
        }else{
            setErrorEmail("");
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (name.trim().length === 0 || lastName.trim().length === 0) {
            setError({
              title: 'An error occurred!',
              message: 'All fields are required'
            })
            return
          }

        setName("");
        setLastName("");
        setPhone("");
        setEmail("");

        props.onAddUser(name, lastName, phone, email);
    }

    const closeErrorModalWimdow = () => {
        setError(null);
    }
    
    return (
        <div className="container">
            { error && <ErrorModal title={error.title} message={error.message} onClose={closeErrorModalWimdow}/> } 
            <div className="text">
                Guest List
            </div>
            <div className='search-container'>
                <input className="search-input" type="text" placeholder="Search..." onChange={props.onSearch} />
                <div class="search"></div>
            </div>
            {/* <input type='text' placeholder='Search...' onChange={props.onSearch}/> */}
            <form onSubmit={submitForm}>
                <div className='form-row'>
                    <div className='input-data'>
                        <input type="text" value={name}  onChange={nameHandler}/>
                        <div className='underline'></div>
                        <label>First Name</label>
                    </div>
                    <div className='input-data'>
                        <input type="text" value={lastName} onChange={lastNameHandler}/>
                        <div className='underline'></div>
                        <label className='last-name'>Last Name</label>
                    </div>
                    <div className='input-data'>
                    <InputMask
                        mask="(999)-999-9999"
                        placeholder="(XXX)-XXX-XXXX"
                        value={phone}
                        onBlur={phoneBlurHendler}
                        onChange={phoneHandler}
                        >
                        {(inputProps) => (
                            <input
                            {...inputProps}
                            type="text"
                            />
                        )}
                        </InputMask>
                        {phoneError && 
                            <div className="invalid">
                                {phoneError}
                            </div>
                        }
                        <div className='underline'></div>
                        <label>Phone</label>
                    </div>
                    <div className='input-data'>
                        <input
                            type="email"
                            className="invalid:bg-red-200 invalid:text-red-800"
                            value={email}
                            onBlur={emailBlurHandler}
                            onChange={emailHandler}/>
                            {errorEmail && 
                                <div className="invalid">
                                    {errorEmail}
                                </div>
                            }
                            <div className='underline'></div>
                            <label>E-mail</label>
                    </div>
                </div>
                <button onClick={() => setMove(!move)} className='btn' type='submit'>Add</button>
            </form>
      </div>
    );
}

export default UserForm;