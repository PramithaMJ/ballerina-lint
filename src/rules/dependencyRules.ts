import { BallerinaRule } from "./types";

export const dependencyRules: BallerinaRule[] = [
  {
    pattern: /\[\[platform\.java11\.dependency\]\]\s*path\s*=\s*"(?!\.)[^"]+"(?!\s*#)/g,
    message: "Consider using relative paths for JAR dependencies",
    fix: "Use relative paths starting with './' for JAR files inside the package."
  },
  {
    pattern: /\[\[platform\.java11\.dependency\]\](?!\s*modules)/g,
    message: "Specify modules that use the dependency to restrict usage",
    fix: "Add a 'modules = [\"module-name\"]' entry to restrict JAR usage to specific modules."
  }
];