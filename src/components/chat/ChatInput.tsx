import { useState } from "react";

import {
    Box,
    IconButton,
    Paper,
    TextField,
    Tooltip,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

interface Props {
    onSend: (question: string) => void;
    loading: boolean;
}

export default function ChatInput({
    onSend,
    loading,
}: Props) {
    const [question, setQuestion] = useState("");

    const handleSend = () => {
        const text = question.trim();

        if (!text || loading) return;

        onSend(text);

        setQuestion("");
    };

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                borderRadius: 0,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    minRows={1}
                    maxRows={5}
                    placeholder="Ask anything about your database..."
                    value={question}
                    disabled={loading}
                    onChange={(e) =>
                        setQuestion(e.target.value)
                    }
                    onKeyDown={(e) => {
                        if (
                            e.key === "Enter" &&
                            !e.shiftKey
                        ) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />

                <Tooltip title="Send">
                    <span>
                        <IconButton
                            color="primary"
                            onClick={handleSend}
                            disabled={
                                loading ||
                                !question.trim()
                            }
                        >
                            <SendIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Box>
        </Paper>
    );
}