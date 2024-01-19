import React from 'react';
import Image from 'next/Image';

const socialLinks = [
  { href: '#', icon: 'mdi mdi-linkedin', color: 'indigo-500' },
  { href: '#', icon: 'mdi mdi-twitter', color: 'blue-300' },
  { href: '#', icon: 'mdi mdi-instagram', color: 'orange-400' },
];

const teamMembers = [
  {
    name: 'Tranter Jaskulski',
    title: 'Founder & Specialist',
    image: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
  },
  {
    name: 'Denice Jagna',
    title: 'Tired & M. Specialist',
    image: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80',
  },
  {
    name: 'Kenji Milton',
    title: 'Team Member',
    image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80',
  },
  {
    name: 'Doesn\'t matter',
    title: 'Will be fired',
    image: 'https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80',
  },
];

const AboutTeams: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <span className="text-center font-bold my-10 opacity-30">
          MDI (npm i @mdi/font) required for all icons
          <hr className="my-4" />
          <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" className="text-blue-600">
            Convert to SASS
          </a>
        </span>

        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-8">
                  Meet the Team
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  With over 100 years of combined experience got a well-seasoned team at the helm.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image alt="navbar-image" className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src={member.image} />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {member.name}
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        {member.title}
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        {socialLinks.map((link, index) => (
                          <a key={index} href={link.href} className={`flex rounded-full hover:bg-${link.color} h-10 w-10`}>
                            <i className={`${link.icon} mx-auto mt-2`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeams;
