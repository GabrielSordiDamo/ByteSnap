import { FieldError, UseFormRegister } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useId } from "react";
import { BsPalette } from "react-icons/bs";
import { themes } from "@/components/PrismEditor/PrismEditor.consts.tsx";

interface ThemeControlProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  className?: string;
}

const ThemeControl = ({ register, error, className }: ThemeControlProps) => {
  const id = useId();

  return (
    <div className={className ?? ""}>
      <label className="visually-hidden" htmlFor={id}>
        Theme
      </label>

      <div className="input-group has-validation">
        <div className="input-group-text">
          <BsPalette />
        </div>

        <select
          id={id}
          className={`form-select ${error ? "is-invalid" : ""}`}
          {...register("theme")}
        >
          {Object.entries(themes).map(([themeKey, entry]) => (
            <option key={themeKey} value={themeKey}>
              {entry["name"]}
            </option>
          ))}
        </select>

        {error && <div className="invalid-feedback">{error.message}</div>}
      </div>
    </div>
  );
};

export default ThemeControl;
