import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// --- Import your images from the assets folder ---
import PrinterSchedularIcon from './assets/PrinterSchedularIcon.png';
import genericPlaceholderAvatar from './assets/placeholder.png'; // A generic placeholder image

import avatar1 from './assets/avatar1.svg';
import avatar2 from './assets/avatar2.svg';
import avatar3 from './assets/avatar3.svg';
import avatar4 from './assets/avatar4.svg';
import avatar5 from './assets/avatar5.svg';
import avatar6 from './assets/avatar6.svg';
import avatar7 from './assets/avatar7.svg';
import avatar8 from './assets/avatar8.svg';
import avatar9 from './assets/avatar9.svg';
import avatar10 from './assets/avatar10.svg';


// --- SVG Icons ---
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6"/>
        <path d="M21 12H9"/>
    </svg>
);
const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);
const DropdownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);


const ProfilePage = () => {
    // Data for the selectable avatars
    const avatarOptions = [
        { id: 1, src: avatar1 }, { id: 2, src: avatar2 }, { id: 3, src: avatar3 },
        { id: 4, src: avatar4 }, { id: 5, src: avatar5 }, { id: 6, src: avatar6 },
        { id: 7, src: avatar7 }, { id: 8, src: avatar8 }, { id: 9, src: avatar9 },
        { id: 10, src: avatar10 },
    ];
    
    const [selectedAvatarId, setSelectedAvatarId] = useState(null);
    const [mainDisplayAvatar, setMainDisplayAvatar] = useState(genericPlaceholderAvatar);

    useEffect(() => {
        const avatar = avatarOptions.find(opt => opt.id === selectedAvatarId);
        setMainDisplayAvatar(avatar ? avatar.src : genericPlaceholderAvatar);
    }, [selectedAvatarId]);

    const [name, setName] = useState('S.Muhilan');
    const [email, setEmail] = useState('smuhilan07@gmail.com');
    const [mobile, setMobile] = useState('+91 9788657300');
    const [fullName, setFullName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formMobile, setFormMobile] = useState('');
    const [mailId, setMailId] = useState('');
    const [otp, setOtp] = useState('');

    const styles = `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
        body {
            background-color: #f0f2f5;
            font-family: 'Roboto', sans-serif;
            margin: 0;
        }
        
        /* Header Styles for Full-Width Layout */
        .header {
            background-color: #2060FE;
            padding: 10px 0; /* Vertical padding */
            width: 100%;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1318px; /* Max-width for header content */
            margin: 0 auto;      /* Center the content */
            padding: 0 20px;    /* Padding for smaller screens */
        }
        .header .logo { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 700; color: white; }
        .header .logo img { width: 40px; }
        .header .navigation { display: flex; align-items: center; gap: 30px; }
        .header .navigation ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 30px; }
        .header .navigation ul a { color: white; text-decoration: none; font-weight: 500; display: flex; align-items: center; gap: 4px; }
        .header .logout-btn { background-color: #D23B42; color: white; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-weight: bold; }

        /* Main container for content below the header */
        .profile-page-container {
            max-width: 1400px;
            margin: 2px -4px; /* Adds space from header and centers */
            padding: 0 20px;   /* Padding for smaller screens */
        }

        /* Top Profile Info Section */
        .top-profile-info {
            position: relative;
            display: flex;
            align-items: center;
            gap: 30px;
            background-color: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            margin-bottom: 25px;
        }
        .top-profile-info .main-avatar {
            width: 130px; height: 130px; border-radius: 50%; object-fit: cover;
            border: 4px solid #e0e0e0; background-color: #f0f2f5;
        }
        .top-profile-info .info-fields { display: grid; grid-template-columns: auto 1fr; gap: 15px 10px; align-items: center; flex-grow: 1; }
        .top-profile-info .info-fields label { font-weight: 500; color: #333; font-size: 1rem; }
        .top-profile-info .info-fields input { border: 1px solid #ccc; border-radius: 8px; padding: 12px 15px; font-size: 1rem; width: 86%; }
        .top-profile-info .back-btn {
            position: absolute; top: 25px; right: 25px; background-color: #D23B42;
            color: white; border: none; padding: 12px 25px; border-radius: 25px;
            cursor: pointer; font-weight: bold; font-size: 1rem;
            display: flex; align-items: center; gap: 8px;
        }

        /* Main Profile Details Section */
        .profile-details {
            background-color: white; padding: 25px; border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .profile-details-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .profile-details-header h2 { font-size: 1.8rem; margin: 0; color: #111; }
        .profile-details-header .edit-btn {
            background-color: #6A35D3; color: white; border: none; padding: 10px 20px; border-radius: 25px;
            cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 8px;
        }

        /* Avatar Selection */
        .avatar-selection { display: flex; justify-content: center; gap: 20px; padding-bottom: 25px; margin-bottom: 25px; border-bottom: 1px solid #eee; }
        .avatar-wrapper { position: relative; cursor: pointer; }
        .avatar-item { width: 100px; height: 100px; border-radius: 50%; border: 3px solid transparent; transition: border-color 0.3s; }
        .avatar-item.selected { border-color: #6A35D3; }

        /* Profile Form */
        .profile-form { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px 30px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { color: #555; font-weight: 500; }
        .form-group input { background-color: #f0f2f5; border: 1px solid #ddd; border-radius: 8px; padding: 14px 15px; font-size: 1rem; }
        input[type="number"][value="20"] { font-weight: bold; }
        .form-action-group {
            grid-column: 1 / -1; display: flex; justify-content: space-between;
            align-items: center; margin-top: 20px;
        }
        .btn-secondary {
            background-color: #6A35D3; color: white; border: none; padding: 12px 25px;
            border-radius: 25px; cursor: pointer; font-weight: 500; font-size: 1rem;
        }
        .right-buttons { display: flex; gap: 15px; }
        .btn {
            border: none; padding: 12px 30px; border-radius: 8px;
            cursor: pointer; font-weight: bold; font-size: 1rem;
        }
        .btn-save { background-color: #2060FE; color: white; }
        .btn-clear { background-color: #E0E0E0; color: #333; }

        /* Mail & OTP Section */
        .mail-otp-section {
            grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr auto;
            gap: 20px; align-items: flex-end; margin-top: 10px;
        }
        .verify-otp-btn {
            background-color: #28a745; color: white; border: none; height: 52px;
            padding: 0 25px; border-radius: 8px; font-weight: bold; cursor: pointer;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            
            {/* --- HEADER (Full Width) --- */}
            <header className="header">
                <div className="header-content">
                    <div className="logo">
                        <img src={PrinterSchedularIcon} alt="Logo" />
                        <span>Printer Scheduler</span>
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li><a href="#">Home <DropdownIcon /></a></li>
                            <li><a href="#">Payment <DropdownIcon /></a></li>
                            <li><a href="#">Profile <DropdownIcon /></a></li>
                            <li><a href="#">Contact <DropdownIcon /></a></li>
                        </ul>
                        <button className="logout-btn">Logout</button>
                    </nav>
                </div>
            </header>

            {/* --- MAIN CONTAINER (Centered Content) --- */}
            <div className="profile-page-container">
                <section className="top-profile-info">
                    <img src={mainDisplayAvatar} alt="Main Profile" className="main-avatar" />
                    <div className="info-fields">
                        <label htmlFor="name">Name :</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="email">Email ID :</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="mobile">Mobile no :</label>
                        <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <button className="back-btn">
                        Back <BackIcon />
                    </button>
                </section>

                <section className="profile-details">
                    <div className="profile-details-header">
                        <h2>PROFILE</h2>
                        <button className="edit-btn"><EditIcon /> Edit</button>
                    </div>
                    <div className="avatar-selection">
                        {avatarOptions.map(avatar => (
                            <div key={avatar.id} className="avatar-wrapper" onClick={() => setSelectedAvatarId(avatar.id)}>
                                <img src={avatar.src} alt={`Avatar ${avatar.id}`} className={`avatar-item ${selectedAvatarId === avatar.id ? 'selected' : ''}`} />
                            </div>
                        ))}
                    </div>
                    <div className="profile-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" placeholder="Your First Name" value={fullName} onChange={e => setFullName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formEmail">Email</label>
                            <input type="email" id="formEmail" placeholder="Your email" value={formEmail} onChange={e => setFormEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formMobile">Mobile No</label>
                            <input type="text" id="formMobile" placeholder="Your mobile No" value={formMobile} onChange={e => setFormMobile(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="printed">Printed</label>
                            <input type="number" id="printed" value="20" readOnly disabled />
                        </div>
                        <div className="mail-otp-section">
                            <div className="form-group">
                                <label htmlFor="mailId">Mail ID</label>
                                <input type="email" id="mailId" placeholder="Your email" value={mailId} onChange={e => setMailId(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="otp">OTP</label>
                                <input type="text" id="otp" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
                            </div>
                            <button className="verify-otp-btn">Verify OTP</button>
                        </div>
                        <div className="form-action-group">
                            <button className="btn-secondary">Change password</button>
                            <div className="right-buttons">
                                <button className="btn btn-save">Save</button>
                                <button className="btn btn-clear">Clear</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProfilePage;