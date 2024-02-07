import { aboutHeaderText } from '@/data/about/aboutPage';
import React from 'react';



const AboutHeader: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-row sm:flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="w-full items-center mx-auto max-w-screen-lg">
        <div className="group w-full sm:grid  sm:grid-cols-2">
          <div className='px-2'>
            <div className="sm:pr-12">
              <p className="peer mb-6 text-gray-400 ">
                {aboutHeaderText.mainParagraph1}
              </p>
              <p className="mb-6 text-gray-400 hidden sm:block">
                {aboutHeaderText.mainParagraph2}
              </p>
              <h3 className="mb-4 font-semibold text-xl text-gray-400">{aboutHeaderText.subheading}</h3>
              <ul role="list" className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
                {aboutHeaderText.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:right-0 before:rounded-lg before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 w-4/6 py-10 px-8 sm:px-12 sm:py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all ">
              <span className="block mb-10 font-bold group-hover:text-orange-300">{aboutHeaderText.sectionHeading}</span>
              <h2 className="text-white font-bold text-3xl">
                {aboutHeaderText.sectionDescription}
              </h2>
            </div>
            <a className="font-bold text-sm block sm:flex mt-2 mb-8 items-center gap-2 pl-4 sm:pl-0" href="">
              <span>{aboutHeaderText.moreAboutUsLink}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div className="rounded-xl overflow-hidden">
              <img src={aboutHeaderText.aboutHeaderImageSrc} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
