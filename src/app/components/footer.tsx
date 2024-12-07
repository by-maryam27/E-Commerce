import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div>
            <h3 className="font-bold text-lg">Exclusive</h3>
            <p className="text-gray-400 mt-2">Subscribe</p>
            <p className="text-gray-400 mt-1">Get 10% off your first order</p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-gray-700 text-white outline-none"
              />
              <button className="p-2 bg-blue-600 rounded-r hover:bg-blue-700">
                &gt;
              </button>
            </div>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="font-bold text-lg">Support</h3>
            <p className="text-gray-400 mt-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="text-gray-400 mt-2">exclusive@gmail.com</p>
            <p className="text-gray-400 mt-2">+88015-88888-9999</p>
          </div>
  
          {/* Account Section */}
          <div>
            <h3 className="font-bold text-lg">Account</h3>
            <ul className="text-gray-400 mt-2 space-y-1">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
  
          {/* Quick Link Section */}
          <div>
            <h3 className="font-bold text-lg">Quick Link</h3>
            <ul className="text-gray-400 mt-2 space-y-1">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Download App Section */}
          <div>
            <h3 className="font-bold text-lg">Download App</h3>
            <p className="text-gray-400 mt-2">Save $3 with App New User Only</p>
            <div className="flex space-x-4 mt-4">
            <FcGoogle/>
            <BsFacebook/>
            <BsLinkedin/>
            <BsGithub/>
            </div>
            <div className="flex space-x-4 mt-4 text-gray-400">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="text-center text-gray-600 text-sm mt-10 border-t border-gray-700 pt-6">
          &copy; Copyright E-commerce 2024. All rights reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  