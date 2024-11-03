import { FieldError, SetFieldValue, UseFormRegister } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import React, { useId } from "react";
import { BsType } from "react-icons/bs";
import {
  MAX_FONT_SIZE,
  MIN_FONT_SIZE,
} from "@/components/EditorSettingsForm/EdditorSettings.constants.tsx";

interface FontSizeControlProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  className?: string;
  setValue: SetFieldValue<any>;
}
const FontSizeControl = ({
  register,
  error,
  className,
  setValue,
}: FontSizeControlProps) => {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value || "0", 10);
    value = Math.max(MIN_FONT_SIZE, value);
    value = Math.min(MAX_FONT_SIZE, value);
    setValue("fontSize", value, { shouldValidate: true });
  };
  return (
    <div className={className}>
      <label className="visually-hidden" htmlFor={id}>
        Font Size
      </label>
      <div className="input-group has-validation">
        <div
          className="input-group-text"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <BsType />
        </div>
        <input
          type="number"
          className={`form-control ${error && "is-invalid"}`}
          id={id}
          {...register("fontSize", {
            valueAsNumber: true,
            onChange: handleChange,
          })}
        />
      </div>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default FontSizeControl;
