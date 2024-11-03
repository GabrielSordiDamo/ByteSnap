import { BiCopy } from "react-icons/bi";

interface CopyControlProps {
  handleCopy?: () => void;
  className?: string;
}
const CopyControl = ({ handleCopy, className }: CopyControlProps) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={() => handleCopy && handleCopy()}
      >
        <BiCopy /> Copy
      </button>
    </div>
  );
};
export default CopyControl;
