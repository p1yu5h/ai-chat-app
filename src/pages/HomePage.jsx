import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { addConversation } from "@/redux/slices/conversationsSlice";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startConversation = useCallback(() => {
    const conversationId = uuidv4();
    dispatch(addConversation(conversationId));
    navigate(`/conversation/${conversationId}`);
  }, [dispatch, navigate]);

  return (
    <Flex direction="column" width="100vw" height="100vh" alignItems="center" justifyContent="center" bg="gray.50">
      <VStack spacing={5}>
        <Box textAlign="center">
          <Text fontSize="3xl" fontWeight="bold">
            Welcome to the AI Chat App!
          </Text>
          <Text fontSize="lg" color="gray.600">
            Start a conversation and provide your valuable feedback.
          </Text>
        </Box>
        {/* <Link to="/conversation"> */}
        <Button colorScheme="teal" size="lg" onClick={startConversation}>
          Start Chatting
        </Button>
        {/* </Link> */}
      </VStack>
    </Flex>
  );
};

export default HomePage;
