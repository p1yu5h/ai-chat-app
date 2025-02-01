import { Box, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ConversationFeedback from "@/components/ConversationFeedback";
import ConversationFeedbackSummary from "@/components/ConversationFeedbcakSummary";
import MessageInput from "@/components/MessageInput";
import { addMessage, updateConversationStatus, updateMessageFeedback } from "@/redux/slices/conversationsSlice";
import { saveConversation } from "@/services/conversation.service";

const ConversationPage = () => {
  const dispatch = useDispatch();
  const { conversationId } = useParams();

  const conversations = useSelector((state) => state.conversations.conversations);
  const conversation = conversations.find(({ id }) => id === conversationId);
  const { messages } = conversation || { messages: [] };

  const messagesEndRef = useRef(null); // Reference for auto-scrolling

  const [isLoading, setIsLoading] = useState(false);
  const [hoveredMessageId, setHoveredMessageId] = useState(null);
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);

  const handleSendMessage = useCallback(
    (message) => {
      if (message.trim() !== "" && !isLoading) {
        const newMessage = {
          id: uuidv4(),
          message,
          feedback: null,
          conversationId,
          from: "user",
        };

        dispatch(addMessage(newMessage));
        setIsLoading(true);

        // Random value between 500ms and 2000ms
        const randomTimeout = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;

        // Simulate AI response
        setTimeout(() => {
          const responseMessage = {
            id: uuidv4(),
            message: "This is a response",
            feedback: null,
            conversationId,
            from: "ai",
          };
          dispatch(addMessage(responseMessage));
          setIsLoading(false);
        }, randomTimeout);
      }
    },
    [dispatch, conversationId, isLoading]
  );

  // Auto scroll to the bottom whenever a new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  const handleMessageFeedback = (messageId, feedback) => {
    if (conversation?.status !== "active") return;

    dispatch(updateMessageFeedback({ conversationId, messageId, feedback }));
  };

  const handleEndConversation = async () => {
    await saveConversation(conversation);
    dispatch(updateConversationStatus({ conversationId, status: "ended" }));
    setShowFeedbackPopup(true);
  };

  return (
    <Flex
      direction="column"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="flex-start"
      bg="gray.50"
      position="relative"
    >
      {showFeedbackPopup && <ConversationFeedback onDismiss={() => setShowFeedbackPopup(false)} />}

      <VStack
        spacing={5}
        mt={20}
        mb={10}
        align="stretch"
        flex="1"
        width="100%"
        pl={4}
        pr={4}
        overflowY="auto"
        paddingBottom="80px"
      >
        {messages?.map((message) => (
          <Flex
            key={message.id}
            justifyContent={message.from === "ai" ? "flex-start" : "flex-end"}
            onMouseEnter={() => message.from === "ai" && setHoveredMessageId(message.id)}
            onMouseLeave={() => setHoveredMessageId(null)}
            position="relative"
          >
            <Box
              p={3}
              bg={message.from === "ai" ? "gray.200" : "blue.500"}
              color={message.from === "ai" ? "black" : "white"}
              borderRadius="lg"
              maxWidth="80%"
              mt={2}
              mb={message.from === "ai" ? 8 : 4}
              boxShadow="md"
            >
              <Text>{message.message}</Text>
            </Box>

            {message.from === "ai" && hoveredMessageId === message.id && (
              <Flex position="absolute" top={16} left={2} gap={2}>
                <ThumbsDown
                  cursor="pointer"
                  color={message.feedback === "negative" ? "red" : "black"}
                  fill={message.feedback === "negative" ? "red" : "none"}
                  onClick={() => handleMessageFeedback(message.id, "negative")}
                />
                <ThumbsUp
                  cursor="pointer"
                  color={message.feedback === "positive" ? "green" : "black"}
                  fill={message.feedback === "positive" ? "green" : "none"}
                  onClick={() => handleMessageFeedback(message.id, "positive")}
                />
              </Flex>
            )}
          </Flex>
        ))}
        <div ref={messagesEndRef} /> {/* This will be the scroll target */}
        {isLoading && (
          <Flex justifyContent="flex-start" gap={4} alignItems="center" width="100%" mt={4}>
            <Spinner size="lg" color="blue.500" />
            <Text>Generating response...</Text>
          </Flex>
        )}
      </VStack>

      {/* Fixed MessageInput at the bottom */}
      {conversation?.status === "active" ? (
        <Box position="fixed" bottom={0} left={0} right={0} p={3} bg="white" boxShadow="md">
          <MessageInput
            placeholder="Type your message to the AI..."
            disabled={isLoading}
            handleSendMessage={handleSendMessage}
            handleEndConversation={handleEndConversation}
          />
        </Box>
      ) : (
        <ConversationFeedbackSummary
          rating={conversation?.feedback?.rating}
          feedback={conversation?.feedback?.feedback}
        />
      )}
    </Flex>
  );
};

export default ConversationPage;
