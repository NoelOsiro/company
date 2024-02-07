import { featureIcons, featureItems } from "@/data/main/mainPage";

export default function FeatureSection() {
    // Main section containing features
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    {/* Left column with feature items */}
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                Explore our <br /> awesome services
                            </h1>
                            <div className="mt-2">
                                {/* Horizontal line decoration */}
                                <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                            </div>
                        </div>
                        
                        {/* Mapping through feature items */}
                        {featureItems.map((item, index) => (
                            <div key={index} className="md:flex md:items-start md:-mx-4">
                                {/* Icon */}
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    {item.icon}
                                </span>

                                {/* Feature details */}
                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                                        {item.title}
                                    </h1>
                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right column with feature image (hidden on small screens) */}
                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img
                            alt='feature image'
                            className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
                        />
                    </div>
                </div>

                {/* Horizontal line separator */}
                <hr className="border-gray-200 my-12 dark:border-gray-700" />

                {/* Grid of feature icons */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    {featureIcons.map((icon, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1`}
                        >
                            {icon.svg}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
