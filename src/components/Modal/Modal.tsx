import { CloseModelSourceEnum } from "@/components/Modal/CloseModelSource.enum.ts";
import { ReactNode } from "react";
import styles from "./Modal.module.scss";
export interface ModalProps {
  isOpen?: boolean;
  handleClose?: (source: CloseModelSourceEnum) => void;
  header?: ReactNode | undefined;
  body?: ReactNode;
  footer?: ReactNode;
}
const Modal = ({
  isOpen = false,
  handleClose = () => {},
  header,
  body,
  footer,
}: ModalProps) => {
  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains("custom-modal-overlay")) {
      handleClose(CloseModelSourceEnum.OVERLAY);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className={`modal d-block custom-modal-overlay ${styles.modalOverlay}`}
          tabIndex={-1}
          onClick={handleOverlayClick}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {header}
              {body}
              {footer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
