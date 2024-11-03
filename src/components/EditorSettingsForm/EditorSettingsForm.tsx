import {
  FormState,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";

import {
  MAX_EDITOR_PADDING,
  MAX_EDITOR_WIDTH,
  MAX_FONT_SIZE,
  MIN_EDITOR_PADDING,
  MIN_EDITOR_WIDTH,
  MIN_FONT_SIZE,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";
import LanguageControl from "@/components/EditorSettingsForm/Form/LanguageControl.tsx";
import FontSizeControl from "@/components/EditorSettingsForm/Form/FontSizeControl.tsx";
import ThemeControl from "@/components/EditorSettingsForm/Form/ThemeControl.tsx";
import WidthControl from "@/components/EditorSettingsForm/Form/WidthControl.tsx";
import PaddingVerticalControl from "@/components/EditorSettingsForm/Form/PaddingVerticalControl.tsx";
import { memo } from "react";
import PaddingHorizontalControl from "@/components/EditorSettingsForm/Form/PaddingHorizontalControl.tsx";
import BackgroundControl from "@/components/EditorSettingsForm/Form/BackgroundControl.tsx";
import ColorControl from "@/components/EditorSettingsForm/Form/ColorControl.tsx";
import CopyControl from "@/components/EditorSettingsForm/Form/CopyControl.tsx";
import ExportControl from "@/components/EditorSettingsForm/Form/ExportControl.tsx";
import {
  PrismThemes,
  themes,
} from "@/components/PrismEditor/PrismEditor.consts.tsx";

export const editorSettingsFormSchema = z.object({
  language: z.string(),
  theme: z.enum(Object.keys(themes) as [PrismThemes, ...PrismThemes[]]),
  fontSize: z
    .number()
    .min(MIN_FONT_SIZE, { message: "Min font size is 10" })
    .max(MAX_FONT_SIZE, { message: "Max font size is 24" })
    .refine((val) => !isNaN(val), { message: "Font size must be a number" }),
  background: z.enum(["on", "off"]),
  backgroundColor: z.string(),
  width: z.number().min(MIN_EDITOR_WIDTH).max(MAX_EDITOR_WIDTH),
  paddingY: z.number().min(MIN_EDITOR_PADDING).max(MAX_EDITOR_PADDING),
  paddingX: z.number().min(MIN_EDITOR_PADDING).max(MAX_EDITOR_PADDING),
});

export type EditorSettingFormSchema = z.infer<typeof editorSettingsFormSchema>;
interface EditorSettingsFormProps {
  className?: string;
  register: UseFormRegister<EditorSettingFormSchema>;
  watch: UseFormWatch<EditorSettingFormSchema>;
  setValue: UseFormSetValue<EditorSettingFormSchema>;
  formState: FormState<EditorSettingFormSchema>;
  handleCopy?: () => void;
  handleExport?: (format: string) => void;
}
const EditorSettingsForm = ({
  className,
  watch,
  setValue,
  register,
  formState: { errors },
  handleCopy,
  handleExport,
}: EditorSettingsFormProps) => {
  const editorOptions = watch();

  return (
    <form
      className={`${className} row align-content-center justify-content-center `}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="row col-12 col-md-4 gy-1 ">
        <LanguageControl
          className="col-12"
          register={register}
          error={errors.language}
        />
        <ThemeControl
          className="col-12"
          register={register}
          error={errors.theme}
        />
        <FontSizeControl
          className="col-12"
          register={register}
          error={errors.fontSize}
          setValue={setValue}
        />
      </div>
      <div className="row col-12 col-md-4  gy-1 align-content-start">
        <WidthControl
          className="col-12"
          register={register}
          error={errors.width}
        />
        <BackgroundControl
          className="col-12"
          register={register}
          setValue={setValue}
          error={errors.background}
        />
        <div className="col-12">
          <div className="row">
            <CopyControl handleCopy={handleCopy} className="col-6" />

            <ExportControl handleExport={handleExport} className="col-6" />
          </div>
        </div>
      </div>

      {editorOptions.background == "on" && (
        <div className="row col-12 col-md-4  gy-1">
          <ColorControl
            className="col-12"
            register={register}
            error={errors.backgroundColor}
          />
          <PaddingHorizontalControl
            className="col-12"
            register={register}
            error={errors.paddingX}
          />
          <PaddingVerticalControl
            className="col-12"
            register={register}
            error={errors.paddingY}
          />
        </div>
      )}
    </form>
  );
};

export default memo(EditorSettingsForm);
