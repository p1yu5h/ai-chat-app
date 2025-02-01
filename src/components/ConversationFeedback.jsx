import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { updateConversationFeedback } from "@/redux/slices/conversationsSlice";
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { Star } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ConversationFeedback = ({ onDismiss }) => {
  const dispatch = useDispatch();
  const { conversationId } = useParams();
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!rating) {
      alert("Please select a rating.");
      return;
    }

    dispatch(
      updateConversationFeedback({
        feedback: { feedback: feedback.trim(), rating },
        conversationId,
      })
    );
    onDismiss();
  };

  return (
    <DialogRoot open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Text mb={4}>How would you rate this conversation?</Text>
          <Flex gap={2} mb={4}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Box
                key={star}
                cursor="pointer"
                onClick={() => setRating(star)}
                color={rating && rating >= star ? "yellow.400" : "gray.300"}
              >
                <Star size={32} fill={rating && rating >= star ? "currentColor" : "none"} />
              </Box>
            ))}
          </Flex>
          <Textarea
            placeholder="Additional feedback (optional)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            resize="vertical"
          />
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={onDismiss}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Save
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default ConversationFeedback;
