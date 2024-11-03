import { FieldError, UseFormRegister } from "react-hook-form";
import { EditorSettingFormSchema } from "@/components/EditorSettingsForm/EditorSettingsForm.tsx";
import { useId } from "react";
import { BsCodeSlash } from "react-icons/bs";

interface LanguageControlProps {
  register: UseFormRegister<EditorSettingFormSchema>;
  error?: FieldError;
  className?: string;
}

const languages = [
  { value: "plaintext", label: "Plain Text" },
  { value: "abap", label: "ABAP" },
  { value: "apex", label: "Apex" },
  { value: "azcli", label: "Azure CLI" },
  { value: "bat", label: "Batch" },
  { value: "bicep", label: "Bicep" },
  { value: "cameligo", label: "Cameligo" },
  { value: "clojure", label: "Clojure" },
  { value: "coffeescript", label: "CoffeeScript" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "csp", label: "CSP" },
  { value: "css", label: "CSS" },
  { value: "cypher", label: "Cypher" },
  { value: "dart", label: "Dart" },
  { value: "dockerfile", label: "Dockerfile" },
  { value: "ecl", label: "ECL" },
  { value: "elixir", label: "Elixir" },
  { value: "flow9", label: "Flow9" },
  { value: "fsharp", label: "F#" },
  { value: "go", label: "Go" },
  { value: "graphql", label: "GraphQL" },
  { value: "handlebars", label: "Handlebars" },
  { value: "hcl", label: "HCL" },
  { value: "html", label: "HTML" },
  { value: "ini", label: "INI" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "julia", label: "Julia" },
  { value: "kotlin", label: "Kotlin" },
  { value: "less", label: "LESS" },
  { value: "lexon", label: "Lexon" },
  { value: "lua", label: "Lua" },
  { value: "liquid", label: "Liquid" },
  { value: "m3", label: "M3" },
  { value: "markdown", label: "Markdown" },
  { value: "mdx", label: "MDX" },
  { value: "mips", label: "MIPS" },
  { value: "msdax", label: "MS-DAX" },
  { value: "mysql", label: "MySQL" },
  { value: "objective-c", label: "Objective-C" },
  { value: "pascal", label: "Pascal" },
  { value: "pascaligo", label: "Pascaligo" },
  { value: "perl", label: "Perl" },
  { value: "pgsql", label: "PostgreSQL" },
  { value: "php", label: "PHP" },
  { value: "pla", label: "PLA" },
  { value: "postiats", label: "Postiats" },
  { value: "powerquery", label: "PowerQuery" },
  { value: "powershell", label: "PowerShell" },
  { value: "proto", label: "Proto" },
  { value: "pug", label: "Pug" },
  { value: "python", label: "Python" },
  { value: "qsharp", label: "Q#" },
  { value: "r", label: "R" },
  { value: "razor", label: "Razor" },
  { value: "redis", label: "Redis" },
  { value: "redshift", label: "Redshift" },
  { value: "restructuredtext", label: "reStructuredText" },
  { value: "ruby", label: "Ruby" },
  { value: "rust", label: "Rust" },
  { value: "sb", label: "Small Basic" },
  { value: "scala", label: "Scala" },
  { value: "scheme", label: "Scheme" },
  { value: "scss", label: "SCSS" },
  { value: "shell", label: "Shell" },
  { value: "sol", label: "Solidity" },
  { value: "aes", label: "AES" },
  { value: "sparql", label: "SPARQL" },
  { value: "sql", label: "SQL" },
  { value: "st", label: "Structured Text" },
  { value: "swift", label: "Swift" },
  { value: "systemverilog", label: "SystemVerilog" },
  { value: "verilog", label: "Verilog" },
  { value: "tcl", label: "TCL" },
  { value: "twig", label: "Twig" },
  { value: "typescript", label: "TypeScript" },
  { value: "typespec", label: "TypeSpec" },
  { value: "vb", label: "VB" },
  { value: "wgsl", label: "WGSL" },
  { value: "xml", label: "XML" },
  { value: "yaml", label: "YAML" },
  { value: "json", label: "JSON" },
];

const LanguageControl = ({
  register,
  error,
  className,
}: LanguageControlProps) => {
  const id = useId();

  return (
    <div className={className ?? ""}>
      <label className="visually-hidden" htmlFor={id}>
        Language
      </label>
      <div className="input-group">
        <div className="input-group-text">
          <BsCodeSlash />
        </div>
        <select
          className={`form-select ${error && "is-invalid"}`}
          {...register("language")}
          id={id}
        >
          {languages.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{error?.message}</div>
      </div>
    </div>
  );
};

export default LanguageControl;
