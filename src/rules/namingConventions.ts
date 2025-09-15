export const namingConventions = [
  {
    pattern: /\bvar\b/g,
    message: "Avoid using 'var'. Use explicit types instead.",
    fix: "Replace 'var' with explicit type (e.g., 'int', 'string').",
  },
  {
    pattern: /\bconst\b(?:\s+\w+)?\s+([a-z][a-zA-Z0-9_]*|[A-Z][a-z][a-zA-Z0-9_]*)\s*=/g,
    message: "Use UPPER_CASE_WITH_UNDERSCORES for constants.",
    fix: "Rename to match constant naming convention (e.g., 'MY_CONSTANT').",
  },
  {
    pattern: /\bfunction\s+[a-z]+\d*\b/g,
    message: "Use descriptive function names.",
    fix: "Rename function to be more meaningful.",
  },
  // Functions should start with lowercase and be in camelCase
  {
    pattern: /\bfunction\s+[A-Z]\w*/g,
    message: "Function names must be verbs in camelCase, starting with lowercase letter.",
    fix: "Change function name to start with lowercase (e.g., 'totalWidth' instead of 'TotalWidth').",
  },
  // Function parameters should be in camelCase
  {
    pattern: /function\s+\w+\s*\([^)]*\b\w+\s+[A-Z]\w*(?:\s*,|\s*\))/g,
    message: "Function parameters must be in camelCase starting with lowercase letter.",
    fix: "Change parameter name to camelCase (e.g., 'fullName' instead of 'FullName').",
  },
  // Function parameters with underscores
  {
    pattern: /function\s+\w+\s*\([^)]*\b\w+\s+\w*_\w*(?:\s*,|\s*\))/g,
    message: "Function parameters must be in camelCase, avoid underscores.",
    fix: "Use camelCase for parameter names (e.g., 'fullName' instead of 'full_name').",
  },
  // Variables should be in camelCase
  {
    pattern: /\b(?:int|string|float|decimal|boolean|byte)\s+[A-Z]\w*\s*[=;]/g,
    message: "Variable names must be in camelCase, starting with lowercase letter.",
    fix: "Change variable name to start with lowercase (e.g., 'count' instead of 'Count').",
  },
  // Variables with underscores
  {
    pattern: /\b(?:int|string|float|decimal|boolean|byte)\s+\w*_\w*\s*[=;]/g,
    message: "Variable names must be in camelCase, avoid underscores.",
    fix: "Use camelCase for variable names (e.g., 'accountName' instead of 'account_name').",
  },
  // Constants should be all uppercase with underscores
  {
    pattern: /\bconst\s+(?:\w+\s+)?[a-z][a-zA-Z0-9]*\s*=/g,
    message: "Constants must be all uppercase, using underscore to separate words.",
    fix: "Use all uppercase with underscores (e.g., 'MAX_SIZE' instead of 'maxSize').",
  },
  // Record/Object names should start with uppercase
  {
    pattern: /\btype\s+[a-z]\w*\s+record/g,
    message: "Object and record names must be nouns in camelCase starting with uppercase letter.",
    fix: "Change record name to start with uppercase (e.g., 'Employee' instead of 'employee').",
  },
  // Record/Object names with underscores
  {
    pattern: /\btype\s+\w*_\w*\s+record/g,
    message: "Object and record names must be in camelCase, avoid underscores.",
    fix: "Use camelCase for record names (e.g., 'EmployeeData' instead of 'Employee_Data').",
  },
  // Record fields with underscores
  {
    pattern: /record\s*\{\|[^}]*\b\w+\s+\w*_\w*;/g,
    message: "Record fields must follow camelCase naming rules, avoid underscores.",
    fix: "Use camelCase for field names (e.g., 'firstName' instead of 'first_Name').",
  },
  // Record fields starting with uppercase
  {
    pattern: /record\s*\{\|[^}]*\b\w+\s+[A-Z]\w*;/g,
    message: "Record fields must start with lowercase letter in camelCase.",
    fix: "Change field name to start with lowercase (e.g., 'lastName' instead of 'LastName').",
  },
  // Abbreviations should be treated as words (e.g., MD5 -> Md5)
  {
    pattern: /\bfunction\s+\w*[A-Z]{2,}\w*/g,
    message: "When using abbreviations in names, treat the abbreviation as another word.",
    fix: "Use proper camelCase for abbreviations (e.g., 'hashMd5' instead of 'hashMD5').",
  },
  // Type names with abbreviations
  {
    pattern: /\btype\s+[A-Z]{2,}\w*\s+record/g,
    message: "When using abbreviations in type names, treat the abbreviation as another word.",
    fix: "Use proper camelCase for abbreviations (e.g., 'LlmModel' instead of 'LLMModel').",
  },
  // Variable names with abbreviations in all caps
  {
    pattern: /\b(?:string|int)\s+\w*[A-Z]{2,}\w*/g,
    message: "When using abbreviations in variable names, treat the abbreviation as another word.",
    fix: "Use proper camelCase for abbreviations (e.g., 'originalShaValue' instead of 'originalSHAValue').",
  },
  // Client variable naming - avoid 'Client' suffix
  {
    pattern: /:\s*Client\s+\w*[Cc]lient\s*=/g,
    message: "Avoid unnecessary repetitive words such as 'Client' in client variable names.",
    fix: "Remove redundant 'Client' suffix from variable name.",
  },
  // Client variable naming - avoid single letter names
  {
    pattern: /:\s*Client\s+[a-z]\s*=/g,
    message: "Use meaningful names for client variables, avoid single letter names.",
    fix: "Use a descriptive name that reflects the type of client.",
  },
  // Service path should use lowercase
  {
    pattern: /service\s+"?\/[^"\/\s]*[A-Z][^"\/\s]*"?\s+on/g,
    message: "Service paths should use lowercase letters.",
    fix: "Convert service path to lowercase.",
  },
  // Service path with underscores should use dashes
  {
    pattern: /service\s+"?\/[^"\/\s]*_[^"\/\s]*"?\s+on/g,
    message: "Use dashes instead of underscores in service paths.",
    fix: "Replace underscores with dashes in service path (e.g., '/music-store' instead of '/music_store').",
  },
  // Resource function names should be nouns, not verbs starting with 'get', 'post', etc.
  {
    pattern: /resource\s+function\s+\w+\s+(get|post|put|delete)[A-Z]\w*/g,
    message: "Use nouns instead of verbs for resource function names.",
    fix: "Remove verb prefix from resource function name (e.g., 'albums' instead of 'getAlbums').",
  },
  // Resource paths should use plural nouns
  {
    pattern: /resource\s+function\s+get\s+\b(?:album|song|user|item|product|order|customer)\b(?!\s*\/)/g,
    message: "Use plural resource nouns for consistency.",
    fix: "Use plural form for resource nouns (e.g., 'albums' instead of 'album').",
  },
];