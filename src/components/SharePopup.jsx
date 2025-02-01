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
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { Copy } from "lucide-react";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SharePopup = ({ onDismiss }) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const conversationId = pathParts[pathParts.length - 1];

  // Pls note: this is for gh pages deployment, for running locally remove "/ai-chat-app"
  const publicLink = `${window.location.origin}/ai-chat-app/conversation/public/${conversationId}`;

  const copyLink = () => {
    navigator.clipboard
      .writeText(publicLink)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <DialogRoot open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this conversation</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Flex gap={4}>
            <Text mb={4}>{publicLink}</Text>
            <IconButton onClick={copyLink}>
              <Copy />
            </IconButton>
          </Flex>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={onDismiss}>
              Cancel
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger onClick={onDismiss} />
      </DialogContent>
    </DialogRoot>
  );
};

export default SharePopup;
