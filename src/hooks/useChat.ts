import { useMutation } from "@tanstack/react-query";
import { ChatService } from "../services/chat.service";

export function useChat() {
  return useMutation({
    mutationFn: ChatService.ask,
  });
}