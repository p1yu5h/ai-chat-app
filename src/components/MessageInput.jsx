import { Button, Flex, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const MessageInput = ({ disabled, placeholder, handleSendMessage, handleEndConversation }) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Flex gap={4} align="center">
      <Textarea
        disabled={disabled}
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        size="md"
        onKeyDown={handleKeyDown}
      />
      <Button
        colorScheme="teal"
        onClick={() => {
          handleSendMessage(message);
          setMessage("");
        }}
      >
        Send Message
      </Button>
      <Button bgColor="red" onClick={handleEndConversation}>
        End Conversation
      </Button>
    </Flex>
  );
};

export default React.memo(MessageInput);
