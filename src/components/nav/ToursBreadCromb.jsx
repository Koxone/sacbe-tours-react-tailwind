import { useLocation, Link } from "react-router-dom";

function ToursBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex gap-1 rounded border border-neutral-200 bg-neutral-100 p-4 text-sm text-gray-400">
      <Link to="/" className="text-blue-500 hover:underline">
        Inicio
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const formattedName = name
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <span key={routeTo} className="flex items-center gap-1">
            <span>/</span>
            {isLast ? (
              <span className="text-black">{formattedName}</span>
            ) : (
              <Link to={routeTo} className="text-blue-500 hover:underline">
                {formattedName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default ToursBreadcrumb;
