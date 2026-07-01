import { useEffect, useRef, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useAppStore } from "../../store/appStore";
import { useChat } from "../../hooks/useChat";

import ChatInput from "./ChatInput";
import SqlViewer from "./SqlViewer";
import ResultTable from "./ResultTable";
import SuggestedQuestions from "./SuggestedQuestions";

import type { ChatResponse } from "../../types/chat";
import Thinking from "./Thinking";

export default function ChatDrawer() {
    const chatOpen = useAppStore((state) => state.chatOpen);
    const closeChat = useAppStore((state) => state.closeChat);

    const chat = useChat();

    const [history, setHistory] = useState<ChatResponse[]>([]);

    const bottomRef = useRef<HTMLDivElement>(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [history, chat.isPending]);

    async function askQuestion(question: string) {
        if (!question.trim()) return;

        try {
            const response = await chat.mutateAsync({
                session_id: "user_123",
                question,
            });

            setHistory((prev) => [...prev, response]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Drawer
            anchor="right"
            open={chatOpen}
            onClose={closeChat}
            slotProps={{
                paper: {
                    sx: {
                        width: isMobile ? "100%" : 520,
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                {/* Header */}

                <Box
                    sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "primary.main",
                        color: "white",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 700 }}
                    >
                        🤖 DB Copilot
                    </Typography>

                    <Box sx={{ flex: 1 }} />

                    <Button
                        color="inherit"
                        onClick={() => setHistory([])}
                    >
                        Clear
                    </Button>

                    <IconButton
                        color="inherit"
                        onClick={closeChat}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider />

                {/* Chat Area */}

                <Box
                    sx={{
                        flex: 1,
                        p: 2,
                        overflow: "auto",
                    }}
                >
                    {history.length === 0 && (
                        <>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 700 }}
                            >
                                Welcome 👋
                            </Typography>

                            <Typography
                                color="text.secondary"
                                sx={{ mt: 1 }}
                            >
                                Ask anything about your database.
                            </Typography>

                            <SuggestedQuestions
                                onSelect={askQuestion}
                            />
                        </>
                    )}

                    {history.map((item, index) => (
                        <Box
                            key={index}
                            sx={{ mb: 5 }}
                        >
                            {/* Question */}

                            <Typography
                                color="primary"
                                sx={{ fontWeight: 700 }}
                            >
                                👤 Question
                            </Typography>

                            <Typography
                                sx={{ mb: 2 }}
                            >
                                {item.question}
                            </Typography>

                            {/* Answer */}

                            <Typography
                                color="success.main"
                                sx={{ fontWeight: 700 }}
                            >
                                🤖 Answer
                            </Typography>

                            <Typography
                                sx={{ mb: 2 }}
                            >
                                {item.answer}
                            </Typography>

                            {/* SQL */}

                            <SqlViewer
                                sql={item.generated_sql}
                            />

                            {/* Result */}

                            <Box
                                sx={{
                                    width: "100%",
                                    overflowX: "auto",
                                }}
                            >
                                <ResultTable data={item.data} />
                            </Box>

                            <Divider sx={{ mt: 3 }} />
                        </Box>
                    ))}

                    {chat.isPending && (
                        <Thinking />
                    )}

                    <div ref={bottomRef} />
                </Box>

                <Divider />

                <ChatInput
                    onSend={askQuestion}
                    loading={chat.isPending}
                />
            </Box>
        </Drawer>
    );
}