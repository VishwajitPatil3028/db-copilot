import {
  Tabs,
  Tab,
  Paper,
} from "@mui/material";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { useTables } from "../../hooks/useTables";

export default function Navigation() {
  const location = useLocation();

  const { data = [] } = useTables();

  const pages = [
    {
      label: "Dashboard",
      path: "/",
    },

    ...data.map((table) => ({
      label: table.display_name,
      path: `/table/${table.name}`,
    })),
  ];

  const value = Math.max(
    pages.findIndex((p) => p.path === location.pathname),
    0
  );

  return (
    <Paper square>

      <Tabs
        value={value}
        variant="scrollable"
        scrollButtons="auto"
      >
        {pages.map((page) => (
          <Tab
            key={page.path}
            component={Link}
            to={page.path}
            label={page.label}
          />
        ))}
      </Tabs>

    </Paper>
  );
}