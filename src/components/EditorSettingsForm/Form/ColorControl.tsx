import { FieldError, UseFormRegister } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useId } from "react";
import { BsPaintBucket } from "react-icons/bs";
import styles from "./ColorControl.module.scss";
interface ColorControlProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  className?: string;
}
const ColorControl = ({ register, error, className }: ColorControlProps) => {
  const id = useId();
  return (
    <div className={className ?? ""}>
      <label htmlFor={id} className="visually-hidden">
        Background Color
      </label>
      <div className="input-group">
        <div
          className="input-group-text"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <BsPaintBucket />
        </div>

        <div className="form-control d-flex justify-content-center ">
          <input
            type="color"
            className={`form-range  ${error && "is-invalid"} ${styles.color}`}
            {...register("backgroundColor")}
          />
        </div>
      </div>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default ColorControl;
