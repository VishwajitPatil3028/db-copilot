import { Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700 }}
      >
        Welcome to DB Copilot
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Select a table from the navigation bar or ask questions using AI.
      </Typography>
    </>
  );
}