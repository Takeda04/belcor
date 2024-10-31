//todo Import mui
import { Box, useTheme } from "@mui/material";

//todo Import utils
import { tokens } from "../utils";

//todo Import components
import Header from "./header";
import { Section } from "../components";

interface CustomProps {
  component: () => JSX.Element;
}

//! ----------------------------------------------------------------------

const Layout = ({ component: Component }: CustomProps) => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);

  return (
    <Section sx={{ display: "flex", backgroundColor: colors.body }}>
      <Box
        className={`w-full h-screen flex flex-col items-center justify-start duration-300 relative`}
      >
        <Header/>
        <Box className="w-full h-[90vh] px-20 py-5 overflow-y-auto max-[1250px]:px-5">
          <Component />
        </Box>
      </Box>
    </Section>
  );
};

export default Layout;
