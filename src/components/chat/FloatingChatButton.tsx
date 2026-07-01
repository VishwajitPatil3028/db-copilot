import { Fab } from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";

import { useAppStore } from "../../store/appStore";

export default function FloatingChatButton() {
    const { openChat } = useAppStore();

    return (
        <Fab
            color="primary"
            onClick={openChat}
            size="large"
            sx={{
                position: "fixed",
                right: 30,
                bottom: 30,
                boxShadow: 6
            }}
        >
            <SmartToyIcon />
        </Fab>
    );
}
