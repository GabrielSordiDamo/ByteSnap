import styles from "./HomePage.module.scss";
import EditorSettingsForm, {
  EditorSettingFormSchema,
  editorSettingsFormSchema,
} from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import {
  DEFAULT_EDITOR_BG_COLOR,
  DEFAULT_EDITOR_PADDING,
  MAX_EDITOR_WIDTH,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import html2canvas from "html2canvas";
import { useCallback, useEffect, useId } from "react";
import PrismEditor from "@/components/PrismEditor/PrimsEditor.tsx";
import { useToast } from "@/contexts/Toast/ToastContext.tsx";
import { ToastType } from "@/components/Toast/ToastType.enum.tsx";

const HomePage = () => {
  const loadDefaultEditorValues = () => {
    const storedValues = JSON.parse(
      localStorage.getItem("codeEditorConfigs") ?? "{}",
    );

    const defaultValues = {
      language: "python",
      theme: "default",
      background: "off",
      backgroundColor: DEFAULT_EDITOR_BG_COLOR,
      ...storedValues,
    };

    return {
      ...defaultValues,
      width: MAX_EDITOR_WIDTH / 2,
      paddingY: DEFAULT_EDITOR_PADDING,
      paddingX: DEFAULT_EDITOR_PADDING,
      fontSize: 14,
    };
  };

  const { showToast } = useToast();
  const id = useId();
  const editorForm = useForm<EditorSettingFormSchema>({
    resolver: zodResolver(editorSettingsFormSchema),
    mode: "onChange",
    defaultValues: loadDefaultEditorValues(),
  });

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(
        "codeEditorConfigs",
        JSON.stringify(editorForm.getValues()),
      );
    });
  }, []);

  const exportTo = (format: string) => {
    const editor = document.getElementById(id);
    if (!editor) return;

    html2canvas(editor, { backgroundColor: "transparent" }).then((canvas) => {
      try {
        const image = canvas.toDataURL("image/" + format);
        const link = document.createElement("a");
        link.href = image;
        link.download = `snapshot.${format.toLowerCase()}`;
        link.click();
      } catch (e) {
        showToast({
          title: "Failed",
          message: "Failed to export image",
          type: ToastType.DANGER,
        });
      }
    });
  };

  const copy = useCallback(() => {
    const editor = document.getElementById(id);
    if (!editor) return;

    html2canvas(editor, { backgroundColor: "transparent" }).then((canvas) => {
      canvas.toBlob((blob) => {
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
                message: "Failed to copy image to clipboard",
                type: ToastType.DANGER,
              });
            },
          );
        }
      }, "image/png");
    });
  }, []);

  const formValues = editorForm.watch();
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.description} p-1`}>Capture and style code</p>
      <EditorSettingsForm
        className={`${styles.form}`}
        {...editorForm}
        handleCopy={copy}
        handleExport={exportTo}
      ></EditorSettingsForm>

      <div
        id={id}
        className={styles.editor}
        style={{
          padding: `${formValues?.paddingY}px ${formValues?.paddingX}px`,
          width: `${formValues?.width}px`,
          backgroundColor:
            formValues.background === "on"
              ? formValues?.backgroundColor
              : "transparent",
        }}
      >
        <PrismEditor {...formValues}></PrismEditor>
      </div>
    </div>
  );
};

export default HomePage;
