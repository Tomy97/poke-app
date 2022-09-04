import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

export const DashboardLogin = () => {
  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardLogin;
