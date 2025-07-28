import React from 'react';
import { TfiCommentAlt } from "react-icons/tfi";

const BlogCard = ({image , title, comment}) => {
    return (
        <div>
            <div className="rounded-lg shadow-lg flex flex-col gap-3">
                <img src={image} alt="" />
                <div className="px-6 py-3 flex flex-col gap-2">
                    <h1 className='dm-sans-font text-[16px] font-semibold'>{title}</h1>
                    <div className="dm-sans-font flex items-center gap-2 text-gray-500">
                        <TfiCommentAlt />
                        <p>{comment} comments</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;