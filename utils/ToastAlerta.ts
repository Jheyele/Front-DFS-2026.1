import { toast } from 'react-toastify';

export function ToastAlert(message: string, type: string) {
  switch (type) {
    case 'sucesso':
      toast.success(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable:false,
        theme: 'colored',
        progress: undefined,
      });
      break;

    case 'erro':
      toast.error(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable:false,
        theme: 'colored',
        progress: undefined,
      });
      break;

      case 'info':
        default:
      toast.info(message, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable:false,
        theme: 'colored',
        progress: undefined,
      });
      break;
}
}