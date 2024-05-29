import { jsxs, jsx } from "react/jsx-runtime";
import styles from "./TextField.module.css.js";
const MuiTextField = ({
  value,
  onChange,
  onSubmit,
  buttonBackgroundColor,
  buttonTextColor,
  intls
}) => {
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        onSubmit();
      },
      className: styles.container,
      children: [
        /* @__PURE__ */ jsx("div", { style: { flexGrow: 1 }, children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            placeholder: intls?.placeholder || "Entrez votre question",
            value,
            onChange: (e) => onChange(e.target.value),
            className: styles.input,
            maxLength: 500,
            multiple: true,
            required: true,
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            spellCheck: "false"
          }
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: styles.button,
            style: {
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor
            },
            children: intls?.send || "Envoyer"
          }
        )
      ]
    }
  );
};
export {
  MuiTextField as default
};
