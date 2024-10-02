import { routes } from "@/utils/route";
import { toast } from "react-toastify";


const { default: axios } = require("axios");

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})


//==================== CRUD FOR UNIVERSITY ====================
export const fetchUniversity = async () => {
    try {
        const response = await apiClient.get(routes.GetAllUniversity);
        // toast.success('Universities fetched successfully!');
        return response.data;
    } catch (error) {
        // toast.error('Error fetching universities.');
        throw error;
    }
}

export const fetchUniversityById = async (id) => {
    try {
        const response = await apiClient.get(routes.GetUniversityById + '/' + id);
        // toast.success('University fetched successfully!');
        return response.data;
    } catch (error) {
        // toast.error('Error fetching the university.');
        throw error;
    }
}

export const createUniversity = async (data) => {
    try {
        const response = await apiClient.post(routes.CreateUniversity, data);
        toast.success('University created successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error creating the university.');
        throw error;
    }
}

export const updateUniversity = async (id, itemData) => {
    try {
        const response = await apiClient.put(routes.UpdateUniversity + '/' + id, itemData);
        toast.success('University updated successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error updating the university.');
        throw error;
    }
};

export const deleteUniversity = async (id) => {
    try {
        await apiClient.delete(routes.DeleteUniversity + '/' + id);
        toast.success('University deleted successfully!');
    } catch (error) {
        toast.error('Error deleting the university.');
        throw error;
    }
};


//==================== CRUD FOR SECTIONS ====================
export const fetchSection = async () => {
    try {
        const response = await apiClient.get(routes.GetAllSection);
        // toast.success('Sections fetched successfully!');
        return response.data;
    } catch (error) {
        // toast.error('Error fetching sections.');
        throw error;
    }
}

export const fetchSectionById = async (id) => {
    try {
        const response = await apiClient.get(routes.GetSectionById + '/' + id);
        // toast.success('Sections fetched successfully!');
        return response.data;
    } catch (error) {
        // toast.error('Error fetching sections.');
        throw error;
    }
}

export const createSection = async (data) => {
    try {
        const response = await apiClient.post(routes.CreateSection, data);
        toast.success('Section created successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error creating the section.');
        throw error;
    }
}

export const updateSection = async (id, itemData) => {
    try {
        const response = await apiClient.put(routes.UpdateSection + '/' + id, itemData);
        toast.success('Section updated successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error updating the section.');
        throw error;
    }
};

export const deleteSection = async (id) => {
    try {
        await apiClient.delete(routes.DeleteSection + '/' + id);
        toast.success('Section deleted successfully!');
    } catch (error) {
        toast.error('Error deleting the section.');
        throw error;
    }
};



//==================== CRUD FOR COURSE ====================
export const fetchCourse = async () => {
    try {
        const response = await apiClient.get(routes.GetAllCourse);
        // toast.success('Courses fetched successfully!');
        return response.data;
    } catch (error) {
        // toast.error('Error fetching courses.');
        throw error;
    }
}

export const fetchCourseById = async (id) => {
    try {
        const response = await apiClient.get(routes.GetCourseById + '/' + id);
        // toast.success('Course fetched successfully!');
        return response.data;
    } catch (error) {
        // toast.error('Error fetching the course.');
        throw error;
    }
}

export const createCourse = async (data) => {
    try {
        const response = await apiClient.post(routes.CreateCourse, data);
        toast.success('Course created successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error creating the course.');
        throw error;
    }
}

export const updateCourse = async (id, data) => {
    try {
        const response = await apiClient.put(routes.UpdateCourse + '/' + id, data);
        toast.success('Course updated successfully!');
        return response.data;
    } catch (error) {
        toast.error('Error updating the course.');
        throw error;
    }
};

export const deleteCourse = async (id) => {
    try {
        await apiClient.delete(routes.DeleteCourse + '/' + id);
        toast.success('Course deleted successfully!');
    } catch (error) {
        toast.error('Error deleting the course.');
        throw error;
    }
};