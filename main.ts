import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 8881;
let pinAnswer = await inquirer.prompt( //inquirer will ask 3 things always name,msg,type
    [
{
    name: "pin",
    message: "Enter your pin",
    type: "number",
}
]
);
if (pinAnswer.pin === myPin){
    console.log("Correct pin code");
 let operationsAnswer = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw","Check balance"],
        }
    ]
);
if (operationsAnswer.operation === "withdraw"){
    let amountAnswer = await inquirer.prompt(
        [
            {
              name: "amount",
              message: "Enter your amount",
              type: "number",
    }
]);
myBalance -= amountAnswer.amount;
console.log("Your remaining balance is: " + myBalance)
} else if (operationsAnswer.operation === "Check balance"){
    console.log("Your balance is: " + myBalance)
}
}


else {
    console.log ("Incorrect pin code")
}