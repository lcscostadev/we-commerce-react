import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {

    const [inputValue, setInputValue] = useState('');

    // use Trim for no spaces and max and min value
    // precisar de uuma funÇão que quando acionada mude o valor do button sign in para o nome do usuario

    const handleInputChange = (e) => {
        let data = e.target.value;

        setInputValue(data);
        console.log(data);
    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button className='btnClose' onClick={() => closeModal(false)}>x</button>
                <div className="body">
                    <input className='inputBox' onChange={handleInputChange} type="text" value={inputValue} placeholder='Type your name here' />
                </div>
                <div className="bg-orange-300 py-2 px-3  text-white hover:bg-orange-500 transition-all duration-300 text-center">
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;