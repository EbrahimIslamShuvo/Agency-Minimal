import React from 'react';

const SubHeader = ({name}) => {
    return (
        <div>
            <div className="dm-sans-font text-[#8D448B] md:text-[18px] text-[16px] font-bold">
                {name}
            </div>
        </div>
    );
};

export default SubHeader;