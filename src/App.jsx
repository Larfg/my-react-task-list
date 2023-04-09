import {Header} from "./components/Header.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./components/Menu.jsx";
import {HomePage} from "./pages/HomePage.jsx";
import {AboutUsPage} from "./pages/AboutUsPage.jsx";
import {TaskListPage} from "./pages/TaskListPage.jsx";
import {Box, ChakraProvider, Divider, extendTheme} from "@chakra-ui/react";
import {useContext} from "react";
import {StyleContext} from "./providers/StyleProvider.jsx";


function App() {

    const { state } = useContext(StyleContext);

    const theme = extendTheme({
        fonts: {
            body: "Comic Sans MS, sans-serif",
            heading: "Comic Sans MS, sans-serif",
        },styles: {
            global: {
                "html, body": {
                    color: state.textColor
                },
            },
        },
    })

    return (
            <ChakraProvider theme={theme} >
                <Box bg={state.themeColor} h="100vh">
                    <div className="App">
                        <BrowserRouter>
                            <Header/>
                            <Menu/>
                            <Divider
                                borderWidth="2px"
                                height="4px"
                                orientation="horizontal"
                                my="1rem"
                                borderColor="black"
                            />
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/about-us" element={<AboutUsPage/>}/>
                                <Route path="/task-list" element={<TaskListPage/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </Box>
            </ChakraProvider>
    )
}

export default App
