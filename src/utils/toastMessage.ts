import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { useNavigate } from "react-router-dom"; */


export const showSuccessToast = (message : string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};
export const showErrorToast = (message : string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};