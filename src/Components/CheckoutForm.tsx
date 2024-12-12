/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useCreatePaymentIntentMutation, useGetSingleBookingQuery, useUpdateBookingMutation } from "../redux/features/bookings/bookingsApi";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ price, id, status }: { price: number, id: string, status: string }) => {

  const user = useAppSelector(selectCurrentUser);
  const [isError, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [updateBooking] = useUpdateBookingMutation();
  const { data } = useGetSingleBookingQuery(id);
  const bookingStatus = data?.data?.status || status; 

  
  useEffect(() => {
    const data = {
      price
    }
    const fun = async () => {
      const res = await createPaymentIntent(data) 
      setClientSecret(res.data.data.clientSecret)
    }
    fun();
  }, [createPaymentIntent, price])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('')
    setIsLoading(true)

    if (!stripe || !elements) {
      setIsLoading(false)
      return
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      setIsLoading(false)
      return
    }

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });


    if (error) {
      // console.log('[error]', error);
      setError(error.message || 'An unknown error occurred')
      setIsLoading(false)
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || 'anonymous',
            email: user?.userEmail || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      setIsLoading(false)
      setError(confirmError.message || 'An unknown error occurred')
    }
    else {
      // console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transactionId: ", paymentIntent.id);
        setTransactionId(paymentIntent.id)

        const updateData = {
          id,
          data: {
            transactionId: paymentIntent.id,
            status: 'PAID'
          }
        }

        const res = await updateBooking(updateData);
        if (res.data.success) {
          // console.log(res);
          setIsLoading(false)
          const payload = res.data.data 
          navigate(`/user-dashboard/success`, { state: payload })
        }
      }
    }


  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-xl md:mx-auto mx-2 my-20 bg-purple-200 p-2 md:p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold">Payment Details</h2>
        <h2 className="text-xl font-semibold mb-6">Total Cost: ${price}</h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Card details</label>
          <CardElement
            className={`p-3 border rounded-md w-full focus:outline-none focus:border-blue-500 bg-[#F7F9FC] shadow-sm placeholder-gray-400 
              ${bookingStatus === 'PAID' ? 'opacity-50 pointer-events-none' : ''}`}
            options={{
              style: {
                base: {
                  fontSize: '18px',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          {/* <button className="btn btn-primary mt-4 w-16 uppercase" type="submit" disabled={!stripe || !clientSecret || status === 'paid'}> */}
          {
            isLoading ? <div className="flex justify-center items-center mt-4">
              <span className="loading loading-bars loading-lg"></span>
            </div> : <button className={`btn ${bookingStatus !== 'PAID' && 'bg-gradient'} min-w-36 text-white mt-4 w-16 uppercase`} type="submit" disabled={!stripe || !clientSecret || bookingStatus === 'PAID'}>
            Pay Now
          </button>
          } 
          {bookingStatus === 'PAID' && <p className="text-red-600 font-bold mt-4 uppercase">This product is already paid!!!</p>}
          {isError && <p className="text-red-600 font-bold mt-4 uppercase">{isError}</p>}
          {transactionId && <p className="text-center text-md text-green-700 font-bold  mt-4">Payment Successful!!! <br /> <br /> Transaction ID: {transactionId}</p>}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;