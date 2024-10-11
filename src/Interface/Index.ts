


export interface TCar {
    _id: string;
    name: string;
    photo: string;
    color: string;
    description: string;
    features: string[];
    isDeleted: boolean;
    isElectric: boolean;
    pricePerHour: number;
    status: string;
}

export interface User {
    _id: string;
    address: string;
    createdAt: string;
    email: string;
    isDeleted: boolean;
    name: string;
    phone: string;
    photo: string;
    role: string;
    updatedAt: string; 
}