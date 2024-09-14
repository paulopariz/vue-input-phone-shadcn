export { default as Code } from "./Code.vue";

type Lang = "typescript" | "vue" | "zsh" | "json";

export interface ICode {
  code: string;
  label: string;
  lang: Lang;
}
