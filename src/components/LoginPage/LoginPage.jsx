import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <Stack direction="row" spacing={2} sx={{ marginBottom: "1rem" }}>
          <Button
            variant="contained"
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push("/registration");
            }}
          >
            Register
          </Button>
        </Stack>
      </center>
    </div>
  );
}

export default LoginPage;
