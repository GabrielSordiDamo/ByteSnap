import { CloseModelSourceEnum } from "@/components/Modal/CloseModelSource.enum.ts";
import { ReactNode } from "react";

export interface ModalHeaderProps {
  title?: string;
  handleClose?: (source: CloseModelSourceEnum) => void;
  children?: ReactNode;
}
const ModalHeader = ({ title, handleClose, children }: ModalHeaderProps) => (
  <div className="modal-header">
    {children ? (
      children
    ) : (
      <>
        {title && <h5 className="modal-title text-secondary">{title}</h5>}
        {handleClose && (
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleClose(CloseModelSourceEnum.BUTTON)}
          ></button>
        )}
      </>
    )}
  </div>
);
export default ModalHeader;
