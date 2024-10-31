import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { UseFormRegister } from "react-hook-form";

interface CustomPasswordProps {
  id?: string;
  name: string; 
  placeholder?: string;
  register: UseFormRegister<any>; 
  required?: boolean;
  errors?: any; 
  validationSchema?: any; 
}

//! ----------------------------------------------------------------------

export const Password = ({
  id,
  name,
  placeholder = "Enter password",
  register,
  errors,
  validationSchema,
}: CustomPasswordProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <TextField
        id={id}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        fullWidth
        {...register(name, validationSchema)}
        error={!!errors[name]} 
        helperText={errors[name]?.message} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShow((prev) => !prev)}>
                {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
