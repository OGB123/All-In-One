const prompt = require("prompt-sync")();

class versionText {
	constructor() {
		console.log("AIO V-0.0.1 Rev-1 Alpha-1 2022");
		console.log("By The AIO Team");
		console.log(" ");
		console
		new Login();
	}
}

class Login {
	constructor() {
		const username = prompt("Username: ");
		const password = prompt("Password: ");

		if (username === "Ollie" && password === "123") {
			console.log("\n");
			console.log("Hello", username, "\n");
			new mainMenu();
		} else {
			console.log("Please Try Again")
			new Login();
		}
	}
}

class mainMenu {
	constructor() {
		console.log(" ");
		console.log("Selection Menu: Please Select One Of The Options:");
		console.log("▣───────────────────────────────────────────────▣");
		console.log("│                                               │");
		console.log("│   1. = Personal                               │");
		console.log("│                                               │");
		console.log("│   2. = Calculations                           │");
		console.log("│                                               │");
		console.log("│   3. = Games                                  │");
		console.log("│                                               │");
		console.log("│   4. = Error Codes                            │");
		console.log("│                                               │");
		console.log("│   5. = Close                                  │");
		console.log("│                                               │");
		console.log("▣───────────────────────────────────────────────▣");

		const MMS = prompt("Please Select One Of The Following Options 1,2,3,4,5: ")
		if (MMS > 5 || MMS < 1) {
			console.log("\n");
			console.log("Please try again");
			console.log("\n");
			new mainMenu();
		} else if (MMS === "1") {
			console.log(" ");
			console.log("Selection Menu: Please Select One Of The Options");
			console.log("▣─────────────────▣");
			console.log("│                 │");
			console.log("│   1. = Name     │");
			console.log("│                 │");
			console.log("│   2. = Age      │");
			console.log("│                 │");
			console.log("│   3. = Address  │");
			console.log("│                 │");
			console.log("│   4. = Back     │");
			console.log("│                 │");
			console.log("▣─────────────────▣");
			const PMS = prompt("Please Select One Of The Following Options 1,2,3,4: ");
			if (PMS === "1") {
				const FirstName = prompt("Please enter your first name: ");
				const Surname = prompt("Please enter your lastname: ");
				console.log("Your name is", FirstName, Surname)
			} else if (PMS === "2") {

			} else if (PMS === "3") {

			} else if (PMS === "4") {
				new mainMenu();
			}
		} else if (MMS === "2") {

		} else if (MMS === "3") {

		} else if (MMS === "4") {

		} else if (MMS === "5") {

		}
	}
}

//Starts AIO
new versionText();