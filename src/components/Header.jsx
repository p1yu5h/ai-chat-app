import { Button, Flex, IconButton } from "@chakra-ui/react";
import { Share } from "lucide-react";
import React, { Suspense, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SharePopup = React.lazy(() => import("./SharePopup"));

function Header() {
  const location = useLocation();

  const [showSharePopup, setShowSharePopup] = useState();
  const isHomePage = location.pathname === "/"; 
  const isPublicPage = location.pathname.includes("public");

  return (
    <Flex justifyContent="flex-end" alignItems="center" gap={4}>
      {showSharePopup && (
        <Suspense loading={<div>Loading...</div>}>
          <SharePopup onDismiss={() => setShowSharePopup(false)} />
        </Suspense>
      )}
      {!isHomePage && !isPublicPage && (
        <IconButton variant="outline" onClick={() => setShowSharePopup(true)}>
          <Share />
        </IconButton>
      )}
      {!isHomePage && !isPublicPage && (
        <Link to="/">
          <Button colorScheme="teal">Start New Chat</Button>
        </Link>
      )}
    </Flex>
  );
}

export default Header;
