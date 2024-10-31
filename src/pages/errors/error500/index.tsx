//todo Import packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//todo Import mui
import { Button } from "@mui/material";

//todo Import images
import error500 from "../../../assets/images/icon12.png";

//todo Import components
import { Description, Image, Main, Title } from "../../../components";

const Error500 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    // eslint-disable-next-line
  }, []);

  return (
    <Main className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Image src={error500} className="w-[25em] mb-10 max-[450px]:w-[18em]" />
      <Title className="w-full text-center text-[2.2em] max-[450px]:text-[2em]">
        500: Внутренняя ошибка сервера
      </Title>
      <Description className="w-full text-center px-10">
        Произошла внутренняя ошибка сервера. Пожалуйста, попробуйте обновить страницу или вернитесь позже. Если проблема сохраняется, свяжитесь с поддержкой.
      </Description>
      <Button
        color="info"
        className="px-10 mt-12 font-bold"
        onClick={() => navigate("/")}
      >
        Вернуться на главную страницу
      </Button>
    </Main>
  );
};

export default Error500;
