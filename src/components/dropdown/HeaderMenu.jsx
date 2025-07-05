import { useNavigate } from "react-router-dom";

export default function HeaderMenu({ className }) {
  const navigate = useNavigate();

  return (
    <div
      className={`group relative inline-block text-left select-none ${className}`}
    >
      <button className="cursor-pointer rounded text-white focus:outline-none">
        Tours
      </button>
      <ul
        className={`pointer-events-none absolute left-1/2 z-50 w-fit translate-x-[-50%] scale-95 divide-y divide-gray-100 rounded bg-white opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100`}
      >
        <li
          className="cursor-pointer px-4 py-2 text-base whitespace-nowrap text-black hover:bg-gray-100"
          onClick={() => navigate("/tours/cancun")}
        >
          Cancun
        </li>
        <li
          className="cursor-pointer px-4 py-2 text-base whitespace-nowrap text-black hover:bg-gray-100"
          onClick={() => navigate("/tours/playa-del-carmen")}
        >
          Playa del Carmen
        </li>
        <li
          className="cursor-pointer px-4 py-2 text-base whitespace-nowrap text-black hover:bg-gray-100"
          onClick={() => navigate("/tours/tulum")}
        >
          Tulum
        </li>
      </ul>
    </div>
  );
}
