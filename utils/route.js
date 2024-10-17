export const routes = {
  login: `${process.env.NEXT_PUBLIC_API_URL}/Login`,
  signup: `${process.env.NEXT_PUBLIC_API_URL}/UserSetup`,

  // University routes
  GetAllUniversity: '/University/GetAllUniversityList',
  GetUniversityById: '/University/GetUniversityBy',
  CreateUniversity: '/University/SaveUniversityData',
  UpdateUniversity: '/University/UpdateUniversityData',
  DeleteUniversity: '/University/DeleteUniversityByUniversityId',

  // Section routes
  GetAllSection: '/Section/GetAllSections',
  GetSectionById: '/Section/GetAllSectionsById',
  CreateSection: '/Section/SaveSectionData',
  UpdateSection: '/Section/UpdateSectionData',
  DeleteSection: '/Section/DeleteSectionData',

  // Course routes
  GetAllCourse: '/Course/GetAllCourse',
  GetCourseById: '/Course/GetCourseByCourseId',
  CreateCourse: '/Course/SaveCourse',
  UpdateCourse: '/Course/UpdateCourse',
  DeleteCourse: '/Course/DeleteCourseByCourseId',

  // Course Section
  GetAllCourseSectionMapping: '/Course/GetAllCourseSection',
  saveCourseSectionMapping: '/Course/saveCourseSection',
  UpdateCourseSectionData: '/Course/UpdateCourseSectionData',
  GetAllCourseSectionDetails: '/Course/GetAllCourseSectionDetails',
  GetCourseSectionDetailsById: '/Course/GetCourseSectionDetailsById',
  GetAllStudentCourseSectionDetails: '/Course/GetAllStudentCourseSectionDetails',
  GetStudentCourseSectionDetailsById: '/Course/GetStudentCourseSectionDetailsById',

  // User Registration
  GetAllUser: '/UserSetup/GetAllUserSetup',
  CreateUser: '/UserSetup/SaveRegistrationSetup',

  // User Profile
  GetUserProfileById: '/UserProfile/GetUserProfileById?UserId=',
  SaveUserProfile: '/UserProfile/SaveUserProfile',
  UpdateProfilePicture: '/UserProfile/UpdateProfilePicture/',

  // Tables
  GetAllTable: '/Table/GetAllTable',
  GetTableByRoomId: '/Table/GetTableByRoomId',
  SaveTableInformation: '/Table/SaveTableInformation',
  UpdateTableInformation: '/Table/UpdateTableInformation',
  UpdateTablePicture: '/Table/UpdateTablePicture',
  DeleteTableData: '/Table/DeleteTableData',
  GetAllTableDetails: '/Table/GetAllTableDetails',
  GetTableDetailById: '/Table/GetTableDetailById',

  // Table Member
  AddTableMember: '/Table/AddTableMember',
  UpdateAddTableMember: '/Table/UpdateTableMember',
  GetTableMembersDetailsById: '/Table/GetTableMembersDetailsById',

};
