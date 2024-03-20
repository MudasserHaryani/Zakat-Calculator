#! /usr/bin/env node
// Import necessary modules
import inquirer from "inquirer";
async function calculateZakat() {
    const answer = await inquirer.prompt([
        { message: "How much cash do you have?", type: "number", name: "cash" },
        { message: "How many debts do you have?", type: "number", name: "debt" },
        {
            message: "How much gold do you have in grams?",
            type: "number",
            name: "gold",
        },
        {
            message: "How much silver do you have in grams?",
            type: "number",
            name: "silver",
        },
        {
            message: "What is today's gold rate per gram?",
            type: "number",
            name: "goldRate",
        },
        {
            message: "What is today's silver rate per gram?",
            type: "number",
            name: "silverRate",
        },
        {
            message: "Select one of the options",
            type: "list",
            name: "operator",
            choices: ["My total amount", "Calculate Zakat"],
        },
    ]);
    const goldPrice = answer.gold * answer.goldRate;
    const silverPrice = answer.silver * answer.silverRate;
    const totalAmount = goldPrice + silverPrice + answer.cash - answer.debt;
    // Conditional Statement
    if (answer.operator === "My total amount") {
        console.log("Your total amount is:", totalAmount);
    }
    else if (answer.operator === "Calculate Zakat") {
        const zakatAmount = totalAmount * (2.5 / 100); // Calculating Zakat as 2.5% of totalAmount
        console.log("Your total amount is:", totalAmount);
        console.log("Your Zakat amount is:", zakatAmount);
    }
}
// Execute the function
calculateZakat();
