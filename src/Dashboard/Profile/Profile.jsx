import React, { useState } from 'react';
import './Profile.css';
import Avatar from './Avatar.jsx';

const Profile = () => {

  const Ortga = () => window.history.back();

  const fullName = localStorage.getItem('fullName') || 'Yaxshimisan';
  const phone = localStorage.getItem('phone') || 'Nomer kiritilmagan';
  const email = localStorage.getItem('email') || 'Yaxshimisan';
  const avatar = localStorage.getItem('avatar');

  const stored = localStorage.getItem('tasks');
  let tasks = [];
  try {
    const parsed = JSON.parse(stored);
    tasks = Array.isArray(parsed) ? parsed : [];
  } catch {
    tasks = [];
  }

  const allTasks = tasks.length;
  const progressTasks = tasks.filter(t => t.status === 'progress').length;
  const doneTasks = tasks.filter(t => t.status === 'done').length;

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameInput, setNameInput] = useState(fullName);
  const [phoneInput, setPhoneInput] = useState(phone);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const saveChanges = () => {
    localStorage.setItem('fullName', nameInput);
    localStorage.setItem('phone', phoneInput);
    alert("O'zgartirishlar saqlandi!");
    closeModal();
    window.location.reload(); // sahifani yangilash
  };

  return (
    <div className="container">
      <div className='Ortga' onClick={Ortga}>
        <i className="fa-solid fa-angles-left fa-bounce"></i>
      </div>

      <div className='Settings' onClick={openModal}>
        <i className="fa-solid fa-gear fa-spin"></i>
      </div>

      <div className='ProfilePage'>PROFILE</div>

      <div className="logo">
        {avatar ? (
          <img src={avatar} alt={fullName} />
        ) : (
          <Avatar name={fullName} size={128} />
        )}
      </div>

      <div className='Info'>
        <h1>Your Info</h1>
        <h2>Name: <b>{fullName}</b></h2>
        <h3>Email: <b>{email}</b></h3>
        <h3>Tel Raqam: <b>{phone}</b></h3>
        <h3>Vazifalar: <b>{allTasks}</b> </h3>
        <h3>Kutilayotgan: <b>{progressTasks}</b></h3>
        <h3>Bajarilgan: <b>{doneTasks}</b></h3>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Settings</h2>
              <button className="modal-close" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <label>
                Name:
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                />
              </label>
              <button className="save-btn" onClick={saveChanges}>Saqlash</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;