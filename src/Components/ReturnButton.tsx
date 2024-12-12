import { useState } from 'react';
import { TBookings } from '../Interface/Index';
import ReturnModel from './ReturnModel';
import { TbTruckReturn } from 'react-icons/tb';

const ReturnButton = ({bookingData, className}: {bookingData: TBookings; className?: string}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <button onClick={openModal} className={className}>
            <TbTruckReturn className='text-lg' /> Return
            </button>
            <div>
                {isModalOpen && bookingData && (
                    <ReturnModel
                        bookingData={bookingData}
                        closeModal={closeModal}
                    ></ReturnModel>
                )}
            </div>
        </div>
    );
};

export default ReturnButton;