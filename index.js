#! /usr/bin/env node 
import inquirer from "inquirer";
// Print Welcome Message
console.log("Welcome To My ATM Machine");
// Initialize user pin code and user balance
let myBalance = 100000;
let myPin = 2211;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is  Correct, Login Successfully!");
    // console.log(`Current Account Balance is ${myBalance}`); 
    let operationAns = await inquirer.prompt([
        { name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw amount", "check balace"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                message: "select a withdrew method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawmethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficent Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} Withdrwa Successfullu`);
                console.log(`Your Remaing Balace is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawmethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                { name: "amount",
                    type: "number",
                    message: "enter the amount to withdraw"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficent Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw succesfully`);
                console.log(`your remaing balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check balace") {
        console.log(`Your Account balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, try again");
}
