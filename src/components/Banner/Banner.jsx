const Banner = () => {
    return (
        <div className="p-5 lg:p-32 text-center banner w-[98%] mx-auto text-white md:rounded-2xl space-y-6 my-2">
            <h1 className="text-2xl md:text-5xl font-bold max-w-[897px] mx-auto"><span className="text-primary-color">Discover</span> an exceptional cooking class tailored for you!</h1>
            <p className="text-sm md:text-lg md:font-normal max-w-[933px] mx-auto">Embark on a Journey to Wellness with <span className="text-primary-color">HealthyBite </span>: Your Destination for Wholesome Recipes that Nourish Body and Soul. Discover the Joy of Eating Well, Every Bite Counts!</p>
            <div className="space-x-4">
                <button className="btn font-semibold bg-primary-color px-5 border-none outline-none rounded-[50px]">Explore Now</button>
                <button className="btn font-semibold px-5 rounded-[50px] bg-transparent text-white hover:text-black">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;