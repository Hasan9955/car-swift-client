import { useState } from 'react';
import BookingModel from './BookingModel';
import { TCar } from '../Interface/Index';

const BookingButton = ({carData, className}: {carData: TCar; className: string}) => {

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
                Book Now
            </button>
            <div>
                {isModalOpen && carData && (
                    <BookingModel
                        carData={carData}
                        closeModal={closeModal}
                    ></BookingModel>
                )}
            </div>
        </div>
    );
};

export default BookingButton;