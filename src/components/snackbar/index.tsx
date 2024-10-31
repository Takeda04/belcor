//todo Import Redux
import { main } from "../../store";
import { useDispatch, useSelector } from "react-redux";

import { Alert, Snackbar } from "@mui/material";

//todo Import utils
import { InterfaceStore } from "../../utils";

//! ----------------------------------------------------------------------

export const MySnackbar = () => {
  const dispatch = useDispatch();
  const { snack } = useSelector((store: InterfaceStore) => store?.main);

  const handleClose = () => {
    dispatch(
      main({
        snack: {
          open: false,
          type: "",
          message: "",
        },
      })
    );
  };

  return (
    <Snackbar open={snack?.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={snack?.type}
        variant="outlined"
        sx={{ width: "100%" }}
      >
        {snack?.message}
      </Alert>
    </Snackbar>
  );
};
