// Export all rules
import { namingConventions } from "./namingConventions";
import { errorHandlingRules } from "./errorHandling";
import { loggingRules } from "./loggingRules";
import { loopRules } from "./loopRules";
import { structureRules } from "./structureRules";
import { BallerinaRule } from "./types";

// Export the type for use in other files
export { BallerinaRule };

export const ballerinaBestPractices: BallerinaRule[] = [
  ...namingConventions,
  ...errorHandlingRules,
  ...loggingRules,
  ...loopRules,
  ...structureRules,
];
