import { Link } from "react-router-dom";
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {StyleContext} from "../providers/StyleProvider.jsx";

export function Menu() {
    const { dispatch } = useContext(StyleContext);

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <Flex as="nav" margin="10px">
            <Box as="ul" listStyleType="none" display="flex">
                <Box as="li" mr="1rem">
                    <Link to="/">
                        <Text fontSize="1.2rem" fontWeight="bold" textDecoration="none">Home</Text>
                    </Link>
                </Box>
                <Box as="li" mr="1rem">
                    <Link to="/task-list">
                        <Text fontSize="1.2rem" fontWeight="bold" textDecoration="none">Task List</Text>
                    </Link>
                </Box>
                <Box as="li" mr="1rem">
                    <Link to="/about-us">
                        <Text fontSize="1.2rem" fontWeight="bold" textDecoration="none">About Us</Text>
                    </Link>
                </Box>
                <Box as="li" mr="1rem">
                    <Button onClick={toggleTheme} fontSize="1.2rem" fontWeight="bold" textDecoration="none" size="sm" colorScheme='green' variant='outline'>Toggle theme 🌗</Button>
                </Box>
            </Box>
        </Flex>
    );
}
