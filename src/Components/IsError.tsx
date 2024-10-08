import { Link } from "react-router-dom";

 
const IsError = () => {
    return (
        <div className="flex justify-center items-center flex-col space-y-4 mt-40 ">
            <p className="text-red-500 text-center text-xl md:text-3xl">An error is going on!!!</p>
            <Link to={'/'}><button className="btn bg-gradient text-white">Go Home</button></Link>
        </div> 
    );
};

export default IsError;