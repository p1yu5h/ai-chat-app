import { ChakraProvider, defaultSystem, Flex } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ConversationPage from "./pages/ConversationPage";
import HomePage from "./pages/HomePage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider value={defaultSystem}>
        <Router>
          <Sidebar />
          <Flex direction="column" height="100vh" width="100%" p={2} bg="gray.50">
            <Header />
            <Flex flexGrow={1} overflow="hidden">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/conversation" element={<Navigate to="/" />} />
                <Route path="/conversation/:conversationId" element={<ConversationPage />} />
              </Routes>
            </Flex>
          </Flex>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
