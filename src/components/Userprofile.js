import { useContext } from "react";
import { UsersContext } from "../contexts/UsersState";
import { Card, Avatar, Typography, Box } from "@mui/material";
import not from "../imgs/not.png";
import mav from '../imgs/mav.png'

export default function Userprofile() {
  const [users, selUser, setselUser] = useContext(UsersContext);

  return (
    <Box sx={{p:2}}>
      {selUser ? (
        <Card variant="outlined" sx={{ p: 2, bgcolor: "#F9A826" }}>
          <Avatar src={mav} sx={{ width: "150px", height: "150px", mx: "auto" }} />
          <Typography
            variant="h4"
            align="center"
            sx={{ mt: 4, color: "white" }}
          >
            @ {selUser.profile.username}
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 4, color: "white" }}>
            Name
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ bgcolor: "whitesmoke", p: 1, borderRadius: 1 }}
          >
            {selUser.profile.firstName} {selUser.profile.lastName}
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 1, color: "white" }}>
            Job-Title
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ bgcolor: "whitesmoke", p: 1, borderRadius: 1 }}
          >
            {selUser.jobTitle}
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 1, color: "white" }}>
            Bio
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ bgcolor: "whitesmoke", p: 1, borderRadius: 1 }}
          >
            {selUser.Bio}
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 1, color: "white" }}>
            Email
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ bgcolor: "whitesmoke", p: 1, borderRadius: 1 }}
          >
            {selUser.profile.email}
          </Typography>
        </Card>
      ) : (
        <Box>
          <Avatar src={not} variant="square" sx={{ height: "50%",width:"80%",mx:"auto" }} />
          <Typography variant="h5" align="center" sx={{mt:3}}>
            No User Selected !!!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
