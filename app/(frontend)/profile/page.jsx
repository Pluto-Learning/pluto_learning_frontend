"use client"
import { fetchUserProfileById, saveUserProfile, UserImageUpload } from '@/app/api/crud';
import HomeLayout from '@/layouts/homeLayout/HomeLayout'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function page() {

    const [singleUserProfile, setSingleUserProfile] = useState([])
    const [currentUserId, setCurrentUserId] = useState(null)

    const [formData, setFormData] = useState({
        "userID": "",
        "gender": "",
        "mobile": "",
        "dateOfBirth": "",
        "studentYear": "",
        "status": "",
        "profilePictureName": "",
        "awsFileUrl": ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUserProfileSave()
        console.log(formData);
    };

    const handleUserProfileSave = async (e) => {
        try {
            await saveUserProfile(formData);
            resetForm();
        } catch (error) {
            console.error("Error creating university:", error);
        }
    };

    const resetForm = () => {
        setFormData({
            "userID": "",
            "gender": "",
            "mobile": "",
            "dateOfBirth": "",
            "studentYear": "",
            "status": "",
            "profilePictureName": "",
            "awsFileUrl": ""
        });
    };

    const getUserData = async () => {
        const data = await fetchUserProfileById(currentUserId)
        setSingleUserProfile(data)
    }

    useEffect(() => {
        getUserData()
    }, [])



    // ===============================================
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [userID, setUserID] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setPreviewImage(URL.createObjectURL(file)); // Preview image before upload
        }
    };

    const handleUserIDChange = (event) => {
        setUserID(event.target.value);
    };

    const handleImgSubmit = async (event) => {
        event.preventDefault();

        // Ensure selected image and userID are provided
        if (!selectedImage || !userID) {
            toast.error("Please select an image and enter a user ID.");
            return;
        }

        try {
            // Call the UserImageUpload function to handle the image upload
            await UserImageUpload(userID, selectedImage);

            // Reset form state after successful upload
            setSelectedImage(null);
            setPreviewImage(null);
            setUserID('');

            // Optionally refresh the list of universities if applicable
            // getAllUniversities(); // Uncomment this if you have a function to fetch updated data
        } catch (error) {
            console.error("Error updating profile picture:", error);
            toast.error("Error updating profile picture.");
        }
    };


    return (
        <div className='profile'>
            <div className="container">
                <h1>Usre Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userID" className="form-label">User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userID"
                            name="userID"
                            value={formData.userID}
                            onChange={(e) => {
                                handleChange(e);
                                setCurrentUserId(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select
                            className="form-select"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="studentYear" className="form-label">Student Year</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentYear"
                            name="studentYear"
                            value={formData.studentYear}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <input
                            type="text"
                            className="form-control"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="profilePictureName" className="form-label">Profile Picture Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="profilePictureName"
                            name="profilePictureName"
                            value={formData.profilePictureName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="awsFileUrl" className="form-label">AWS File URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="awsFileUrl"
                            name="awsFileUrl"
                            value={formData.awsFileUrl}
                            onChange={handleChange}
                        />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br /><br />

                <div>
                    <h1>Upload an Image</h1>
                    <form onSubmit={handleImgSubmit}>
                        <div>
                            <label>User ID:</label>
                            <input
                                type="text"
                                value={userID}
                                onChange={handleUserIDChange}
                                placeholder="Enter your user ID"
                                required
                            />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <button type="submit">Upload</button>
                    </form>

                    {previewImage && (
                        <div>
                            <h2>Image Preview:</h2>
                            <img src={previewImage} alt="Selected" style={{ width: '300px' }} />
                        </div>
                    )}
                </div>

                <hr />

                <table class="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Year</th>
                            <th scope="col">Status</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
