import { defineConfig } from "umi";
import routes from "./config/routes";

export default defineConfig({
  routes,
  npmClient: "yarn",
  plugins: ['@umijs/plugins/dist/dva'],
  dva: {}
});
