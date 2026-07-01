import { useMemo } from "react";

import { MaterialReactTable } from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";

import { Box, Typography } from "@mui/material";

interface Props {
    data: Record<string, any>[];
}

export default function ResultTable({ data }: Props) {
    const columns = useMemo<MRT_ColumnDef<Record<string, any>>[]>(() => {
        if (!data.length) return [];

        return Object.keys(data[0]).map((key) => ({
            accessorKey: key,
            header: key
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase()),
        }));
    }, [data]);

    if (!data.length) {
        return (
            <Typography
                color="text.secondary"
                sx={{ mt: 2 }}
            >
                No records found.
            </Typography>
        );
    }

    return (
        <Box
            sx={{
                mt: 3,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    mb: 2,
                }}
            >
                Query Result ({data.length} rows)
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    overflowX: "auto",
                }}
            >

                <MaterialReactTable
                    columns={columns}
                    data={data}
                    layoutMode="grid"
                    enableColumnResizing
                    enableDensityToggle={false}
                    enableColumnOrdering
                    enableColumnFilters
                    enableSorting
                    enablePagination
                    enableFullScreenToggle
                    enableHiding
                    enableStickyHeader
                    initialState={{
                        pagination: {
                            pageIndex: 0,
                            pageSize: 10,
                        },
                    }}
                    muiTableContainerProps={{
                        sx: {
                            maxHeight: 400,
                        },
                    }}
                />
            </Box>
        </Box>
    );
}