import ballerina/io;
// Expression-bodied function candidates
function isValid(string username) returns boolean {
    return matchesCriteria(username) && isAvailable(username);
}

function calculateTotal(int price, int qty) returns int {
    return price * qty;
}

// Unnecessary parentheses in if statements
function checkConditions(int value) {
    if (value == 0) {
        io:println("Value is zero");
    }
    
    if (value > 10) {
        io:println("Value is greater than 10");
    }
}

// Mapping constructor simplification opportunities
type Student record {|
    string name;
    int age;
    string school;
|};

function registerStudent(string name, int age) {
    Student s = {name: name, age: age, school: "High School"};
    io:println(s);
}

// Overuse of var
function processData() {
    var name = "Alice";
    var age = 30;
    var isActive = true;
    var scores = [85, 92, 78];
    
    addUser(name, age);
}

// Helper functions to prevent errors
function matchesCriteria(string username) returns boolean {
    return username.length() >= 5;
}

function isAvailable(string username) returns boolean {
    return true;
}

function addUser(string name, int age) {
    // Implementation
}

// Test case for if-else vs match statement
function getDay(int date) returns string {
    if date == 0 {
        return "Sunday";
    } else if date == 1 {
        return "Monday";
    } else if date == 2 {
        return "Tuesday";
    } else if date == 3 {
        return "Wednesday";
    } else if date == 4 {
        return "Thursday";
    } else if date == 5 {
        return "Friday";
    } else if date == 6 {
        return "Saturday";
    } else {
        return "Invalid";
    }
}