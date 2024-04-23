import Link from "next/link";
function Button({ children, type, onclick, href }) {
  if (type == "link") {
    return (
      <Link
        className="px-10 py-2 bg rounded-full font-semibold bg-white hover:bg-white/55 transition-colors"
        href={href}
      >
        {children}
      </Link>
    );
  } else if (type == "button") {
    return (
      <button
        className="px-10 py-2 bg rounded-full font-semibold bg-white hover:bg-white/55 transition-colors"
        onClick={onclick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
