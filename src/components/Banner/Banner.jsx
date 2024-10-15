import BannerImage from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen rounded-3xl mt-5 lg:mt-10"
            style={{
                background: `linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(${BannerImage}) lightgray 0px -18.896px / 100% 123.31% `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl">
                    <h1 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-bold"> Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 opacity-90">
                        Master new techniques, explore fresh ingredients, and create unforgettable dishes with expert guidance. Whether you&apos;re a beginner or a pro, this class is designed just for you!
                    </p>
                    <div className='flex justify-center items-center gap-6'>
                        <button className="btn rounded-full bg-[#0BE58A] hover:bg-[#0BE58A] text-black px-6 border-0">Explore Now</button>
                        <button className="btn rounded-full bg-transparent border border-white text-white px-6 hover:bg-transparent hover:border-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;