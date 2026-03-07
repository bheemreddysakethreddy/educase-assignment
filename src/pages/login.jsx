import Form from "../ui/Form";
import Headers from "../ui/Heading";
import { useNavigate } from "react-router-dom";

function Login() {
  const inputFields = [
    {
      label: "Email Address",
      type: "text",
      name: "email",
      required: true,
      placeHolder: "Enter email address",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
      placeHolder: "Enter password",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 py-10">
      <Headers
        head="Signin to your"
        head1="PopX account"
        subHead1="Lorem ipsum dolor sit amet,"
        subHead2="consectetur adipi elit,"
      />
      <Form inputFields={inputFields} />
      <button
        onClick={() => navigate("/account")}
        className={
          "bg-gray-400 cursor-pointer text-white py-3 rounded-lg text-xl"
        }
      >
        Login
      </button>
    </div>
  );
}

export default Login;
