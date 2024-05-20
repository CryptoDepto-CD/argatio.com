import Link from "next/link";
function Button({ children, type, onclick, href }) {
  if (type == "link") {
    return (
      <Link
        className="w-full px-10 py-1 font-semibold text-center text-black transition-colors bg-white rounded-full hover:bg-black outline outline-white font-montserrat hover:text-white grow"
        href={href}
      >
        {children}
      </Link>
    );
  } else if (type == "button") {
    return (
      <button
        className="w-full px-10 py-1 font-semibold text-center text-black transition-colors bg-white rounded-full hover:bg-black outline outline-white font-montserrat hover:text-black"
        onClick={onclick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
