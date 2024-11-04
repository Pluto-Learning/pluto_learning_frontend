"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchAllTable } from '@/app/api/crud';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import HomeLayout from '@/layouts/homeLayout/HomeLayout';

export default function StepTwo({ GetAllTableDetails, setCurrentStep }) {
    const router = useRouter();
    const [tableImage, setTableImage] = useState(null);
    const [preview, setPreview] = useState(null); // For image preview
    const [allTable, setAllTable] = useState([]);
    const [latestAddedTable, setLatestAddedTable] = useState(null); // Latest added table

    const getAllTable = async () => {
        try {
            const data = await fetchAllTable();
            setAllTable(data);

            // Get the last added table (the most recently added element)
            const lastAdded = getLastAddedElement(data);
            setLatestAddedTable(lastAdded);
        } catch (error) {
            console.error("Error fetching tables:", error);
        }
    };

    const getLastAddedElement = (arr) => {
        return arr.length > 0 ? arr[arr.length - 1] : null; // Return null if the array is empty
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTableImage(file);
            setPreview(URL.createObjectURL(file)); // Set image preview
        } else {
            console.error("No file selected or the file is invalid");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!tableImage) {
            alert('Please select an image first');
            return;
        }

        const formData = new FormData();
        formData.append('file', tableImage);

        try {
            const response = await axios.put(
                `http://software.mediasoftbd.com:3232/api/Table/UpdateTablePicture/${latestAddedTable?.roomId}`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                }
            );
            // Handle success, maybe go to next step or show success message
            toast.success('Image uploaded successfully!');
            setPreview(null); // Clear preview after successful upload
            router.push('/table-discovery');
            GetAllTableDetails()
            setCurrentStep(1);
            // window.location.reload();
        } catch (error) {
            console.error('Error updating table picture:', error);
            toast.error('Error uploading image: ' + (error.response ? error.response.data.title : error.message));
        }
    };

    useEffect(() => {
        getAllTable();
    }, []);

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview); // Clean up URL on unmount
            }
        };
    }, [preview]);

    return (
        <>
            <h1 className='text-center mb-4'>Upload Table Picture</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className='form-control' type="file" onChange={handleFileChange} accept="image/*" />
                </div>
                <button type="submit" className='btn pluto-pink-btn' data-bs-dismiss="modal" aria-label="Close">Upload</button>

                {preview && (
                    <div className='mt-3'>
                        <h6>Image Preview:</h6>
                        <div className='mx-auto'>
                            <img src={preview} alt="Image Preview" className='img-fluid' />
                        </div>
                    </div>
                )}
            </form>
        </>
    );
}
