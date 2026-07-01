import {
    AppBar,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";

export default function Header() {
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={1}
        >
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: "#1565C0",
                    }}
                >
                    🤖 DB Copilot
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    AI Powered Database Explorer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}