import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignContent="center"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;