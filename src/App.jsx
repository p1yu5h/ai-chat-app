import { ChakraProvider, defaultSystem, Flex,  } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ConversationPage from "./pages/ConversationPage";
import HomePage from "./pages/HomePage";
import store, { persistor } from "./redux/store";
import { ColorModeProvider } from "./components/ui/color-mode";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Router basename="/ai-chat-app">
            <Sidebar />
            <Flex direction="column" height="100vh" width="100%" p={2} bg="gray.50" _dark={{bg: "gray.800"}}>
              <Header />
              <Flex flexGrow={1} overflow="hidden">
                <Routes >
                  <Route path="/" element={<HomePage />} />
                  <Route path="/conversation" element={<Navigate to="/" />} />
                  <Route path="/conversation/:conversationId" element={<ConversationPage />} />
                  <Route path="/conversation/public/:conversationId" element={<ConversationPage viewOnly />} />
                </Routes>
              </Flex>
            </Flex>
          </Router>
        </ColorModeProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
