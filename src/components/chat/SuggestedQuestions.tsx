import { Box, Button, Typography } from "@mui/material";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void | Promise<void>;
}

const suggestions = [
  "Show all customers",
  "Show all orders",
  "Top 10 products",
  "Customers from Pune",
  "Monthly sales report",
  "Total revenue",
];

export default function SuggestedQuestions({
  onSelect,
}: SuggestedQuestionsProps) {
  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 2,
        }}
      >
        Suggested Questions
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {suggestions.map((question) => (
          <Button
            key={question}
            variant="outlined"
            size="small"
            onClick={() => onSelect(question)}
            sx={{
              borderRadius: 5,
              textTransform: "none",
            }}
          >
            {question}
          </Button>
        ))}
      </Box>
    </Box>
  );
}