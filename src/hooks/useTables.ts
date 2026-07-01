import { useQuery } from "@tanstack/react-query";
import { TableService } from "../services/table.service";

export function useTables() {
  return useQuery({
    queryKey: ["tables"],
    queryFn: TableService.getTables,
  });
}