function Title({ type, children }) {
  // Si el tipo es title, el titulo tendra una clase de font-bold y text-2xl
  if (type === "title") {
    return (
      <p className="text-6xl font-semibold text-white uppercase font-montserrat ">
        {children}
      </p>
    );
  } else if (type === "subtitle1") {
    return (
      <p className="text-4xl font-semibold text-white uppercase font-montserrat">
        {children}
      </p>
    );
  } else if (type === "subtitle2") {
    return (
      <p className="font-medium text-white uppercase text-1xl font-montserrat">
        {children}
      </p>
    );
  }
}

export default Title;
