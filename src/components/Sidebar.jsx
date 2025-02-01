import { Box, Text } from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useColorMode } from "./ui/color-mode";

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const conversations = useSelector((state) => state.conversations.conversations);

  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const conversationId = pathParts[pathParts.length - 1];

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerRoot placement="start" open={isOpen} onClose={closeDrawer}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <MenuIcon color={colorMode === "dark" ? "white" : "black"} style={drawerIconStyles} onClick={toggleDrawer} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Conversations</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {conversations.length > 0 ? (
            conversations.map((conversation) => (
              <Link key={conversation.id} to={`/conversation/${conversation.id}`} onClick={closeDrawer}>
                <Box
                  rounded={4}
                  p={2}
                  bgColor={conversationId === conversation.id ? "gray.100" : "white"}
                  _dark={{ bgColor: conversationId === conversation.id ? "gray.800" : "gray.950" }}
                >
                  {conversation?.messages?.[0]?.message?.split(" ").slice(0, 4).join(" ") +
                    (conversation?.messages?.[0]?.message.split(" ").length > 4 ? "..." : "") || conversation.id}
                </Box>
              </Link>
            ))
          ) : (
            <Text>No conversations</Text>
          )}
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
        <DrawerCloseTrigger onClick={() => setIsOpen(false)} />
      </DrawerContent>
    </DrawerRoot>
  );
};

const drawerIconStyles = {
  position: "absolute",
  top: "4px",
  left: "4px",
  margin: "4px",
  cursor: "pointer",
};

export default Sidebar;
