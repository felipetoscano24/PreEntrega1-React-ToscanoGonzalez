const ComponenteHijo = ({ children, titulo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {children}
    </div>
  );
};

export default ComponenteHijo;
