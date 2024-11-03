import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastType } from "@/components/Toast/ToastType.enum.tsx";

export interface ToastProps {
  readonly message: string;
  readonly title?: string;
  readonly type?: ToastType;
  readonly duration?: number;
  readonly onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  title = "",
  type = ToastType.INFO,
  duration = 3000,
  onClose,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastTypeClass = {
    [ToastType.SUCCESS]: "bg-success text-white",
    [ToastType.DANGER]: "bg-danger text-white",
    [ToastType.WARNING]: "bg-warning text-dark",
    [ToastType.INFO]: "bg-info text-white",
  }[type];

  return (
    <div
      className={`toast position-fixed ${toastTypeClass} top-0 end-0 m-3 ${show ? "show" : "hide"}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ zIndex: 1050 }}
    >
      <div className={`toast-header`}>
        <strong className="me-auto">{title}</strong>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      </div>
      <div className="d-flex">
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
};

export default Toast;
