import {
  DEFAULT_EDITOR_BG_COLOR,
  DEFAULT_EDITOR_PADDING,
  MAX_EDITOR_WIDTH,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";

export const loadDefaultEditorValues = () => {
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
