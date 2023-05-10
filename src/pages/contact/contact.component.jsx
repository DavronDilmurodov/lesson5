import { useParams } from "react-router-dom";

export const Contact = () => {
  const { id } = useParams();

  return <>Contact {id}</>;
};
