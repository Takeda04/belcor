//todo Import packages
import { memo, useState } from "react";

//todo Import mui
import { Box } from "@mui/material";
import { Menu } from "@mui/material";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";
import { useTheme } from "@mui/material";
import { MenuItem } from "@mui/material";
import { IconButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";

//todo Import icons
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

//todo Import utils
import { tokens } from "../../utils";

//todo Import components
import { Section } from "../../components";

type CustomElement = Element | null;


interface CustomState {
  title: string;
  profileOpen: CustomElement;
}

//! ----------------------------------------------------------------------

const Header = memo(() => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);

  const [state, setState] = useState<CustomState>({
    title: "Профиль",
    profileOpen: null,
  });

  const { profileOpen } = state;

  const sx = {
    bgcolor: colors.body,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: colors.body,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  };

  return (
    <Paper
      sx={{ backgroundImage: "none", color: colors.grey[100] }}
      className="bg-transparent h-[10vh] shadow-none w-full rounded-none duration-300"
    >
      <Box className="px-5 h-full flex items-center justify-end">
        <Section className="flex items-center gap-3">
          <Tooltip title={"Профиль"}>
            <IconButton
              id="account-menu"
              onClick={(e) =>
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: e.currentTarget,
                }))
              }
              size="small"
              sx={{ ml: 2 }}
              aria-haspopup="true"
            >
              <Avatar alt="Ava" src={""} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={profileOpen}
            id="account-menu"
            open={Boolean(profileOpen)}
            onClose={() =>
              setState((prev: CustomState) => ({ ...prev, profileOpen: null }))
            }
            onClick={() =>
              setState((prev: CustomState) => ({ ...prev, profileOpen: null }))
            }
            PaperProps={{
              elevation: 0,
              sx,
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              disabled
              onClick={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: null,
                }));
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <FaRegUser />
              </ListItemIcon>
              Профиль
            </MenuItem>
            <MenuItem
              disabled
              onClick={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: null,
                }));
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              Настройки
            </MenuItem>
            <MenuItem
              onClick={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: null,
                }));
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <BiLogOut />
              </ListItemIcon>
              Выход
            </MenuItem>
          </Menu>
        </Section>
      </Box>
    </Paper>
  );
});

export default Header;
