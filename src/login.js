import React, { useState } from 'react';
import LoginIllustrator from './assets/LoginIllustrator.png'; // Replace with actual path to your illustration
import Loginicon from './assets/Loginicon.png'; // Replace with actual path to your icon
import PrinterSchedularIcon from './assets/PrinterSchedularIcon.png'; 
import GoogleIcon from './assets/GoogleIcon.png';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in with:', email, password);
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic here
        console.log('Logging in with Google');
    };

    return (
        <div className="flex flex-col min-h-screen font-sans">
            {/* Header / Navbar */}
            <div className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
                <div className="flex items-center space-x-2">
                    <div className="text-2xl"><img src={PrinterSchedularIcon} style={{marginLeft:'26px',width:'40px'}}/></div>
                    <span className="font-bold text-xl" style={{marginLeft:'32px'}}>Printer Scheduler</span>
                </div>
                <div className="flex items-center space-x-6">
                    {['Home', 'Payment', 'Profile', 'Contact'].map((item) => (
                        <a key={item} href="#" className="flex items-center space-x-1 hover:underline">
                            <span>{item}</span>
                        </a>
                    ))}
                    <button className="bg-[#D23B42] text-white px-4 py-2 rounded-full font-semibold transition-colors duration-200 hover:bg-[#b92e37] active:bg-[#a02730]" style={{width:'89px'}}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-grow justify-center items-center p-8 lg:p-16 bg-gray-100">
                {/* Illustration */}
                <div className="hidden lg:flex w-1/2 justify-center items-center">
                    <img
                        src={LoginIllustrator}
                        alt="Illustration of person with a printer"
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>

                {/* Login Form */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full ml-32" style={{marginTop:'-30px'}}>
                        <div>
                          <img 
                            src={Loginicon} 
                            alt="Icon" 
                            style={{ width: '100px', marginTop: '-20px' }} 
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative w-full mb-4" style={{marginTop:'30px'}}>
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative w-full mb-6">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Google Login */}
                        <button
                            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-xl mb-4 hover:bg-gray-50 transition-colors duration-200"
                            onClick={handleGoogleLogin}
                        >
                            <img src={GoogleIcon} alt="Google Icon" style={{marginRight:'15px'}}/>
                            Login via Google
                        </button>

                        {/* Standard Login */}
                        <button
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                            onClick={handleLogin}
                        >
                            Login
                        </button>

                        {/* Sign Up Link */}
                        <div className="mt-4 text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-600 font-bold hover:underline">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
