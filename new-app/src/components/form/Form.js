import { useParams } from "react-router";

export default function Form() {
  const { id } = useParams();

  return (
    <div>
      <h1>form</h1>
      {id && <div>id: {id}</div>}
    </div>
  );
}
