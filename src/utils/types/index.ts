//! ----------------------------------------------------------------------

export interface InterfaceStore {
  main: {
    mode: boolean;
    snack: {
      open: boolean;
      type: "success" | "warning" | "error";
      message: string;
    };
  };
  title: string;
}

