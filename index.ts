#! /usr/bin/env node
import inquirer from "inquirer";

console.log('---------Welcome To BMI Calculator---------');
console.log("");

console.log(`"BMI is an inexpensive and easy screening method for weight category—underweight,
healthy weight, overweight, and obesity."`);
console.log("");
console.log("***Let Start***");

let answer = await inquirer.prompt(
    [
        {
            message: "Enter your body weight in Kilogram(Kg)",
            type: "number",
            name: "weight"
        },
        {
            message: "Enter your height in centimeter(cm)",
            type: "number",
            name: "height"
        }
    ]
)
if (answer.weight && answer.height) {
    let heightInMeter: number = answer.height / 100
    let bmi = answer.weight / (heightInMeter * heightInMeter)
    if (bmi < 18.5) {
        console.log(`BMI = ${bmi} (UnderWeight)`);
    }
    else if (bmi >= 18.5 && bmi <= 25) {
        console.log(`BMI = ${bmi} (Normal)`);

    }
    else if (bmi > 25 && bmi <= 30) {
        console.log(`BMI = ${bmi} (OverWeight)`);
    }
    else {
        console.log(`BMI = ${bmi} (Obesity)`);
    }
}
else {
    console.log("Enter valid numbers");

}
