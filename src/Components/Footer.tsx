import { Link } from "react-router-dom";
import logo from '../assets/carswift.png'

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
            <Link className='flex flex-col gap-3 justify-center items-start' to='/'>
                    <img className='md:w-20 w-16 h-8' src={logo} alt="logo" />
                    <p className=' md:text-2xl xl:text-3xl font-bold uppercase'>C<span className='text-purple-500'>A</span>R S<span className='text-purple-500'>W</span>IFT</p>
                </Link>
                <p> 
                    Providing rental service since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;