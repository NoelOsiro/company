import TestHeader from './testHeader';
import SocialLinks from './testSocials';
import TestimonialSwiper from './testimon';

const testimonials = [
    {
        imageSrc: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.',
        author: 'John Doe',
        role: 'Marketing Manager',
    },
    {
        imageSrc: 'https://scontent.fccj2-2.fna.fbcdn.net/v/t31.18172-8/11262421_868445743194927_5746052500134236265_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=84hLHR-HqyMAX9c9k1y&_nc_ht=scontent.fccj2-2.fna&oh=00_AT_lIRJ3LcWYTagkUdWdrG_eb-iwHbQS_pPNAv7JDcg2Eg&oe=634DB7A3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.',
        author: 'Ajimon',
        role: 'CEO Of Marketing',
    },
    {
        imageSrc: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.',
        author: '',
        role: '',
    },
    {
        imageSrc: 'https://scontent.fccj2-2.fna.fbcdn.net/v/t31.18172-8/11262421_868445743194927_5746052500134236265_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=84hLHR-HqyMAX9c9k1y&_nc_ht=scontent.fccj2-2.fna&oh=00_AT_lIRJ3LcWYTagkUdWdrG_eb-iwHbQS_pPNAv7JDcg2Eg&oe=634DB7A3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda officiis sit amet itaque eveniet accusantium corporis tempora.',
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