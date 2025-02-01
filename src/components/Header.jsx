import { Button, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <Flex justifyContent="flex-end" alignItems="center">
      {location.pathname !== "/" && (
        <Link to="/">
          <Button colorScheme="teal">Start New Chat</Button>
        </Link>
      )}
    </Flex>
  );
}

export default Header;
