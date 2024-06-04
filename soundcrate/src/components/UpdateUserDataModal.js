'use client';
import { useState } from 'react';

export default function UpdateUserDataModal({ userData, onSave, onClose }) {
  const [username, setUsername] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSave = async (e) => {
    e.preventDefault();

    onClose(); // Close the modal after saving
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>×</button>
        <h2>Update Profile</h2>
        <form onSubmit={handleSave}>
          <div>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Photo URL (Optional)</label>
            <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
