import ballerina/io;

// Using empty strings instead of nil
type Employee record {
   string middleName = ""; //middleName is not specified
   string department = ""; // Department not specified
};

// Return sentinel values (-1) instead of nil
function getMarks(string name) returns int {
    map<int> marks = {
        "John": 85,
        "Alice": 92
    };
    
    if marks.hasKey(name) {
        return marks.get(name);
    }
    return -1;
}

// Return empty array instead of nil
function getUsers() returns string[] {
    string[]? users = loadUsers();
    if users is string[] {
        return users;
    }
    return [];
}

// Direct type cast instead of elvis operator
function processUserData() {
    int? age = ();
    int validAge = <int>age; // Should use elvis operator
    
    string? name = ();
    string validName = name.toString(); // Should use elvis operator or nil check
}

// Mock function for testing
function loadUsers() returns string[]? {
    return ();
}

// Test the Elvis operator use case
function testElvis() {
    int? possibleValue = ();
    
    // Bad: Not using elvis operator
    int value;
    if possibleValue is () {
        value = 0;
    } else {
        value = possibleValue;
    }
    
    // Should use: value = possibleValue ?: 0;
    io:println(value);
}

// Test error case vs default value
function getData() returns string[] {
    string[]? data = ();
    
    // Bad approach: defaulting to empty array
    return data ?: [];
    
    // Better approach would be to return error
    // if data is () {
    //     return error("Error loading data");
    // }
    // return data;
}