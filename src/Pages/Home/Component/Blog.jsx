import React from 'react';
import SubHeader from '../../../Component/SubHeader';
import Header from '../../../Component/Header';
import imageOne from '../../../assets/blog1.jpg'
import imageTwo from '../../../assets/blog2.jpg'
import imageThree from '../../../assets/blog3.jpg'
import BlogCard from '../../../Component/BlogCard';

const Blog = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-10">
                <SubHeader name={"Quality features"}></SubHeader>
                <Header name={"Tutorials that people love most"}></Header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mt-10 md:w-7/12 w-9/12 mx-auto">
                    <BlogCard image={imageOne} title={"How to work with prototype design with adobe xd featuring tools"} comment={"22"}></BlogCard>
                    <BlogCard image={imageTwo} title={"Create multiple artboard by using figma prototyping development"} comment={"15"}></BlogCard>
                    <BlogCard image={imageThree} title={"Convert your web layout theming easily with sketch zeplin extension"} comment={"18"}></BlogCard>
                </div>
            </div>
        </div>
    );
};

export default Blog;