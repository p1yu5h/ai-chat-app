import { Box, Flex, Text } from "@chakra-ui/react";
import { Star } from "lucide-react";

// eslint-disable-next-line react/prop-types
const ConversationFeedbackSummary = ({ rating, feedback }) => {
  return (
    <Box position="fixed" bottom={0} left={0} right={0} p={4} bg="white" _dark={{ bg: "gray.900" }} boxShadow="md">
      <Text fontWeight="bold" mb={2}>
        This conversation has ended.
      </Text>
      {rating && (
        <>
          <Text>Your feedback for this conversation:</Text>

          {/* 5-star rating display */}
          <Flex mt={2} mb={3}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Box key={star} color={rating >= star ? "yellow.400" : "gray.300"}>
                <Star size={24} fill={rating >= star ? "currentColor" : "none"} />
              </Box>
            ))}
          </Flex>

          {/* Display text feedback */}
          {feedback ? (
            <Text color="gray.600" _dark={{ color: "gray.400" }} fontStyle="italic">
              &quot;{feedback}&quot;
            </Text>
          ) : (
            <Text color="gray.500">No additional feedback provided.</Text>
          )}
        </>
      )}
    </Box>
  );
};

export default ConversationFeedbackSummary;
