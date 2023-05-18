import { TbAlertTriangleFilled } from "react-icons/tb";
const ErrorPage = () => {
  return (
    <div className="text-center mt-4">
      <div>
        <TbAlertTriangleFilled size="70px" color="red" />
        <h3>Opps...Something went wrong</h3>
        <br/>
        <h4 style={{color:"steelblue"}}>Page not found</h4>
        <p>The page you're looking for is not found. Please check the URL again.</p>
      </div>
    </div>
  );
};
export default ErrorPage;
