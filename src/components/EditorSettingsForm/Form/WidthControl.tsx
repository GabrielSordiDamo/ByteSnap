import {
  MAX_EDITOR_WIDTH,
  MIN_EDITOR_WIDTH,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";
import { FieldError, UseFormRegister } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useId } from "react";
import { BsArrowsExpandVertical } from "react-icons/bs";

interface WidthControlProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  className?: string;
}
const WidthControl = ({ register, error, className }: WidthControlProps) => {
  const id = useId();
  return (
    <div className={className ?? ""}>
      <label htmlFor={id} className="visually-hidden">
        Width
      </label>
      <div className="input-group has-validation">
        <div
          className="input-group-text"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <BsArrowsExpandVertical />
        </div>

        <div className="form-control d-flex">
          <input
            type="range"
            className={`form-range   ${error && "is-invalid"}`}
            id={id}
            min={MIN_EDITOR_WIDTH}
            max={MAX_EDITOR_WIDTH}
            {...register("width", { valueAsNumber: true })}
          />
        </div>
      </div>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};
export default WidthControl;
