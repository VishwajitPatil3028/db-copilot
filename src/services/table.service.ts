import api from "../api/axios";
import type { DatabaseTable, TableResponse } from "../types/table";

export const TableService = {
  async getTables(): Promise<DatabaseTable[]> {
    const response = await api.get("/tables");
    return response.data;
  },

  async getTable(tableName: string): Promise<TableResponse> {
    const response = await api.get(`/table/${tableName}`);
    return response.data;
  },
};