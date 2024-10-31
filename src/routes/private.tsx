//todo Import packages
import { Navigate } from "react-router-dom";

//todo Import layout
import Layout from "../layout";

interface CustomProps {
  component: () => JSX.Element;
}

const Private = ({ component }: CustomProps) => {
  const ac = localStorage.getItem("access");
  const re = localStorage.getItem("refresh");

  if (ac && re) {
    return (ac && re) ? (
      <Layout component={component} />
    ) : null;
  }
  return <Navigate to="/login" replace />;
};

export default Private;
