import html2canvas from "html2canvas";
import { useToast } from "@/contexts/Toast/ToastContext.tsx";
import Modal from "@/components/Modal/Modal.tsx";
import { ToastType } from "@/components/Toast/ToastType.enum.tsx";
import ModalHeader from "@/components/Modal/ModalHeader.tsx";
import ModalBody from "@/components/Modal/ModalBody.tsx";
import ModalFooter from "@/components/Modal/ModalFooter.tsx";
import { useRef } from "react";
import useModal from "@/components/hooks/UseModal/UseModal.tsx";

export const useExport = (id: string) => {
  const { showToast } = useToast();
  const { openModal, closeModal } = useModal();

  const imageRef = useRef("");

  const openMobileAdaptedModal = () => {
    openModal(
      <Modal
        isOpen={true}
        handleClose={closeModal}
        header={
          <ModalHeader
            title={"Tap and hold to save the image on mobile"}
            handleClose={closeModal}
          />
        }
        body={
          <ModalBody>
            <img
              style={{ maxWidth: "100%" }}
              src={imageRef.current || ""}
              alt="Code Snapshot"
            />
          </ModalBody>
        }
        footer={<ModalFooter handleClose={closeModal} />}
      />,
    );
  };

  return (format: string) => {
    const editor = document.getElementById(id);
    if (!editor) return;

    html2canvas(editor, { backgroundColor: "transparent" }).then((canvas) => {
      try {
        const image = canvas.toDataURL(`image/${format}`);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          imageRef.current = image;
          openMobileAdaptedModal();
        } else {
          const link = document.createElement("a");
          link.href = image;
          link.download = `snapshot.${format.toLowerCase()}`;
          link.click();
        }
      } catch (e) {
        showToast({
          title: "Failed",
          message: "Failed to export image",
          type: ToastType.DANGER,
        });
      }
    });
  };
};
