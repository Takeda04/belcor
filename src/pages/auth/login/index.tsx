import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Box, Card, InputLabel, TextField, useTheme } from "@mui/material";

import { Description, Form, Main, MySnackbar, Password, Space, Title } from "../../../components";
import { useAppDispatch } from "../../../utils/hooks/useAppDispatch";
import { login } from "../../../store/slices/authSlice";
 // Import the main slice
import { tokens } from "../../../utils";
import { main } from "../../../store/slices/mainSlice";


type Inputs = {
  username: string;
  password: string;
};

export const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme?.palette?.mode);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    dispatch(login({ email: data.username, password: data.password }));

    if (data.username === "admin" && data.password === "admin") {
      localStorage.setItem("access", String(data.username));
      localStorage.setItem("refresh", String(data.username));
      navigate('/');
    } else {
      // Dispatch action to open the snackbar with an error message
      dispatch(
        main({
          snack: {
            open: true,
            type: "error",
            message: "Invalid credentials, please try again.",
          },
        })
      );
    }

    setLoading(false);
  };

  return (
    <Main className="flex items-center justify-center relative">
      <Card
        sx={{ backgroundColor: colors.body, backgroundImage: "none" }}
        className="w-full h-screen flex flex-col items-center justify-center p-16 max-[500px]:p-6"
      >
        <Box className="max-w-[500px] w-full">
          <Title className="mb-2 max-[400px]:text-[1.2rem]">Привет, добро пожаловать</Title>
          <Description className="flex items-center gap-2">
          {" "}
          Панель управления доступом
            <Link to="/register" className="text-blue-400"> Создать аккаунт</Link>
          </Description>
          <Space />
          <Form onSubmit={handleSubmit(onSubmit)} className="w-full h-auto text-white">
            <Box>
              <InputLabel htmlFor="login_username" className="ml-2 mb-1 cursor-pointer select-none">Имя пользователя или адрес электронной почты</InputLabel>
              <TextField
                fullWidth
                autoComplete="false"
                disabled={loading}
                id="login_username"
                error={!!errors.username}
                helperText={errors.username?.message}
                placeholder={"Введите свое имя пользователя или адрес электронной почты"}
                {...register("username", { required: "Требуется имя пользователя" })}
              />
            </Box>
            <Space />
            <Box>
              <InputLabel htmlFor="login_password" className="ml-2 mb-1 cursor-pointer select-none">Пароль</InputLabel>
              <Password
                name="password"
                id="login_password"
                register={register}
                placeholder={"Введите свой пароль"}
                errors={errors}
                validationSchema={{ required: "Требуется пароль", minLength: { value: 5, message: "Пароль должен быть не менее 5 символов" } }}
              />
            </Box>
            <Space />
            <LoadingButton
              fullWidth
              color="info"
              type="submit"
              loading={loading}
              variant="contained"
              className="capitalize"
            >
              Подтвердить
            </LoadingButton>
            <Link to="/forgot" className="w-full mt-3 flex items-center justify-end text-blue-400">Забыли пароль?</Link>
          </Form>
        </Box>
      </Card>

      <MySnackbar />
    </Main>
  );
};
