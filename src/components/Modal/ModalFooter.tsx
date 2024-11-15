import { CloseModelSourceEnum } from "@/components/Modal/CloseModelSource.enum.ts";
import { ReactNode } from "react";

export interface ModalFooterProps {
  children?: ReactNode;
  handleClose?: (source: CloseModelSourceEnum) => void;
}
const ModalFooter = ({ handleClose, children }: ModalFooterProps) => (
  <div className="modal-footer">
    {children
      ? children
      : handleClose && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleClose(CloseModelSourceEnum.BUTTON)}
          >
            Close
          </button>
        )}
  </div>
);

export default ModalFooter;
