import {
  MAX_EDITOR_PADDING,
  MIN_EDITOR_PADDING,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";
import { FieldError, UseFormRegister } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useId } from "react";
import { BsArrowsCollapse } from "react-icons/bs";

interface PaddingVerticalProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  className?: string;
}
const PaddingVerticalControl = ({
  register,
  error,
  className,
}: PaddingVerticalProps) => {
  const id = useId();

  return (
    <div className={className ?? ""}>
      <label htmlFor={id} className="visually-hidden">
        Vertical Padding
      </label>
      <div className="input-group has-validation">
        <div
          className="input-group-text"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <BsArrowsCollapse />
        </div>
        <div className="form-control d-flex">
          <input
            type="range"
            className="form-range"
            id={id}
            min={MIN_EDITOR_PADDING}
            max={MAX_EDITOR_PADDING}
            {...register("paddingY", { valueAsNumber: true })}
          />
        </div>
      </div>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default PaddingVerticalControl;
