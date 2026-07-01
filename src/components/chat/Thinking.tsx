import {
    Box,
    CircularProgress,
    Typography,
} from "@mui/material";

export default function Thinking() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 3,
            }}
        >
            <CircularProgress size={20} />

            <Typography>
                DB Copilot is analyzing your database...
            </Typography>
        </Box>
    );
}