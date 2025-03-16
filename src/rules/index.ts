// Export all rules
import { namingConventions } from "./namingConventions";
import { errorHandlingRules } from "./errorHandling";
import { loggingRules } from "./loggingRules";
import { loopRules } from "./loopRules";
import { structureRules } from "./structureRules";

export const ballerinaBestPractices = [
  ...namingConventions,
  ...errorHandlingRules,
  ...loggingRules,
  ...loopRules,
  ...structureRules,
];
