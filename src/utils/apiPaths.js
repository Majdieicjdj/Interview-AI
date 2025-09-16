export const BASE_URL = "https://interview-ai-backend-1-gcm5.onrender.com";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",//Signup
        LOGIN: "/api/auth/login", //Authenticate user and return JWT token
        GET_PROFILE: "/api/auth/profile", // Get logged in user details
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image", //Upload user profile image
    },

    AI: {
        GENERATE_QUESTIONS: "/api/ai/generate-questions", //Generate interview questions and answers using gemini 
        GENERATE_EXPLANATION: "/api/ai/generate-explanation", //Generate concept explanation using gemini
    },

    SESSION: {
        CREATE_SESSION: "/api/sessions", //Create a new session with questions
        GET_ALL: "/api/sessions/my-sessions", //Get all sessions created by the user
        GET_ONE: (id) => `/api/sessions/${id}`, //Get session details with questions
        DELETE_SESSION: (id) => `/api/sessions/${id}`, //Delete session
    },

    QUESTION: {
        ADD_TO_SESSION: "/api/questions/add", //Add question to session
        PIN: (id) => `/api/questions/${id}/pin`, //Pin or Unpin a question
        UPDATE_NOTE: (id) => `/api/questions/${id}/note`, //Update/Add a note to a question
        
    },
    
};