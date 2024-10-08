import { Link } from "react-router-dom";

 

const Card = ({car}) => {
    return (
        <div className=" transition-transform transform hover:scale-105 card card-compact bg-base-100 shadow-xl">
            <figure><Link to={`/productDetails/${car._id}`}><img className="w-full rounded-lg" src={car.photo} alt="productIMG" />
            </Link></figure>
            <div className="card-body gr">
                <h2 className="card-title">{car.name}</h2>
                <p className=" font-bold">Brand: {car.brand}</p>
                <p className=" font-bold">Category: {car.category}</p>
                <p className=" font-bold">Total Sold: {car.sold} item</p>
                <p className="text-lg text-blue-600 font-bold">Price: ${car.price}</p>
                <Link to={`/productDetails/${car._id}`}><button className="btn btn-outline btn-sm border p-2 rounded-full border-blue-500 hover:text-white hover:bg-black hover:border-black">Show Details</button></Link>
            </div>
        </div>
    );
};

export default Card;