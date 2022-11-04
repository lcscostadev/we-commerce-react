import React, { useState } from 'react';
import './Modal.css';
import Navbar from './Navbar';

// O MODAL PRECISA ESTAR NO MESMO COMPONENTE DA NAVBAR


const Modal = ({ closeModal }) => {

    const [inputValue, setInputValue] = useState('');
    const [updated, setUpdated] = useState(inputValue);


    const handleInputChange = (e) => {
        let data = e.target.value;

        setInputValue(data);
        console.log(data);
    }

    const handleInputAdded = () => {
        setUpdated(inputValue);
    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button className='btnClose' onClick={() => closeModal(false)}>x</button>
                <div className="body">
                    <input className='inputBox' onChange={handleInputChange} type="text" value={inputValue} placeholder='Type your name here' />
                </div>
                <div className="bg-orange-300 py-2 px-3  text-white hover:bg-orange-500 transition-all duration-300 text-center">
                    <button onClick={handleInputAdded}>Sign up</button>
                </div>
                <div>Welcome {updated}</div>
            </div>
            {/* <Navbar inputValue={inputValue} updated={updated} /> */}
        </div>
    );
}

export default Modal;
