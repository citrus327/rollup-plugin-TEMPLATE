import type { Plugin } from "rollup";
import type { TemplateOption } from "../types";

export const template = (option: TemplateOption): Plugin => {
  console.log(option);
  return {
    name: "template",
  };
};
