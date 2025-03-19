// Export all rules
import { namingConventions } from "./namingConventions";
import { errorHandlingRules } from "./errorHandling";
import { loggingRules } from "./loggingRules";
import { loopRules } from "./loopRules";
import { structureRules } from "./structureRules";
import { BallerinaRule } from "./types";
import { nilHandlingRules } from "./nilHandlingRules";
import { expressionStyleRules } from "./expressionStyleRules";
import { typeHandlingRules } from "./typeHandlingRules";
import { returnValueRules } from "./returnValueRules";
import { codeOrganizationRules } from "./codeOrganizationRules";
import { format } from "path";
import { formattingRules } from "./formattingRules";
import { documentationRules } from "./documentationRules";
import { configurationRules } from "./configurationRules";
import { dependencyRules } from "./dependencyRules";

// Export the type for use in other files
export { BallerinaRule };

export const ballerinaBestPractices: BallerinaRule[] = [
  ...namingConventions,
  ...errorHandlingRules,
  ...loggingRules,
  ...loopRules,
  ...structureRules,
  ...nilHandlingRules,
  ...expressionStyleRules,
  ...typeHandlingRules,
  ...returnValueRules,
  ...codeOrganizationRules,
  ...formattingRules,
  ...documentationRules,
  ...configurationRules,
  ...dependencyRules,
];
