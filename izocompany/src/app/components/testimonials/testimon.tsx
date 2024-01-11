'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Iprops {
    imageSrc: string;
    content: string;
    author: string;
    role: string;
}

const Testimonial: React.FC<Iprops> = (props:Iprops) => {
    return (
        <blockquote className="text-left ">
            <div className="relative">
                <div className="relative">
                    <img
                        src={props.imageSrc}
                        alt="aji"
                        className="object-cover w-full h-60 mx-auto rounded-t-2xl"
                    />
                    <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                </div>
            </div>
            <div className="relative m-5 p-5">
                <svg className="absolute left-0 w-6  fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" /></svg>
                <p className="text-gray-100 text-xl px-5">
                    {props.content}
                </p>
                <svg className="absolute right-0  w-6 fill-indigo-500" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" /></svg>
                <div className="text-sm mt-5 mx-5">
                    <p className="font-medium text-white">{props.author}</p>
                    <p className="mt-1 text-gray-300">{props.role} </p>
                </div>
            </div>
        </blockquote>
    );
};
interface ITest {
    imageSrc: string;
    content: string;
    author: string;
    role: string;
}
interface TestimonialSwiperProps {
    testimonials: ITest[];
}
const TestimonialSwiper: React.FC<TestimonialSwiperProps> = ({ testimonials }) => {
    return (
        <div className="mx-0 max-w-xl flex rounded-2xl bg-indigo-700">
            <Swiper
                slidesPerView={1}
                spaceBetween={8}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="flex-col flex  self-center">
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Testimonial imageSrc={''} content={''} author={''} role={''}/>
                    </SwiperSlide>
                ))}

                <div className="mt-12 swiper-pagination hidden"></div>
            </Swiper>
        </div>
    );
};
export default TestimonialSwiper;