import { useNavigate } from "react-router-dom";
import Headers from "../ui/Heading";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-2 flex-col h-dvh py-10">
      <Headers
        head="Welcome to PopX"
        subHead1="Lorem ipsum dolor sit amet,"
        subHead2="consectetur adipi elit,"
      />
      <button
        className={
          "bg-violet-600 cursor-pointer text-white py-3 rounded-lg text-xl"
        }
        style={{ marginTop: "10px" }}
        onClick={() => navigate("/signin")}
      >
        Create Account
      </button>
      <button
        className={
          "bg-violet-400 cursor-pointer text-black py-3 rounded-lg text-xl"
        }
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;
