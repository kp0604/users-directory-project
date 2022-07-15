import { useContext } from "react";
import { UsersContext } from "../contexts/UsersState";
import {
  Avatar,
  Typography,
  Box,
  Card,
  Stack,
  AppBar,
} from "@mui/material";
import mav from "../imgs/mav.png";

export default function Userslist() {
  const [users, , setselUser] = useContext(UsersContext);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#F9A826",
          p: 1,
          position: "sticky",
        }}
      >
        <Typography variant="h5" align="center">
          USERS LIST
        </Typography>
      </AppBar>
      <Box sx={{ height: "92%", overflowY: "scroll", bgcolor: "whitesmoke" }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          {users.message === "success" ? (
            users.data.map((user, idx) => {
              return (
                <Card
                  key={idx}
                  onClick={() => setselUser(user.id)}
                  elevation={4}
                  sx={{ display: "flex", py: 1, px: 2, alignItems: "center" }}
                >
                  <Avatar src={mav} alt="avatar" sx={{ mr: 4 }} />
                  <Typography variant="subtitle1">
                    {user.profile.firstName} {user.profile.lastName}
                  </Typography>
                </Card>
              );
            })
          ) : users.message === "loading" ? (
            <Typography variant="h5" align="center" sx={{ mt:4 }}>
              Loading...
            </Typography>
          ) : users.messages === "error" ? (
            <Typography variant="h5" align="center" sx={{ mt:4 }}>
              No Users Found...
            </Typography>
          ) : (
            <Typography variant="h4" align="center" sx={{ mt:4 }}>
              404
            </Typography>
          )}
        </Stack>
      </Box>
    </>
  );
}
