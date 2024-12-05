import html2canvas from "html2canvas";
import { useToast } from "@/contexts/Toast/ToastContext.tsx";
import { ToastType } from "@/components/Toast/ToastType.enum.tsx";
import { useExport } from "@/components/hooks/UseExport/UseExport.tsx";

export const useCopy = (id: string) => {
  const { showToast } = useToast();
  const exportTo = useExport(id);

  return () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      exportTo("PNG");
      return;
    }
    const editor = document.getElementById(id);
    if (!editor) return;

    html2canvas(editor, {
      backgroundColor: "transparent",
      scale: 2,
    }).then((canvas) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(
              () => {
                showToast({
                  title: "Success",
                  message: "Image copied to clipboard",
                  type: ToastType.SUCCESS,
                });
              },
              () => {
                showToast({
                  title: "Failed",
                  message:
                    "Clipboard API is not fully supported on this device",
                  type: ToastType.DANGER,
                });
              },
            );
          }
        },
        "image/png",
        1,
      );
    });
  };
};
