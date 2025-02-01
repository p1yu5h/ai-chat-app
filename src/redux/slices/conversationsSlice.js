import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addConversation: (state, action) => {
      const conversation = {
        id: action.payload,
        messages: [],
        feedback: null,
        status: "active",
      };
      state.conversations.push(conversation);
    },
    updateConversationStatus: (state, action) => {
      const conversationId = action.payload.conversationId;
      const conversation = state.conversations.find((item) => item.id === conversationId);
      if (conversation) {
        conversation.status = action.payload.status;
      }
    },
    updateConversationFeedback: (state, action) => {
      const { conversationId, feedback } = action.payload;
      const conversation = state.conversations.find((convo) => convo.id === conversationId);
      if (conversation) {
        conversation.feedback = feedback;
      }
    },
    addMessage: (state, action) => {
      const conversationId = action.payload.conversationId;
      const conversation = state.conversations.find((item) => item.id === conversationId);
      if (conversation) {
        conversation.messages.push(action.payload);
      }
    },
    updateMessageFeedback: (state, action) => {
      const conversationId = action.payload.conversationId;
      const messageId = action.payload.messageId;
      const conversation = state.conversations.find((item) => item.id === conversationId);
      if (conversation) {
        const message = conversation.messages.find((item) => item.id === messageId);
        message.feedback = action.payload.feedback;
      }
    },
  },
});

export const {
  addConversation,
  updateConversationStatus,
  addMessage,
  updateMessageFeedback,
  updateConversationFeedback,
} = conversationsSlice.actions;

export default conversationsSlice.reducer;
