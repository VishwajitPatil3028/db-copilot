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
                bgcolor: "#f5f7fb",
            }}
        >
            <Header />

            <Navigation />

            <Box
                component="main"
                sx={{
                    p: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },
                }}
            >
                <Outlet />
            </Box>

            <FloatingChatButton />

            <ChatDrawer />
        </Box>
    );
}