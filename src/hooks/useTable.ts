import { useQuery } from "@tanstack/react-query";
import { TableService } from "../services/table.service";

export function useTable(tableName: string) {
  return useQuery({
    queryKey: ["table", tableName],
    queryFn: () => TableService.getTable(tableName),
    enabled: !!tableName,
  });
}