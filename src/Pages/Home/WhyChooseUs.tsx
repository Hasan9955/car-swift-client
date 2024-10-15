import SectionTitle from "../../Components/sectionTitle";

 
const WhyChooseUs = () => {

    const whyChooseUsCards = [
        {
          id: 1,
          photo: "https://i.ibb.co.com/ZhvnLz7/1-Small-enough.png",
          title: "Reliable Vehicles",
          description: "Choose from a diverse range of vehicles to suit your needs, from compact cars to luxury."
        },
        {
          id: 2,
          photo: "https://www.gatwickcarandvanrental.com/wp-content/uploads/2018/11/2-Flexible.png",
          title: "Affordable Pricing",
          description: "Enjoy competitive rates with no hidden fees, offering you the best value for your rental."
        },
        {
          id: 3,
          photo: "https://i.ibb.co.com/cgrVrBv/customer-service-vector-5944065.jpg",
          title: "Customer Support",
          description: "Our dedicated team is available around the clock to assist with any inquiries or issues."
        },
        {
          id: 4,
          photo: "https://www.gatwickcarandvanrental.com/wp-content/uploads/2018/11/4-Breakdown.png",
          title: "Easy Booking Process",
          description: "Book your car in just a few clicks with our user-friendly online platform."
        },
        {
          id: 5,
          photo: "https://www.gatwickcarandvanrental.com/wp-content/uploads/2018/11/7-Safety.png",
          title: "Safety",
          description: "We offer flexible rental periods, whether you need a car for a few hours or several days."
        },
        {
          id: 6,
          photo: "https://www.gatwickcarandvanrental.com/wp-content/uploads/2018/11/6-Quality.png",
          title: "Quality Service",
          description: "We offer flexible rental periods, whether you need a car for a few hours or several days."
        },
      ];

      

    return (
        <div>
            <SectionTitle heading="Why Choose Us" subHeading="Your Trusted Choice for Hassle-Free Rentals"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 px-5 md:px-10 ">
                {
                    whyChooseUsCards.map(card => <div key={card.id} className="relative h-full flex flex-col p-4">
                        <img className="-top-5 left-3 absolute h-16 w-20" src={card.photo} alt="" />
                        <div className="border p-3 max-w-72 shadow-xl rounded-lg ">
                            <p className="mt-10 text-md md:text-xl font-bold">{card.title}</p>
                            <p className="text-sm mt-2">{card.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;