import api from "../api/axios";
import type { ChatRequest, ChatResponse } from "../types/chat";

export const ChatService = {
  async ask(request: ChatRequest): Promise<ChatResponse> {
    const response = await api.post("/chat/", request);
    return response.data;
  },
};