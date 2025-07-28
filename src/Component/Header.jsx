import React from 'react';

const Header = ({name}) => {
    return (
        <div>
            <h1 className='dm-sans-font md:text-[33px] text-[25px] font-bold'>{name}</h1>
        </div>
    );
};

export default Header;