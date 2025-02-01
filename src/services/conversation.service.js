import axiosInstance from "@/utils/axiosInstance";

const saveConversation = async (conversation) => {
  try {
    await axiosInstance.post("/save", { conversation });
    // Ideally would show a success toast here based on 200 response
  } catch (err) {
    console.log(err);
    // Ideally would show an error toast here and log the error to monitoring service like bugsnag
  }
};

export { saveConversation };
