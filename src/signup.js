import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import SignupIllustrator from './assets/SignupIllustrator.png'; // Replace with actual path to your illustration
import GoogleIcon from './assets/GoogleIcon.png';
import LoginIcon from './assets/Loginicon.png'; // Replace with actual path
import PrinterSchedularIcon from './assets/PrinterSchedularIcon.png';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signing up with:', email, password);
        // After successful signup, navigate to the home page
        navigate('/home');
    };

    const handleGoogleSignup = () => {
        // Handle Google signup logic here
        console.log('Signing up with Google');
        // After successful Google signup, navigate to the home page
        navigate('/home');
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-100">
            {/* Header / Navbar */}
            <div className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
                <div className="flex items-center space-x-2">
                    <div className="text-2xl"><img src={PrinterSchedularIcon} className="w-10 h-10 ml-6" alt="Printer Scheduler Icon" style={{ marginLeft: '26px', width: '40px',height:'38px' }} /></div>
                    <span className="font-bold text-xl ml-8" style={{ marginLeft: '32px' }}>Printer Scheduler</span>
                </div>
                <div className="flex items-center space-x-6">
                    {['Home', 'Payment', 'Profile', 'Contact'].map((item) => (
                        <a key={item} href="#" className="flex items-center space-x-1 hover:underline">
                            <span>{item}</span>
                        </a>
                    ))}
                    <button className="bg-[#D23B42] text-white px-4 py-2 rounded-full font-semibold transition-colors duration-200 hover:bg-[#b92e37] active:bg-[#a02730]" style={{ width: '89px' }}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-grow justify-center items-center p-8 lg:p-16">
                 {/* Signup Form */}
                 <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full" style={{marginTop: '-52px', height:'535px'}}>
                        <div>
                          <img 
                            src={LoginIcon} 
                            alt="Icon" 
                            className="w-24 -mt-5"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="relative w-full mb-4 mt-8">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
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
                        <div className="relative w-full mb-4">
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

                        {/* Confirm Password Field */}
                        <div className="relative w-full mb-6">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2h2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        {/* Google Signup */}
                        <button
                            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-xl mb-4 hover:bg-gray-50 transition-colors duration-200"
                            onClick={handleGoogleSignup}
                        >
                            <img src={GoogleIcon} alt="Google Icon" style={{ marginRight: '15px' }} /> 
                            Signup via Google
                        </button>

                        {/* Standard Signup */}
                        <button
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                            onClick={handleSignup}
                        >
                            Signup
                        </button>

                        {/* Login Link */}
                        <div className="mt-4 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
                        </div>
                    </div>
                </div>

                {/* Illustration */}
                <div className="hidden lg:flex w-1/2 justify-center items-center pl-10">
                    <img
                        src={SignupIllustrator}
                        alt="Illustration of person creating an account"
                        className="rounded-lg shadow-lg max-w-full"
                        style={{marginTop: '-50px',width: '537px'}}
                        />
                </div>
            </div>
        </div>
    );
}

export default Signup;
