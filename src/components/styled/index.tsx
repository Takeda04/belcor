//todo Import utils
import { tokens } from "../../utils";

//todo Import mui
import { styled } from "@mui/material/styles";
import { Autocomplete, Card } from "@mui/material";

//! ----------------------------------------------------------------------

export const Form = styled("form")(() => ({}));
export const Image = styled("img")(() => ({}));
export const Footer = styled("footer")(() => ({}));
export const Section = styled("section")(() => ({}));

export const Space = styled("div")(() => ({
  width: "100%",
  height: "20px",
}));

export const Title = styled("h1")(() => ({
  fontSize: "1.4993rem",
  fontWeight: 600,
  letterSpacing: "0.18px",
}));

export const Description = styled("p")(({ theme }) => ({
  fontWeight: 400,
  color: tokens(theme?.palette?.mode).text,
  fontSize: "0.875rem",
  lineHeight: 1.429,
  letterSpacing: "0.15px",
}));

export const Main = styled("main")(() => ({
  width: "100%",
  height: "100%",
}));

export const MyCard = styled(Card)(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  backgroundImage: "none",
  backgroundColor: tokens(theme?.palette?.mode).card[100],
  boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`,
}));

export const Input = styled("input")(({ theme }) => ({
  width: "100%",
  fontWeight: 400,
  padding: "14px 16px",
  borderRadius: "12px",
  background: tokens(theme?.palette?.mode).slate,

  "&::placeholder": {
    color: tokens(theme?.palette?.mode).text,
  },
  "&::-webkit-calendar-picker-indicator": {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    filter: "invert(0.5)",
  },

  "&:focus": {
    outline: `0.5px solid ${tokens(theme?.palette?.mode).text}`,
  },
}));

export const PasswordLabel = styled("label")(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "10px",
  borderRadius: "12px",
  background: tokens(theme?.palette?.mode).slate,
  border: "1px solid transparent",

  "&:focus-within": {
    outline: `0.5px solid ${tokens(theme?.palette?.mode).text}`,
  },

  "& > input": {
    width: "100%",
    height: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    backgroundColor: "transparent",

    "&:hover": {
      borderColor: "none",
    },

    "&:focus": {
      borderColor: "none",
      boxShadow: "none",
    },

    "&:focus-visible": {
      outline: 0,
    },

    "&::placeholder": {
      color: tokens(theme?.palette?.mode).text,
    },
  },
}));

export const MyAutocomplete = styled(Autocomplete)(({ theme }) => ({
  ".MuiFormControl-root > div": {
    width: "100%",
    display: "flex",
    gap: "10px",
    fontSize: "16px",
    background: tokens(theme?.palette?.mode).slate,
    borderRadius: "12px",
    color: "#858991",
  },

  ".MuiFormControl-root input": {
    padding: "10px 12px !important",
    color: "#3d4250 !important",

    "&::placeholder": {
      color: tokens(theme?.palette?.mode).text,
      opacity: "100%",
    },
  },

  ".MuiInputBase-root": {
    border: "none !important",
  },
}));
