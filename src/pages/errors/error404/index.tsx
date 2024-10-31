//todo Import packages
import { useNavigate } from "react-router-dom";

//todo Import mui
import { Button } from "@mui/material";

//todo Import images
import error404 from "../../../assets/images/icon12.png";

//todo Import components
import { Description, Image, Main, Title } from "../../../components";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Main className="w-full h-screen flex flex-col items-center justify-center">
      <Image src={error404} className="w-[25em] mb-10 max-[450px]:w-[18em]" />
      <Title className="w-full text-center text-[2.2em] max-[450px]:text-[2em]">
      404: Страница, которую вы ищете, здесь не существует
      </Title>
      <Description className="w-full text-center px-10">
      Вы либо выбрали неясный путь, либо пришли сюда не в то место. В любом случае попробуйте использовать навигацию.
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

export default Error404;
