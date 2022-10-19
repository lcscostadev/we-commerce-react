import React from 'react';

const Button = (props) => {
    return (
        <button className='text-left py-2 px-2 font-bold text-md text-white  hover:border-white border m-2 border-[#0f131a] rounded'>
            {props.children}
        </button>
    );
}

export default Button;