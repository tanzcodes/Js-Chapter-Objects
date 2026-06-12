// ==========================================
// QUESTION 1: Calculate Totals
// ==========================================
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var grandTotal = 0;
var q1HTML = "<h3>Individual Item Totals:</h3><ul>";

for (var i = 0; i < itemsArray.length; i++) {
    var itemPrice = Number(itemsArray[i].price);
    var itemQuantity = Number(itemsArray[i].quantity);
    var itemTotal = itemPrice * itemQuantity;
    
    q1HTML += "<li>" + itemsArray[i].name + " total: Rs. " + itemTotal + "</li>";
    grandTotal += itemTotal;
}
q1HTML += "</ul><h3>Grand Total: Rs. " + grandTotal + "</h3>";
document.getElementById("q1-output").innerHTML = q1HTML;


// ==========================================
// QUESTION 2: Property Existence Check
// ==========================================
var userObject = {
    name: "Alex", email: "alex@example.com", password: "secure123",
    age: 25, gender: "Male", city: "Karachi", country: "Pakistan"
};

var q2HTML = "<ul>" +
    "<li>Does <strong>age</strong> exist? " + ("age" in userObject) + "</li>" +
    "<li>Does <strong>country</strong> exist? " + ("country" in userObject) + "</li>" +
    "<li>Does <strong>firstName</strong> exist? " + ("firstName" in userObject) + "</li>" +
    "<li>Does <strong>lastName</strong> exist? " + ("lastName" in userObject) + "</li>" +
    "</ul>";
document.getElementById("q2-output").innerHTML = q2HTML;


// ==========================================
// QUESTION 3: Student Constructor Function
// ==========================================
function Student(name, rollNo, course) {
    this.name = name;
    this.rollNo = rollNo;
    this.course = course;
}

var student1 = new Student("Ali", 101, "Web Development");
var student2 = new Student("Sana", 102, "Graphic Design");
var student3 = new Student("Bilal", 103, "Mobile App Dev");

var q3HTML = "<pre>" + 
    JSON.stringify(student1, null, 2) + "\n\n" +
    JSON.stringify(student2, null, 2) + "\n\n" +
    JSON.stringify(student3, null, 2) + 
    "</pre>";
document.getElementById("q3-output").innerHTML = q3HTML;


// ==========================================
// QUESTION 4 & BONUS: Survey Form App
// ==========================================
var surveyRecords = [];

// Constructor function
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Form Submit Handler
document.getElementById("surveyForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload hone se rokne ke liye

    // Get current inputs
    var nameValue = document.getElementById("name").value;
    var genderValue = document.querySelector('input[name="gender"]:checked').value;
    var addressValue = document.getElementById("address").value;
    var educationValue = document.getElementById("education").value;
    var professionValue = document.getElementById("profession").value;

    // Create object using constructor
    var newPerson = new Person(nameValue, genderValue, addressValue, educationValue, professionValue);

    // Push to main list
    surveyRecords.push(newPerson);

    // BONUS: Save to local storage
    localStorage.setItem("surveyData", JSON.stringify(surveyRecords));

    // Screen par list refresh karke dikhana
    document.getElementById("survey-output").innerText = JSON.stringify(surveyRecords, null, 2);

    // Reset Form fields for next record
    document.getElementById("surveyForm").reset();
    alert("Record added successfully!");
});