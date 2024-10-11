import { Link } from "react-router-dom";
import { TCar } from "../Interface/Index";
import { TbBrightnessAuto } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";



const Card = ({ car }: { car: TCar }) => {
    return (
        <>
            <div className="max-w-sm rounded-lg shadow-md overflow-hidden bg-white">
                <img
                    className="w-full h-48 object-cover"
                    src={car.photo}
                    alt="Car image"
                />
                <div className="p-4">
                    <h5 className="mb-1">{car.name}</h5>
                    <p className="text-sm text-gray-500 mb-3">New model</p>
                    <hr className="mb-2"/>
                    <div className="flex justify-between items-end">
                    <div>
                    <div className="flex items-baseline mb-4">
                        <span className="text-purple-600 font-bold text-xl">${car.pricePerHour}</span>
                        <span className="text-sm text-gray-500 ml-1">USD/hour</span>
                    </div>
                    <p className="text-gray-500 mb-4">Color: {car.color}</p>
                    <p className="text-gray-500 mb-4">$198 Total</p>
                    </div>
                    <Link to='/createBooking' state={car}><button className="btn rounded-full bg-gradient text-white">Book now</button></Link>
                    </div>
                </div>
                <div className="px-4 py-3 flex justify-between items-center bg-gray-50">
                    <div className="flex space-x-4">
                        <span className="flex items-center space-x-1">
                            <i className="material-icons"><TbBrightnessAuto /></i>
                            <p className="text-sm">Auto</p>
                        </span>
                        {
                            car.isElectric ? <span className="flex items-center space-x-1">
                            <i className="material-icons"><GiElectric /></i>
                            <p className="text-sm">Electric</p>
                        </span> : <span className="flex items-center space-x-1">
                            <i className="material-icons"><FaDroplet /></i>
                            <p className="text-sm">Petrol</p>
                        </span>
                        } 
                    </div>
                    <button className="text-purple-600 text-sm font-semibold">+ info</button>
                </div>
            </div>

            {/* <div className=" transition-transform transform hover:scale-105 card card-compact bg-base-100 shadow-xl">
            <figure><Link to={`/productDetails/${car._id}`}><img className="w-full rounded-lg" src={car.photo} alt="productIMG" />
            </Link></figure>
            <div className="card-body gr">
            <h2 className="card-title">{car.name}</h2>
            <p className=" font-bold">Color: {car.color}</p>
            <p className=" font-bold">Description: {car.description}</p>
                <p className=" font-bold">{car.isElectric ? 'Electric' : 'Petrol'}</p>
                <p className="text-lg text-blue-600 font-bold">Price: ${car.pricePerHour}</p>
                <Link to={`/productDetails/${car._id}`}><button className="btn btn-outline btn-sm border p-2 rounded-full border-blue-500 hover:text-white hover:bg-black hover:border-black">Show Details</button></Link>
            </div>
        </div> */}
        </>

    );
};

export default Card;