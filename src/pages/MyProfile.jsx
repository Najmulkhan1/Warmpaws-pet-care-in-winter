import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthContext';


const formatDate = (isoString) => {
  if (!isoString) return 'N/A';
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const MyProfile = () => {
 
  const { user, userProfileUpdate } = useContext(AuthContext);


  const initialData = {
    uid: user?.uid || 'N/A',
    name: user?.displayName || '',
    email: user?.email || 'N/A',
    imageUrl: user?.photoURL || 'https://i.pravatar.cc/150?img=60', 
    createdAt: user?.metadata?.creationTime || 'N/A',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialData);
  const [formData, setFormData] = useState(initialData);

  
  useEffect(() => {
    if (user) {
      const currentAuthData = {
        uid: user.uid,
        name: user.displayName || '',
        email: user.email,
        imageUrl: user.photoURL || 'https://i.pravatar.cc/150?img=60',
        createdAt: user.metadata?.creationTime,
      };
      setProfileData(currentAuthData);
      if (!isEditing) {
        setFormData(currentAuthData);
      }
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    try {
        await userProfileUpdate({
            displayName: formData.name,
            photoURL: formData.imageUrl,
        });
        toast.success('Profile updated successfully');
        
        
        setProfileData(formData);
        setIsEditing(false);
    } catch (error) {
        console.error('Error updating profile:', error);
        toast.error('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(profileData);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setFormData(profileData);
  };

 
  const LightDisplayField = ({ label, value }) => (
    <div className="flex justify-between items-center text-sm py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-8">
      
     
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        
        
        <div className="relative p-6 border-b border-gray-100 flex flex-col items-center bg-emerald-50/50">
            
            
            <div className="relative group mb-4">
                <img
                    src={formData.imageUrl} 
                    alt="Profile Avatar"
                    className="w-24 h-24 rounded-full object-cover border-4 border-emerald-400 shadow-md shadow-emerald-200 transition-all duration-300"
                />
            </div>
          
          <div className="w-full text-center">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-center text-2xl font-bold text-gray-800 bg-white p-2 rounded-lg border-b-2 border-emerald-300 focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                placeholder="Your Name"
                required
              />
            ) : (
             
              <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
            )}
            <p className="text-sm text-gray-600 mt-1">{profileData.email}</p>
          </div>
        </div>

    
        {isEditing && (
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <label htmlFor="imageUrl" className="block text-xs font-semibold text-gray-600 mb-1">
                    Profile Image URL
                </label>
                <input
                    type="url"
                    name="imageUrl"
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Enter a new image URL"
                    className="w-full text-sm p-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition"
                />
            </div>
        )}

      
        <div className="p-6">
          <h3 className="text-base font-semibold text-emerald-600 mb-3 pb-2 border-b border-gray-100">
            Account Information
          </h3>
          <div className="space-y-1">
            <LightDisplayField label="User ID (UID)" value={profileData.uid} />
            <LightDisplayField label="Account Created" value={formatDate(profileData.createdAt)} />
          </div>
        </div>

        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end space-x-3">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-lg hover:bg-emerald-200 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;