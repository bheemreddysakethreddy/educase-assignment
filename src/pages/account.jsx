import { FaCamera } from "react-icons/fa";
function Account() {
  return (
    <div className=" bg-gray-100">
      <h1 className="text-lg font-semibold px-4 py-3 border-b bg-white">
        Account Settings
      </h1>

      <div className="flex items-center gap-10 p-4">
        <div className="relative">
          <img
            src="./images.jpg"
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            <FaCamera className="text-white text-xs" />
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">Marry Doe</h2>
          <p className="text-sm text-gray-500">Marry@gmail.com</p>
        </div>
      </div>

      <p className="px-4 text-sm text-gray-600 border-b border-dashed pb-6 ">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

    </div>
  );
}

export default Account;
