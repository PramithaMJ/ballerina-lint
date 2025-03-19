# Ballerina Lint

[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/licenses/Apache) [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/PramithaMJ/ballerina-lint/releases/tag/v1.0.0) [![Ballerina](https://img.shields.io/badge/Ballerina-2.0.0-20b6b0.svg)](https://ballerina.io/)

A fully functional Ballerina best practices checker extension for Visual Studio Code. This linter helps developers adhere to Ballerina programming best practices, enhancing code quality and maintainability.

## Table of Contents
- [Screenshots](#screenshots)
- [Features](#features)
- [Supported Best Practices](#supported-best-practices)
- [Installation](#installation)
- [Requirements](#requirements)
- [Extension Settings](#extension-settings)
- [Usage](#usage)
- [Coming Soon](#coming-soon)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Screenshots

### Issue Detection in Editor
![Editor View](screenshots/editor-view.png)
*The extension highlights issues directly in your editor with detailed explanations*

### Diagnostics Panel
![Diagnostics Panel](screenshots/diagnostics-panel.png)
*View all issues in one place with the dedicated diagnostics panel*

### Quick Fixes
![Quick Fixes](screenshots/quick-fixes.png)
*Suggested fixes are available with a single click*

### Settings Configuration
![Settings](screenshots/setting.png)
*Customize which rules to apply and their severity levels*

### Fixes
![Fixes](screenshots/fixes.png)
*Easily apply suggested fixes to resolve issues*

## Features

- **Best Practices Checking**: Automatically analyzes your Ballerina code against established best practices
- **Real-time Diagnostics**: Provides immediate feedback as you code
- **Quick Fixes**: Offers suggestions for resolving identified issues
- **Customizable Rules**: Configure which best practices to enforce
- **Sidebar Integration**: Explore all diagnostics in a dedicated sidebar view

### Supported Best Practices

This extension checks for a comprehensive set of best practices in the following categories:

#### 1. Nil Handling
- Using nil (`()`) to represent optional values instead of empty strings
- Properly returning nil for unavailable values rather than sentinel values
- Using Elvis operator with proper default values
- Avoiding unnecessary type casts

#### 2. Expression Style
- Using expression-bodied functions for simple returns
- Avoiding unnecessary parentheses in if statements
- Simplifying mapping constructors
- Avoiding overuse of `var` keyword
- Using proper if-else vs match statements

#### 3. Type Handling
- Using application-defined types instead of `json`, `any`, or `anydata`
- Using precise types for better type safety
- Working with value ranges
- Properly using enums and unions for constants
- Using open vs closed records appropriately

#### 4. Return Values
- Returning errors instead of invalid values
- Using the `check` keyword properly
- Avoiding unnecessary `panic` statements
- Using tuples to return multiple values
- Using early returns for cleaner code

#### 5. Code Organization
- Limiting line length to 120 characters
- Avoiding redundant variables
- Avoiding unnecessary comments
- Using proper string concatenation with string templates

#### 6. Formatting
- Sorting imports properly (same package, ballerina/ballerinax, third-party)
- Adding line breaks between import statements
- Using spaces instead of tabs for indentation
- Avoiding excessive blank lines

#### 7. Documentation
- Documenting public constructs
- Adding periods at the end of function descriptions
- Using proper documentation style with `#` instead of `//` comments
- Documenting record fields properly

#### 8. Configuration Management
- Handling sensitive configurations securely
- Providing default values for non-sensitive configurable values
- Using descriptive names for configuration variables

#### 9. Dependency Management
- Using relative paths for JAR dependencies
- Specifying modules that use dependencies to restrict usage
- Following best practices for reproducible builds

#### 10. General Programming
- Proper error handling and propagation
- Descriptive naming for functions and variables
- Using constants properly with UPPER_CASE_WITH_UNDERSCORES naming
- Using proper logging patterns

## Installation

Since this extension is not yet available on the VS Code Marketplace, you can install it using the VSIX package:

1. Download the latest VSIX package from the [GitHub releases page](https://github.com/PramithaMJ/ballerina-lint/releases)
2. Open VS Code
3. Go to the Extensions view (View → Extensions or press `Ctrl+Shift+X`)
4. Click on the "..." menu (top-right of the Extensions view)
5. Select "Install from VSIX..."
6. Navigate to and select the downloaded ballerina-lint-1.0.0.vsix file
7. Restart VS Code when prompted

## Requirements

- Visual Studio Code 1.80.0 or newer
- Ballerina installation (version 2.0.0 or newer recommended)

## Extension Settings

This extension contributes the following settings:

* `ballerina-lint.enable`: Enable/disable the linter
* `ballerina-lint.rules`: Configure which rules to enable/disable
* `ballerina-lint.severityOverrides`: Override the severity level of specific rules
* `ballerina-lint.ignorePatterns`: Specify files or patterns to ignore

## Usage

1. Open a Ballerina file (`.bal` extension)
2. The extension automatically activates and begins analyzing your code
3. Issues are highlighted directly in the editor
4. Hover over highlighted code to see details about the issue
5. Use the Ballerina Lint sidebar to see all detected issues in your workspace
6. Click on issues to navigate to the corresponding code location
7. Use the Quick Fix feature (light bulb icon) to apply suggested fixes

### Creating Test Files

To test the extension with sample code that demonstrates various best practices:

1. Create a new directory in your project: `test/samples/`
2. Create test files for different categories:
   - `nilHandlingTest.bal` - Tests for nil handling rules
   - `expressionStyleTest.bal` - Tests for expression style rules
   - `typeTest.bal` - Tests for type handling rules
   - `formatDocTest.bal` - Tests for formatting and documentation rules

3. Run the extension in debug mode (F5) and open these test files to see the linter in action

## Coming Soon

- Additional rule sets for more comprehensive linting
- Integration with Ballerina project configuration files
- Rule customization through configuration files
- Team-based rule sharing
- VS Code Marketplace release
- Support for automated fixing of multiple issues at once
- Custom rule creation interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the Apache License. See `LICENSE` for more information.

## Acknowledgments

- [Ballerina](https://ballerina.io/) - The programming language
- [Learn Ballerina](https://learn-ballerina.github.io/) - Best practices guide
- [VS Code Extension API](https://code.visualstudio.com/api) - Extension development resources

---

**Note**: This extension uses the Ballerina logo, which is a trademark of WSO2, Inc. This extension is not officially affiliated with or endorsed by Ballerina or WSO2, Inc.