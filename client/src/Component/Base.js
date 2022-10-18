import CustomNavBar from "./CustomNavBar";

const Base = ({ title = "Welcome to Web Check-in", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <CustomNavBar />
      {children}
      
      {/* <h1>This is footer of the page...</h1> */}
    </div>
  );
};

export default Base;
