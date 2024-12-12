import { useLocation } from "react-router-dom";  
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';
import logo from '../../../assets/Eo-circle-green-white-checkmark-svg.png';
import { toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa6";

const Success = () => {

    const location = useLocation();
    const paymentData = location.state;
    const { width, height } = useWindowSize(); 
  
    

    const handleCopy = async () => {
      try {
        if (paymentData?.transactionId) {
          await navigator.clipboard.writeText(paymentData.transactionId);
          toast.success('Transaction ID copied! ✅');
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error('Failed to copy!');
      }
    };
  
    return (
      <>
        <Confetti width={width} height={height} />
        <div className="flex flex-col justify-center items-center my-20">
          <img className="w-24 md:w-32" src={logo} alt="Success Logo" />
          <p className="text-3xl font-bold">Your payment was successful!!!</p>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-xl font-bold">Your Transaction ID:  <span className="bg-gray-200 p-1 border rounded-lg">{paymentData?.transactionId}</span></p>
            <button 
            title="Copy!"
              onClick={handleCopy} 
              className="btn btn-sm bg-gray-200"
            >
              <FaRegCopy />
            </button>
          </div> 
        </div>
      </>
    );
  };
  
  export default Success;