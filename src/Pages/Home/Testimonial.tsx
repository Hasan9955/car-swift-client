// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation'; 
import { Navigation } from 'swiper/modules';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../Components/sectionTitle';


const Testimonial = () => {


    const reviews = [
        {
            id: 1,
            photo: "https://i.ibb.co.com/FxbJFg1/Ellipse-1.png",
            name: "John Doe",
            date: "2024-09-15",
            review: "The car rental process was smooth, and the car was in excellent condition. I was really impressed with the customer service!",
            ratingValue: 4.8
        },
        {
            id: 2,
            photo: "https://i.ibb.co.com/d52Cr6W/Ellipse-1-1.png",
            name: "Sarah Lee",
            date: "2024-08-22",
            review: "Affordable prices and a great selection of cars. I rented a car for a weekend trip, and it was perfect. Highly recommend!",
            ratingValue: 4.5
        },
        {
            id: 3,
            photo: "https://i.ibb.co.com/JntWWGL/Ellipse-1-2.png",
            name: "Michael Brown",
            date: "2024-10-05",
            review: "The booking system was user-friendly, and I had no issues during my rental period. Would definitely use this service again.",
            ratingValue: 4.7
        },
        {
            id: 4,
            photo: "https://i.ibb.co.com/kDytKCM/Ellipse-1-3.png",
            name: "Emily Clark",
            date: "2024-07-30",
            review: "Fantastic service! The staff was helpful, and the car was clean and well-maintained. Made my vacation much more enjoyable.",
            ratingValue: 5.0
        },
        {
            id: 5,
            photo: "https://i.ibb.co.com/RpMbHyH/Rectangle-1-2.png",
            name: "David Johnson",
            date: "2024-09-10",
            review: "Great experience overall. The car I rented was in perfect condition, and the pickup and return process was quick and easy.",
            ratingValue: 4.6
        }
    ];




    return (
        <div className="mb-20">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></SectionTitle>

            <div>

                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews?.map(review => <SwiperSlide key={review.id}>
                            <div className="my-16 mx-24 flex flex-col justify-center items-center text-center gap-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.ratingValue}
                                    readOnly
                                />
                                <img className='size-16 rounded-full' src={review.photo} alt="" />
                                <p className="max-w-2xl mx-auto">{review.review}</p>
                                <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;