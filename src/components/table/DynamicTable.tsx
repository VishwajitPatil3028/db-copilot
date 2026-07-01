import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";

interface Props {
    columns: string[];
    rows: Record<string, any>[];
}

export default function DynamicTable({
    columns,
    rows,
}: Props) {
    const tableColumns = useMemo<MRT_ColumnDef<Record<string, any>>[]>(
        () =>
            columns.map((column) => ({
                accessorKey: column,
                header: column
                    .replaceAll("_", " ")
                    .toUpperCase(),
            })),
        [columns]
    );

    return (
        <MaterialReactTable
            columns={tableColumns}
            data={rows}
            enableSorting
            enableColumnFilters
            enablePagination
            enableGlobalFilter
            enableDensityToggle={false}
            enableStickyHeader
            enableFullScreenToggle
        />
    );
}