import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

const baseButtonClasses = "hover:scale-110 rounded-lg cursor-pointer border-none outline-transparent text-body hover:brightness-75 disabled:cursor-not-allowed disabled:bg-gray-15";
const actionClasses = {
  error: "bg-error text-white",
  info: "bg-info text-white",
  warning: "bg-warning text-white",
  success: "bg-success text-white"
};
const colorsClasses = {
  default: actionClasses["info"],
  primary: "bg-primary-on-light text-white dark:bg-primary-on-dark dark:text-black",
  secondary: "bg-secondary-on-light text-white dark:bg-secondary-on-dark dark:text-black"
};
const sizeClasses = {
  small: "px-4 py-2",
  medium: "px-8 py-3",
  "full-width": "w-full px-8 py-3"
};

function getColor(action, color) {
  if (action) return actionClasses[action];
  return color ? colorsClasses[color] : colorsClasses["default"];
}

const Button = ({
  children,
  className,
  onClick,
  color = "default",
  size = "medium",
  action,
  ...props
}) => {
  const colorClass = getColor(action, color);
  const sizeClass = sizeClasses[size];
  const buttonClasses = `
    ${baseButtonClasses}${" "}
    ${colorClass}${" "}
    ${sizeClass}${" "}
    ${className ? className : ""}
  `;
  return /* @__PURE__ */ jsx("button", { onClick, className: buttonClasses, ...props, children });
};

function colorClass(color) {
  if (color === "primary") {
    return "text-primary-on-light dark:text-primary-on-dark";
  }
  if (color === "secondary") {
    return "text-secondary-on-light dark:text-secondary-on-dark";
  }
  return "light:text-black dark:text-gray-93";
}
function sizeClass(size) {
  switch (size) {
    case "h1":
      return "text-h1 font-bold";
    case "h2":
      return "text-h2 font-bold";
    case "h3":
      return "text-h3 font-bold";
    case "h4":
      return "text-h4 font-bold";
    case "details":
      return "text-details";
    default:
      return "text-body mb-4";
  }
}
function getComponent(size, as) {
  if (as) return as;
  if (size === "body") return "p";
  return size || "p";
}

function Typography({ color = "default", size = "body", className, children, as }) {
  const colorClassName = colorClass(color);
  const sizeClassName = sizeClass(size);
  const finalClassName = `${colorClassName} ${sizeClassName} ${className ? className : ""}`;
  const Component = getComponent(size, as);
  return /* @__PURE__ */ jsx(Component, { className: finalClassName, children });
}

const nonCardClasses = "p-4 rounded-md";

function Paper({ children, className, isCard, ...rest }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `shadow-paper dark:shadow-paper-dark border border-black dark:border-white ${className ? className : ""} ${isCard ? "" : nonCardClasses}`,
      ...rest,
      children
    }
  );
}

function Card({ title, content, actions, className }) {
  return /* @__PURE__ */ jsxs(
    Paper,
    {
      className: `flex h-[365px] w-full flex-col items-center justify-between rounded-3xl px-5 py-6 md:w-[270px] ${className ? className : ""}`,
      "data-testid": "card",
      isCard: true,
      children: [
        /* @__PURE__ */ jsx(Typography, { color: "primary", size: "h3", children: title }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: content }),
        /* @__PURE__ */ jsx("div", { children: actions })
      ]
    }
  );
}

export { Button, Card, Paper, Typography };
