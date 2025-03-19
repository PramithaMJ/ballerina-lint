import ballerina/io;
import ballerina/http;

// Using json, any, and anydata instead of application-defined types
function processData(json data) {
    json name = data.name;
    json age = data.age;
    json address = data.address;
    
    io:println(name.toString() + " is " + age.toString() + " years old");
}

// Using any type without more specific typing
function handleInput(any input) {
    io:println(input);
}

// Using anydata when specific types could be used
function calculateMetrics(anydata[] values) {
    // Implementation
}

// Explicit type for constants when not needed
const int MAX_SIZE = 1000;
const string FILE_NAME_PREFIX = "Summary";
const boolean IS_ACTIVE = true;

// String union constants without using enums
function processStatus(string status) {
    if status == "PENDING" || status == "ACTIVE" || status == "COMPLETED" {
        // Process valid status
    }
}

// Integer union constants without using constants or unions
function setPriority(int priority) {
    if priority == 1 || priority == 2 || priority == 3 {
        // Valid priority
    } else {
        // Invalid priority
    }
}

// Using index-based iteration instead of range expressions
function processData(string[] data) {
    int index = 0;
    foreach var val in data {
        index += 1;
        if (index == 1) {
            continue; // Need to skip the first value in array
        }
        io:println(val);
    }
}

// Using for-each instead of query expressions
function filterActiveUsers(User[] users) returns User[] {
    User[] activeUsers = [];
    foreach var user in users {
        if user.isActive {
            activeUsers.push(user);
        }
    }
    return activeUsers;
}

// Example client that uses json instead of records
function fetchAlbums() returns json|error {
    http:Client httpClient = check new ("http://localhost:9090");
    json albums = check httpClient->/albums;
    return albums;
}

// Using open records when closed records would be more appropriate
type User record {
    string name;
    int age;
    boolean isActive;
};

// Should use closed record for more strict typing:
// type User record {|
//     string name;
//     int age;
//     boolean isActive;
// |};

// Not using type inference for local variables
function processUserData(User user) {
    string userName = user.name;
    int userAge = user.age;
    boolean userStatus = user.isActive;
    
    // Could use type inference for these local values
}

// Helper function to prevent errors in the test file
type UserFilter record {
    boolean? isActive = ();
    int? minAge = ();
    int? maxAge = ();
};