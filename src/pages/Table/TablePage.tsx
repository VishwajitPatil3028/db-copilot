import {
    Alert,
    Box,
    CircularProgress,
    Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";

import { useTable } from "../../hooks/useTable";
import DynamicTable from "../../components/table/DynamicTable";

export default function TablePage() {
    const { tableName = "" } = useParams();

    const {
        data,
        isLoading,
        error,
    } = useTable(tableName);

    if (isLoading) {
        return (
            <Box
                sx={{
                    textAlign: "center",
                    mt: 5,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Alert severity="error">
                Failed to load table
            </Alert>
        );
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                {tableName}
            </Typography>

            <DynamicTable
                columns={data.columns}
                rows={data.rows}
            />
        </>
    );
}