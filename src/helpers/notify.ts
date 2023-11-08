import { toast, ToastOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notify = (
  type: "success" | "info" | "warning" | "error" | "default",
  message: string,
  options: ToastOptions = {}
): void => {
  try {
    if (!type || !message) {
      return console.error("Error For Notify: Invalid Input");
    }

    const optionsObject: ToastOptions = {
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      ...options,
    };

    switch (type) {
      case "success":
        toast.success(message, optionsObject);
        break;
      case "info":
        toast.info(message, optionsObject);
        break;
      case "warning":
        toast.warning(message, optionsObject);
        break;
      case "error":
        toast.error(message, optionsObject);
        break;
      default:
        toast(message, optionsObject);
        break;
    }
  } catch (error) {
    console.error("Error For Notify: ", error);
  }
};

export default notify;
