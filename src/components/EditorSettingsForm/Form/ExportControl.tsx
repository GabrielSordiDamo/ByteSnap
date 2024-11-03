import { BiDownload } from "react-icons/bi";

interface ExportControlProps {
  handleExport?: (format: string) => void;
  className?: string;
}
const ExportControl = ({ handleExport, className }: ExportControlProps) => {
  return (
    <div className={`dropdown  ${className}`}>
      <button
        className="btn btn-light dropdown-toggle w-100"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <BiDownload /> Export
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            onClick={() => handleExport && handleExport("PNG")}
            className="dropdown-item"
          >
            PNG
          </button>
        </li>
        <li>
          <button
            onClick={() => handleExport && handleExport("JPG")}
            className="dropdown-item"
          >
            JPG
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ExportControl;
