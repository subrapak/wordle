import { Button, Slide, Snackbar } from "@mui/material";
import React from "react";

interface SpecialSnackbarProps {
  isVisible: boolean;
  onClickSnackbar: () => void;
  disableTransition?: boolean;
}
export const SpecialSnackbar: React.FC<SpecialSnackbarProps> = ({
  isVisible,
  onClickSnackbar,
  disableTransition = false,
}) => {
  return (
    <Snackbar
      open={isVisible}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      TransitionComponent={
        disableTransition
          ? undefined
          : (props) => <Slide {...props} direction="up" timeout={500} />
      }
    >
      <Button
        color="primary"
        variant="contained"
        title="Psst Click Me!"
        onClick={onClickSnackbar}
      >
        Psst click me!
      </Button>
    </Snackbar>
  );
};
