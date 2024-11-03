import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useId } from "react";
import {
  DEFAULT_EDITOR_BG_COLOR,
  DEFAULT_EDITOR_PADDING,
  MIN_EDITOR_PADDING,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";
import { BsImage } from "react-icons/bs";

interface BackgroundControlProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  setValue: UseFormSetValue<EditorSettingFormSchema>;
  className?: string;
}

const BackgroundControl = ({
  register,
  error,
  setValue,
  className,
}: BackgroundControlProps) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("background", event.target.value as "on" | "off");
    const isChecked = event.target.value === "on";
    setValue(
      "backgroundColor",
      isChecked ? DEFAULT_EDITOR_BG_COLOR : "transparent",
    );
    setValue(
      "paddingY",
      isChecked ? DEFAULT_EDITOR_PADDING : MIN_EDITOR_PADDING,
    );
    setValue(
      "paddingX",
      isChecked ? DEFAULT_EDITOR_PADDING : MIN_EDITOR_PADDING,
    );
  };

  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="visually-hidden">
        Enable Background
      </label>
      <div className="input-group">
        <div
          className="input-group-text"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <BsImage />
        </div>
        <select
          className={`form-select ${error && "is-invalid"}`}
          {...register("background", {
            onChange: handleToggle,
          })}
          id={id}
        >
          <option value="on">On</option>
          <option value="off">Off</option>
        </select>
      </div>

      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default BackgroundControl;
