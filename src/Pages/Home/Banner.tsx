


const Banner = () => {
    return (
        <div className="video-container h-64 sm:h-96 md:h-[400px] lg:h-[500px]">
            <video playsInline autoPlay loop muted preload="auto" className="w-full h-full object-cover">
                <source src="https://www.lxvcars.com/wp-content/uploads/2024/06/LXV-CARS-v6.3.mp4#t=5" type="video/mp4" /> 
            </video>
            {/* <video playsInline autoPlay loop muted className="w-full h-full object-cover">
                <source src="https://duruthemes.com/demo/html/renax/video.mp4" type="video/mp4" />
                <source src="https://duruthemes.com/demo/html/renax/video.webm" type="video/webm" />
            </video> */}
        </div>
    );
};

export default Banner;