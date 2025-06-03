import "./loader.css";

const AppLoader = () => {
  return (
    // <section className="w-screen h-screen">
    <div className="container">
      <div className="loader"></div>
      <div className="loader"></div>
      <div className="loader"></div>
      <h1 className="absolute text-2xl top-[60%] left-[45%]">Please wait ..</h1>
    </div>
    // <h1>Please wait</h1>
    // </section>
  );
};

export default AppLoader;
