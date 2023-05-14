import React from 'react';
import img1 from '../../../../../assets/images/banner/1.jpg'
import img2 from '../../../../../assets/images/banner/2.jpg'
import img3 from '../../../../../assets/images/banner/3.jpg'
import img4 from '../../../../../assets/images/banner/4.jpg'
import img5 from '../../../../../assets/images/banner/5.jpg'
import img6 from '../../../../../assets/images/banner/6.jpg'

const Bannar = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl
                 bg-gradient-to-r 
                from-[#151515] to-[rgba(21, 21, 21, 0)]  top-0  bottom-0  w-full">
                    <div className='space-y-7 w-1/2 text-white pl-24'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle  text-white bg-orange-500 mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle  text-white bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl
                 bg-gradient-to-r 
                from-[#151515] to-[rgba(21, 21, 21, 0)]  top-0  bottom-0  w-full">
                    <div className='space-y-7 w-1/2 text-white pl-24'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle text-white bg-orange-500  mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white bg-orange-500 ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl
                 bg-gradient-to-r 
                from-[#151515] to-[rgba(21, 21, 21, 0)]  top-0  bottom-0  w-full">
                    <div className='space-y-7 w-1/2 text-white pl-24'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  text-white bg-orange-500  mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-orange-500 ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl
                 bg-gradient-to-r 
                from-[#151515] to-[rgba(21, 21, 21, 0)]  top-0  bottom-0  w-full">
                    <div className='space-y-7 w-1/2 text-white pl-24'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  text-white bg-orange-500  mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-orange-500 ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl
                 bg-gradient-to-r 
                from-[#151515] to-[rgba(21, 21, 21, 0)]  top-0  bottom-0  w-full">
                    <div className='space-y-7 w-1/2 text-white pl-24'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  text-white bg-orange-500 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl
                 bg-gradient-to-r 
                from-[#151515] to-[rgba(21, 21, 21, 0)]  top-0  bottom-0  w-full">
                    <div className='space-y-7 w-1/2 text-white pl-24'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error ">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  text-white bg-orange-500 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-orange-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;