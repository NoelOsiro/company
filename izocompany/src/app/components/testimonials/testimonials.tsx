import TestHeader from './testHeader';
import SocialLinks from './testSocials';
import TestimonialSwiper from './testimon';

const testimonials = [
    {
        imageSrc: 'https://th.bing.com/th/id/OIP.jUimOSdvaTim3r94IPbf3QHaGE?rs=1&pid=ImgDetMain',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'John Doe',
        role: 'Marketing Manager',
    },
    {
        imageSrc: 'https://th.bing.com/th/id/OIP.jUimOSdvaTim3r94IPbf3QHaGE?rs=1&pid=ImgDetMain',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'Ajimon',
        role: 'CEO Of Marketing',
    },
    {
        imageSrc: 'https://th.bing.com/th/id/OIP.jUimOSdvaTim3r94IPbf3QHaGE?rs=1&pid=ImgDetMain',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: '',
        role: '',
    },
    {
        imageSrc: 'https://th.bing.com/th/id/OIP.jUimOSdvaTim3r94IPbf3QHaGE?rs=1&pid=ImgDetMain',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: 'Ajimon',
        role: 'CEO Of Marketing',
    },
];

const Testimonials = () => {
    return (
        <div
            className="bg-no-repeat bg-cover bg-center relative"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)' }}>
            <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
            <div className="min-h-screen flex justify-center">
                <div className="grid grid-cols-2 gap-4 items-center z-10">
                <div className="max-w-lg text-center sm:text-left">
                    <TestHeader />
                    <SocialLinks />
                </div> 
                    <TestimonialSwiper testimonials={testimonials} />      
                </div>
            </div> 
        </div>
    );
};

export default Testimonials;