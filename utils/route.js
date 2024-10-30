export const routes = {
  login: `${process.env.NEXT_PUBLIC_API_URL}/Login`,
  signup: `${process.env.NEXT_PUBLIC_API_URL}/UserSetup`,

  // University Routes
  GetAllUniversity: '/University/GetAllUniversityList',
  GetUniversityById: '/University/GetUniversityBy',
  CreateUniversity: '/University/SaveUniversityData',
  UpdateUniversity: '/University/UpdateUniversityData',
  DeleteUniversity: '/University/DeleteUniversityByUniversityId',

  // Section Routes
  GetAllSection: '/Section/GetAllSections',
  GetSectionById: '/Section/GetAllSectionsById',
  CreateSection: '/Section/SaveSectionData',
  UpdateSection: '/Section/UpdateSectionData',
  DeleteSection: '/Section/DeleteSectionData',

  // Course Routes
  GetAllCourse: '/Course/GetAllCourse',
  GetCourseById: '/Course/GetCourseByCourseId',
  CreateCourse: '/Course/SaveCourse',
  UpdateCourse: '/Course/UpdateCourse',
  DeleteCourse: '/Course/DeleteCourseByCourseId',

  // Course Section Binding Routes
  saveCourseSectionBinding: '/Course/SaveCourseSectionBinding',
  updateCourseSectionBinding: '/Course/UpdateCourseSectionBinding',
  GetAllCourseSectionDetails: '/Course/GetAllCourseSectionBindingDetails',
  GetCourseSectionDetailsById: '/Course/GetCourseSectionBindingDetailsById',

  // Student Course Section Binding Routes
  SaveStudentCourseSectionBinding: '/Course/SaveStudentCourseSectionBinding',
  GetAllStudentCourseSectionDetails: '/Course/GetAllStudentCourseSectionBindingDetails',
  GetStudentCourseSectionBindingDetailsById: '/Course/GetStudentCourseSectionBindingDetailsById',

  // User Registration Routes
  GetAllUser: '/UserSetup/GetAllUserSetup',
  GetAllUserSetupByUserId: '/UserSetup/GetAllUserSetupByUserId',
  CreateUser: '/UserSetup/SaveRegistrationSetup',
  UpdateRegistrationUserRegistrationData: '/UserSetup/UpdateRegistrationUserRegistrationData',
  UpdateUserPassword: '/UserSetup/UpdateUserPassword',


  // User Profile Routes
  GetUserProfileById: '/UserProfile/GetUserProfileById?UserId=',
  SaveUserProfile: '/UserProfile/SaveUserProfile',
  UpdateProfilePicture: '/UserProfile/UpdateProfilePicture',


  // Tables Routes
  GetAllTable: '/Table/GetAllTable',
  GetTableByRoomId: '/Table/GetTableByRoomId',
  SaveTableInformation: '/Table/SaveTableInformation',
  UpdateTableInformation: '/Table/UpdateTableInformation',
  UpdateTablePicture: '/Table/UpdateTablePicture',
  DeleteTableData: '/Table/DeleteTableData',
  GetAllTableDetails: '/Table/GetAllTableDetails',
  GetTableDetailById: '/Table/GetTableDetailById',

  // Table Last Active
  UpdateTableLastActiveTimeStatus: '/Table/UpdateTableLastActiveTimeStatus',

  // Table Member Routes
  AddTableMember: '/Table/AddTableMember',
  UpdateAddTableMember: '/Table/UpdateTableMember',
  GetTableMembersDetailsById: '/Table/GetTableMembersDetailsById',
  RemoveTableMember: '/Table/RemoveTableMember',


  // Friends Routes
  AddFriend: '/Friend/AddFriend',
  GetPendingFriendListByMainId: '/Friend/GetPendingFriendListByMainId',
  UpdateFriendRequest: '/Friend/UpdateFriendRequest',
  GetAcceptedFriendListByMainId: '/Friend/GetAcceptedFriendListByMainId',
  GetSuggestPersonListByMainId: '/Friend/GetSuggestPersonListByMainId',
};
