import { ReactNode } from "react";

export interface ModalBody {
  children?: ReactNode;
}
const ModalBody = ({ children }: ModalBody) => (
  <div className="modal-body">{children}</div>
);

export default ModalBody;
