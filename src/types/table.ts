export interface DatabaseTable {
  name: string;
  display_name: string;
}

export interface TableResponse {
  columns: string[];
  rows: Record<string, any>[];
  total: number;
}