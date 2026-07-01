export interface ChatRequest {
  session_id: string;
  question: string;
}

export interface ChatResponse {
  question: string;
  answer: string;
  generated_sql: string;
  data: Record<string, any>[];
}