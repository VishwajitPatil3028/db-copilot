import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";

import FloatingChatButton from "../chat/FloatingChatButton";
import ChatDrawer from "../chat/ChatDrawer";

export default function DashboardLayout() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
            }}
        >
            <Header />

            <Navigation />

            <Box
                sx={{
                    p: 3,
                }}
            >
                <Outlet />
            </Box>

            <FloatingChatButton />

            <ChatDrawer />
        </Box>
    );
}