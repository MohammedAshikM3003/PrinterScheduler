import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import PrinterSchedularIcon from './assets/PrinterSchedularIcon.png';

// SVG icons are now defined directly in the component
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
);
const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
);
const WarningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);

const Home = () => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    // All your other functions (handleDelete, handleCopiesChange, etc.) remain here unchanged
    const handleDelete = (fileId) => {
        setFiles(currentFiles => currentFiles.filter(file => file.id !== fileId));
    };
    const handleCopiesChange = (fileId, newCopies) => {
        const copies = Math.max(1, parseInt(newCopies, 10) || 1);
        setFiles(currentFiles =>
            currentFiles.map(file =>
                file.id === fileId ? { ...file, copies: copies } : file
            )
        );
    };
    const handleIncrement = (fileId) => {
        setFiles(currentFiles =>
            currentFiles.map(file =>
                file.id === fileId ? { ...file, copies: file.copies + 1 } : file
            )
        );
    };
    const handleDecrement = (fileId) => {
        setFiles(currentFiles =>
            currentFiles.map(file =>
                file.id === fileId ? { ...file, copies: Math.max(1, file.copies - 1) } : file
            )
        );
    };
    const handleClear = () => {
        setFiles([]);
    };
    const handleFileSelect = (event) => {
        const selectedFiles = event.target.files;
        if (!selectedFiles || selectedFiles.length === 0) return;
        const newFiles = Array.from(selectedFiles).map((file, index) => ({
            id: Date.now() + index,
            name: file.name,
            size: `${(file.size / 1024).toFixed(0)} kb`,
            copies: 1,
        }));
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
        event.target.value = null;
    };
    const handleUpload = () => {
        fileInputRef.current.click();
    };
    const handleSubmit = () => alert('Files submitted for printing!');
    const handleReport = () => alert('Report generated.');

    // New function to handle logout
    const handleLogout = () => {
        // Here you would typically clear user session, tokens, etc.
        console.log("Logging out...");
        navigate('/login'); // Navigate to the login page
    };

    const styles = `
        /* Your existing CSS styles remain here unchanged */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        .scheduler-container * { box-sizing: border-box; font-family: 'Roboto', sans-serif; }
        .scheduler-container-wrapper { background-color: #f4f7fa; padding: 20px; min-height: 100vh; }
        .scheduler-container { width: 100%; max-width: 1200px; margin: 0 auto; }
        .header { display: flex; justify-content: space-between; align-items: center; background-color: #2060FE; color: white; padding: 10px 30px; border-radius: 8px; }
        .header .logo { display: flex; align-items: center; font-size: 1.5rem; font-weight: 700; }
        .header .navigation ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 25px; }
        .header .navigation ul li a { color: white; text-decoration: none; font-weight: 500; }
        .logout-btn { background-color: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold; }
        .info-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); }
        .info-item { background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 8px; padding: 12px 15px; font-weight: 500; color: #555; font-size: 1rem; }
        .upload-section { margin-top: 20px; background-color: white; border: 1px solid #ddd; border-radius: 12px; padding: 25px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); }
        .upload-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 15px; }
        .upload-header h2 { margin: 0; font-size: 1.4rem; font-weight: bold; color: #333; }
        .upload-btn { background-color: #6f42c1; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 8px; font-size: 1rem; }
        .file-list { overflow-x: auto; max-height: 265px; overflow-y: auto; }
        .file-list table { width: 100%; border-collapse: collapse; }
        .file-list th { padding: 10px 15px; text-align: left; color: #333; white-space: nowrap; font-weight: 700; }
        .file-list td { padding: 15px; text-align: left; color: #555; white-space: nowrap; vertical-align: middle; }
        .file-list tbody tr { border-bottom: 1px solid #f0f0f0; }
        .file-list tbody tr:last-child { border-bottom: none; }
        .delete-btn { background: none; border: none; color: #dc3545; cursor: pointer; font-size: 1.2rem; padding: 5px; line-height: 1; }
        .action-buttons { margin-top: 20px; display: flex; justify-content: flex-end; align-items: center; gap: 15px; flex-wrap: wrap; }
        .action-buttons button { border: none; padding: 12px 25px; border-radius: 5px; cursor: pointer; font-weight: 700; font-size: 1rem; display: flex; align-items: center; gap: 8px; transition: transform 0.2s; }
        .action-buttons button:hover { transform: translateY(-2px); }
        .report-btn { background-color: #dc3545; color: white; margin-right: auto; }
        .submit-btn { background-color: #28a745; color: white; }
        .clear-btn { background-color: #6c757d; color: white; }
        .copies-container { display: flex; align-items: center; gap: 6px; }
        .copies-input { width: 45px; height: 32px; padding: 5px; text-align: center; border: 1px solid #ccc; border-radius: 4px; font-size: 1rem; -moz-appearance: textfield; }
        .copies-input::-webkit-outer-spin-button, .copies-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .copy-btn { width: 28px; height: 28px; border: 1px solid #ccc; background-color: #f0f0f0; border-radius: 4px; cursor: pointer; font-size: 1.2rem; font-weight: bold; display: flex; align-items: center; justify-content: center; line-height: 1; padding-bottom: 2px; }
        .copy-btn:hover { background-color: #e0e0e0; }
    `;

    return (
        <div className="scheduler-container-wrapper">
            <style>{styles}</style>
            <div className="scheduler-container">
                <header className="header" style={{width:'1371px',marginTop:'-20px',marginLeft:'-86px',height:'72px'}}>
                    <div className="logo">
                        <div className="text-2xl" style={{marginLeft:'-6.5px'}}><img src={PrinterSchedularIcon} className="w-10 h-10 ml-6" alt="Printer Scheduler Icon" style={{ marginLeft: '26px', width: '40px',height:'38px' }} /></div>
                       <span className="font-bold text-xl ml-8" style={{ marginLeft: '32px',width:'700px',height:'26px' }}>Printer Scheduler</span>
                    </div>
                    <nav className="navigation">
                        {/* REPLACED <a> with <Link> */}
                        <ul style={{gap:'60px',marginRight:'50px'}}>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/profile">Report</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </nav>
                    {/* ADDED onClick HANDLER TO LOGOUT BUTTON */}
                    <button onClick={handleLogout} className="bg-[#D23B42] text-white px-4 py-2 rounded-full font-semibold transition-colors duration-200 hover:bg-[#b92e37] active:bg-[#a02730]" style={{ width: '89px' }}>
                        Logout
                    </button>
                </header>

                <section className="info-bar">
                    <div className="info-item">Date : {new Date().toLocaleDateString('en-IN')}</div>
                    <div className="info-item">Uploaded Time : {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</div>
                    <div className="info-item">Printed :</div>
                    <div className="info-item">Queue :</div>
                </section>

                <main className="upload-section" style={{padding:'5px'}}>
                    {/* Your existing JSX for upload section */}
                    <div className="upload-header">
                        <h2>UPLOAD FILES</h2>
                        <button className="upload-btn" onClick={handleUpload}>
                            <UploadIcon /> Upload
                        </button>
                    </div>
                    <div className="file-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>File Name</th>
                                    <th>Size</th>
                                    <th>Copies</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {files.map((file, index) => (
                                    <tr key={file.id}>
                                        <td>{index + 1}.</td>
                                        <td>{file.name}</td>
                                        <td>{file.size}</td>
                                        <td>
                                            <div className="copies-container">
                                                <button className="copy-btn" onClick={() => handleDecrement(file.id)}>-</button>
                                                <input
                                                    type="number"
                                                    className="copies-input"
                                                    value={file.copies}
                                                    onChange={(e) => handleCopiesChange(file.id, e.target.value)}
                                                    min="1"
                                                />
                                                <button className="copy-btn" onClick={() => handleIncrement(file.id)}>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="delete-btn" onClick={() => handleDelete(file.id)}>
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.png,.jpg"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />
                </main>

                <footer className="action-buttons">
                    <button className="report-btn" onClick={handleReport}><WarningIcon /> Report</button>
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                    <button className="clear-btn" onClick={handleClear}>Clear</button>
                </footer>
            </div>
        </div>
    );
};

export default Home;