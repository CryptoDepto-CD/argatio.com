import PropTypes from 'prop-types';

import Link from "next/link";

function Button({ children, type, onclick, href, light = false, invert = false }) {
  if (type == "link") {
    return (
      <Link
        className={`w-full px-10 py-1 font-semibold text-center text-black transition-colors bg-white rounded-full hover:bg-black outline grow font-montserrat hover:text-white ${invert && 'invert'} outline-${light ? 'black' : 'white'} uppercase`}
        href={href}
      >
        {children}
      </Link>
    );
  } else if (type == "button") {
    return (
      <button
        className={`w-full px-10 py-1 font-semibold text-center text-black transition-colors bg-white rounded-full hover:bg-black outline grow font-montserrat hover:text-white ${invert && 'invert'} outline-${light ? 'black' : 'white'} uppercase`}
        onClick={onclick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["link", "button"]),
  onclick: PropTypes.func,
  href: PropTypes.string,
  light: PropTypes.bool.isRequired,
  invert: PropTypes.bool,
}

export default Button;
