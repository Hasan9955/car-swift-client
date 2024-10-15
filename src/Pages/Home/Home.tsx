import Banner from "./Banner"; 
import Contact from "./Contact";
import FeaturedCars from "./FeaturedCars";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedCars />
            <WhyChooseUs />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;