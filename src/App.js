import UsersState from "./contexts/UsersState";
import Userslist from "./components/Userslist";
import Userprofile from "./components/Userprofile";
import { Grid } from "@mui/material";

function App() {
  return (
    <UsersState>
      <Grid
        container
        spacing={0}
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12} md={5} sx={{ height: "100%" }}>
          <Userslist />
        </Grid>
        <Grid item xs={12} md={7}>
          <Userprofile />
        </Grid>
      </Grid>
    </UsersState>
  );
}

export default App;
