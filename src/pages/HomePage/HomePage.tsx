import styles from "./HomePage.module.scss";
import EditorSettingsForm, {
  EditorSettingFormSchema,
  editorSettingsFormSchema,
} from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId } from "react";
import PrismEditor from "@/components/PrismEditor/PrimsEditor.tsx";
import { loadDefaultEditorValues } from "@/pages/HomePage/HomePage.utils.ts";
import { useExport } from "@/components/hooks/UseExport/UseExport.tsx";
import { useCopy } from "@/components/hooks/UseCopy/UseCopy.tsx";

const HomePage = () => {
  const id = useId();
  const exportTo = useExport(id);
  const copy = useCopy(id);
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
