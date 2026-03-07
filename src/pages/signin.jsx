import { useNavigate } from "react-router-dom";
import Headers from "../ui/Heading";
import Form from "../ui/Form";

function Signin() {
  const inputFields = [
    {
      label: "Full Name",
      type: "text",
      name: "fullname",
      placeHolder: "Enter Name",
    },
    {
      label: "mobile number",
      type: "text",
      name: "mobile",
      placeHolder: "Enter mobile number",
    },
    {
      label: "Email Address",
      type: "text",
      name: "email",
      placeHolder: "Enter email address",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeHolder: "Enter password",
    },
    {
      label: "Company name",
      type: "text",
      name: "companyName",
      placeHolder: "Enter Company name",
    },
    {
      label: "Are you an Agency",
      type: "radio",
      name: "agency",
      options: {
        one: "Yes",
        two: "No",
      },
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between h-screen gap-4 py-10">
      <div>
        <Headers head="Create your" head1="PopX account" />
        <Form inputFields={inputFields} />
      </div>
      <button
        onClick={() => navigate("/account")}
        className={
          "bg-violet-600 cursor-pointer text-white py-3 rounded-lg text-xl"
        }
      >
        Create Account
      </button>
    </div>
  );
}

export default Signin;
