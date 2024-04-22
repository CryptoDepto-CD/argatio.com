function Title({ type, children }) {
  // Si el tipo es title, el titulo tendra una clase de font-bold y text-2xl
  if (type === "title") {
    return (
      <p className="font-semibold text-6xl font-montserrat text-white uppercase ">
        {children}
      </p>
    );
  } else if (type === "subtitle1") {
    return (
      <p className="font-semibold text-4xl font-montserrat text-white uppercase">
        {children}
      </p>
    );
  } else if (type === "subtitle2") {
    return (
      <p className="font-medium text-1xl font-montserrat text-white uppercase">
        {children}
      </p>
    );
  }
}

export default Title;
