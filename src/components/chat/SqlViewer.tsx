    import { useState } from "react";

    import {
        Accordion,
        AccordionDetails,
        AccordionSummary,
        Box,
        IconButton,
        Snackbar,
        Tooltip,
        Typography,
    } from "@mui/material";

    import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
    import ContentCopyIcon from "@mui/icons-material/ContentCopy";

    interface Props {
        sql: string;
    }

    export default function SqlViewer({ sql }: Props) {
        const [copied, setCopied] = useState(false);

        if (!sql) return null;

        const copySQL = async () => {
            try {
                await navigator.clipboard.writeText(sql);
                setCopied(true);
            } catch (error) {
                console.error(error);
            }
        };

        return (
            <>
                <Accordion
                    defaultExpanded
                    sx={{
                        mt: 2,
                        borderRadius: 2,
                        overflow: "hidden",
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600}>
                            Generated SQL
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Box
                            sx={{
                                position: "relative",
                                bgcolor: "#1e1e1e",
                                color: "#d4d4d4",
                                borderRadius: 2,
                                p: 2,
                                fontFamily: "monospace",
                                fontSize: 14,
                                overflowX: "auto",
                            }}
                        >
                            <Tooltip title="Copy SQL">
                                <IconButton
                                    onClick={copySQL}
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        color: "white",
                                    }}
                                >
                                    <ContentCopyIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>

                            <pre
                                style={{
                                    margin: 0,
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {sql}
                            </pre>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Snackbar
                    open={copied}
                    autoHideDuration={1500}
                    onClose={() => setCopied(false)}
                    message="SQL copied to clipboard"
                />
            </>
        );
    }