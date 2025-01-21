import React from "react";

interface InputCompProps {
  label: string; // Label text
  type: "input" | "textarea"; // Type of element to render
  placeholder?: string; // Placeholder for the input/textarea
  width?: string; // Width of the input/textarea
  height?: string; // Height of the input/textarea (only for textarea)
  resize?: "none" | "both" | "horizontal" | "vertical"; // Resize behavior (only for textarea)
}

const InputComp: React.FC<InputCompProps> = ({
  label,
  type,
  placeholder,
  width = "100%", // Default width
  height = "100px", // Default height for textarea
  resize = "vertical", // Default resize behavior for textarea
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Label */}
      <label
        style={{
          display: "block",
          marginBottom: "16px",
          fontSize: "18ppx",
          fontWeight: 400,
          color: "#111",
        }}
      >
        {label}
      </label>

      {/* Input or Textarea */}
      {type === "input" ? (
        <input
          type="text"
          placeholder={placeholder}
          style={{
            width: width,
            color:"#767676",
            padding: "10px",
            fontSize: "18px",
            border: "1px solid #D5DBE2",
            borderRadius: "4px",
            backgroundColor:"#fff",
            boxSizing:"border-box"
          }}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          style={{
            width: width,
            height: height,
            color:"#767676",
            padding: "20px",
            fontSize: "18px",
            lineHeight:"27px",
            border: "1px solid #D5DBE2",
            borderRadius: "4px",
            resize: resize,
            backgroundColor:"#fff",
            boxSizing:"border-box"
          }}
        />
      )}
    </div>
  );
};

export default InputComp;
