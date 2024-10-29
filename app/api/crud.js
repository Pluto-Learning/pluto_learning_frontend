import { routes } from "@/utils/route";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next"; // Import cookies-next to retrieve the token

const { default: axios } = require("axios");

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Axios instance with Bearer token
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Bearer token to all requests
apiClient.interceptors.request.use(
  (config) => {
    const token = getCookie('token'); // Get the token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



//==================== CRUD FOR UNIVERSITY ====================
export const fetchUniversity = async () => {
  try {
    const response = await apiClient.get(routes.GetAllUniversity);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUniversityById = async (id) => {
  try {
    const response = await apiClient.get(`${routes.GetUniversityById}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUniversity = async (data) => {
  try {
    const response = await apiClient.post(routes.CreateUniversity, data);
    toast.success('University created successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error creating the university.');
    throw error;
  }
};

export const updateUniversity = async (id, itemData) => {
  try {
    const response = await apiClient.put(`${routes.UpdateUniversity}/${id}`, itemData);
    toast.success('University updated successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error updating the university.');
    throw error;
  }
};

export const deleteUniversity = async (id) => {
  try {
    await apiClient.delete(`${routes.DeleteUniversity}/${id}`);
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
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSectionById = async (id) => {
  try {
    const response = await apiClient.get(`${routes.GetSectionById}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSection = async (data) => {
  try {
    const response = await apiClient.post(routes.CreateSection, data);
    toast.success('Section created successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error creating the section.');
    throw error;
  }
};

export const updateSection = async (id, itemData) => {
  try {
    const response = await apiClient.put(`${routes.UpdateSection}/${id}`, itemData);
    toast.success('Section updated successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error updating the section.');
    throw error;
  }
};

export const deleteSection = async (id) => {
  try {
    await apiClient.delete(`${routes.DeleteSection}/${id}`);
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
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCourseById = async (id) => {
  try {
    const response = await apiClient.get(`${routes.GetCourseById}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (data) => {
  try {
    const response = await apiClient.post(routes.CreateCourse, data);
    toast.success('Course created successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error creating the course.');
    throw error;
  }
};

export const updateCourse = async (id, data) => {
  try {
    const response = await apiClient.put(`${routes.UpdateCourse}/${id}`, data);
    toast.success('Course updated successfully!');
    return response.data;
  } catch (error) {
    toast.error('Error updating the course.');
    throw error;
  }
};

export const deleteCourse = async (id) => {
  try {
    await apiClient.delete(`${routes.DeleteCourse}/${id}`);
    toast.success('Course deleted successfully!');
  } catch (error) {
    toast.error('Error deleting the course.');
    throw error;
  }
};



// //==================== CRUD FOR COURSE SECTION MAPPING ====================
// export const fetchGetAllCourseSectionMapping = async () => {
//   try {
//     const response = await apiClient.get(routes.GetAllCourseSectionMapping);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createCourseSectionMapping = async (data) => {
//   try {
//     const response = await apiClient.post(routes.saveCourseSectionMapping, data);
//     toast.success('Section created successfully!');
//     return response.data;
//   } catch (error) {
//     toast.error('Error creating the section.');
//     throw error;
//   }
// };

// export const updateCourseSectionData = async (id, data) => {
//   try {
//     const response = await apiClient.put(`${routes.updateCourseSectionData}/${id}`, data);
//     toast.success('Section updated successfully!');
//     return response.data;
//   } catch (error) {
//     toast.error('Error updating the section.');
//     throw error;
//   }
// };



//==================== CRUD FOR COURSE SECTION DETAILS ====================
export const fetchAllCourseSectionDetails = async () => {
  try {
    const response = await apiClient.get(routes.GetAllCourseSectionDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCourseSectionDetailsById = async (id) => {
  try {
    const response = await apiClient.get(`${routes.GetCourseSectionDetailsById}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCourseSectionBinding = async (data) => {
  try {
    const response = await apiClient.post(routes.saveCourseSectionBinding, data);
    toast.success('Successfully Binding Course Section');
    return response.data;
  } catch (error) {
    toast.error('Error Binding the course section.');
    throw error;
  }
}

export const updateCourseSection = async (id, data) => {
  try {
    const response = await apiClient.put(routes.updateCourseSectionBinding + '/' + id, data);
    toast.success('Successfully Updatd Course Section Binding');
    return response.data;
  } catch (error) {
    toast.error('Error Course Section Binding');
    throw error;
  }
}



//==================== CRUD FOR STUDENT COURSE SECTION DETAILS ====================
export const fetchAllStudentCourseSectionDetails = async () => {
  try {
    const response = await apiClient.get(routes.GetAllStudentCourseSectionDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStudentCourseSectionDetailsById = async (id) => {
  try {
    const response = await apiClient.get(routes.GetStudentCourseSectionBindingDetailsById + '/' + id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStudentCourseSectionBinding = async (data) => {
  try {
    const response = await apiClient.post(routes.SaveStudentCourseSectionBinding, data);
    toast.success('Student Course Section Binding successfully');
    return response.data;
  } catch (error) {
    toast.error('Error Student Course Section Binding.');
    console.log(error)
    throw error;
  }
};


//==================== CRUD FOR USER REGISTRATION ====================
export const createUser = async (data) => {
  try {
    const response = await apiClient.post(routes.CreateUser, data);
    toast.success('Successfully Registered');
    return response.data;
  } catch (error) {
    toast.error('Error creating the course.');
    throw error;
  }
};


//==================== CRUD FOR USER PROFILE SETUP ====================

export const fetchUserProfileById = async (id) => {
  try {
    const response = await apiClient.get(routes.GetUserProfileById + id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saveUserProfile = async (data) => {
  try {
    const response = await apiClient.post(routes.SaveUserProfile, data);
    toast.success('Profile saved successfully');
    return response.data;
  } catch (error) {
    toast.error('Error creating the course.');
    console.log(error)
    throw error;
  }
};

export const UserImageUpload = async (userID, imageFile) => {

  // Prepare form data for the image upload
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await apiClient.put(routes.UpdateProfilePicture + userID, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Override the default JSON content type
      },
    });
    toast.success('Successfully Registered');
    return response.data;
  } catch (error) {
    toast.error('Error creating the course.');
    throw error;
  }
};



//==================== CRUD FOR TABLE ====================

export const fetchAllTable = async () => {
  try {
    const response = await apiClient.get(routes.GetAllTable);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTableById = async (id) => {
  try {
    const response = await apiClient.get(routes.GetTableByRoomId + '/' + id);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllTableDetails = async () => {
  try {
    const response = await apiClient.get(routes.GetAllTableDetails);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const createTable = async (data) => {
  try {
    const response = await apiClient.post(routes.SaveTableInformation, data);
    toast.success('Table Created successfully');
    return response.data;
  } catch (error) {
    toast.error('Error creating table.');
    console.log(error)
    throw error;
  }
};

export const updateTable = async (id, data) => {
  try {
    const response = await apiClient.put(routes.UpdateTableInformation + '/' + id, data);
    toast.success('Table Updated successfully');
    return response.data;
  } catch (error) {
    toast.error('Error update table.');
    console.log(error)
    throw error;
  }
};


//==================== TABLE ACTIVE STATUS ====================
export const updateTableLastTime = async (id) => {
  try {
    const response = await apiClient.put(routes.UpdateTableLastActiveTimeStatus + '/' + id)
    // toast.success('Table Time Updated successfully');
    return response;
  } catch (error) {
    toast.error('Error update table time status.');
    console.log(error)
    throw error;
  }
}


//==================== CRUD FOR TABLE MEMBER ====================
export const FetchTableMembersDetailsById = async (id) => {
  try {
    const response = await apiClient.get(routes.GetTableMembersDetailsById + '/' + id);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const addTableMember = async (data) => {
  try {
    const response = await apiClient.post(routes.AddTableMember, data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const removeTableMember = async (memberId, roomId) => {
  try {
    await apiClient.delete(`${routes.RemoveTableMember}/${memberId}/${roomId}`);
    toast.success('Successfully Left the table!');
  } catch (error) {
    toast.error('Error Left the table');
    throw error;
  }
}