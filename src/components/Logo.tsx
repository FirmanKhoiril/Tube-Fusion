import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa"; // Example icon

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center space-x-1">
      <FaFire className="text-lg text-[#10b981]" /> {/* Icon with the primary color */}
      <h1 className="text-lg bg-gradient-to-tr font-[600] from-[#10b981] via-[#06b6d4] to-[#B2DBDB] bg-clip-text text-transparent font-montserrat">
        Fusioner
      </h1>
    </Link>
  );
};

export default Logo;
