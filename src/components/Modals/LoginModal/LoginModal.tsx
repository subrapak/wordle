import {
  Alert,
  Autocomplete,
  Button,
  Slide,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { BaseModal } from "../BaseModal";
import { useLoginModal } from "./useLoginModal";

export interface LoginModalProps extends ReturnType<typeof useLoginModal> {}

export const LoginModal: React.FC<LoginModalProps> = ({
  isVisible,
  options,
  isAuthError,
  setIsAuthError,
  isLoginSuccess,
  setIsLoginSuccess,
  username,
  setUsername,
  password,
  setPassword,
  onSubmitLogin,
  hideModal,
  isAuthenticated,
}) => {
  return (
    <BaseModal
      isVisible={isVisible}
      handleCloseModal={isAuthenticated ? hideModal : () => {}}
    >
      <Stack gap={1}>
        <Typography variant="body1" className="text-black text-center">
          New phone, who dis?
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          onChange={(event, selectedName) => {
            setUsername(selectedName);
            setPassword("");
          }}
          value={username}
          sx={{ width: 300 }}
          renderInput={(params) => {
            return <TextField {...params} label="Select a name" />;
          }}
        />
        <TextField
          label="Password"
          fullWidth
          value={password}
          onChange={(event) =>
            setPassword(event.target.value.trim().toLocaleLowerCase())
          }
        />
        <Button
          variant="contained"
          onClick={onSubmitLogin}
          disabled={!username || !password}
        >
          Submit
        </Button>
      </Stack>
      <Snackbar
        open={isAuthError}
        autoHideDuration={2000}
        onClose={() => setIsAuthError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={() => setIsAuthError(false)}
          severity={"error"}
          sx={{ width: "100%" }}
        >
          Oops! Wrong password - try again
        </Alert>
      </Snackbar>
      <Snackbar
        open={isLoginSuccess}
        autoHideDuration={2000}
        onClose={() => setIsLoginSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={() => setIsLoginSuccess(false)}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          Nice one!
        </Alert>
      </Snackbar>
    </BaseModal>
  );
};
