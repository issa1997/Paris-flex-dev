import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { Formik, FormikHelpers, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import _ from "lodash";
import { LoginType, login } from "../../services/login";

const defaultTheme = createTheme();

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFormSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginData: LoginType = {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };
    login(loginData)
      .then((response) => {
        if (_.has(response, "data") && !_.isEmpty(response.data)) {
          const loginResponse = response.data;
          const loginData = loginResponse.data;
          console.log(loginResponse)
          if (!_.isEmpty(loginData)) {
            localStorage.setItem("userObject", JSON.stringify(loginData));
          }
          toast.success(loginResponse.message, { position: "bottom-right" });
          if (
            !_.isUndefined(loginData.userRole) &&
            loginData.userRole === "ADMIN"
          ) {
            navigate("/admin/rates");
          } else {
            navigate("/");
          }
        }
      })
      .catch((error: any) => {
        toast.error(error, { position: "bottom-right" });
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <Container component="div" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" onSubmit={onFormSubmit}>
            <Grid container spacing={2} direction={"column"}>
              <Grid item xs={8}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
