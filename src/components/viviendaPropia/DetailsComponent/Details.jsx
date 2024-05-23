import PropTypes from 'prop-types';

import Link from "next/link";

export default function Details({index, title, children}) {
  return (
    <details
      key={index}
      name="need"
      className="px-6 py-2 bg-white md:px-10 text-clamp-text rounded-3xl text-black font-montserrat"
    >
      <summary className="font-semibold cursor-pointer">
        {title}
      </summary>
      <div className="flex flex-col py-5 gap-7 hyphens-auto">
        {children}
        <div className="py-5 text-sm text-center md:text-lg">
          <p>Nuestro chatbot IA responde todas tus dudas.</p>
          <p>También podemos ponernos en contacto y contarte mas</p>
          <Link
            href="mailto:info@argatio.com"
            className="underline transition-all hover:no-underline hover:font-medium "
          >
            info@argatio.com
          </Link>
        </div>
      </div>
    </details>
  );
}

Details.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}