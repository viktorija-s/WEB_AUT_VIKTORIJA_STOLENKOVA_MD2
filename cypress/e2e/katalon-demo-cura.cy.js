import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { MakeAppointmentPage } from "../pageObjects/MakeAppointmentPage";

describe("Selectable scenarios", () => {
	context("Select elements", () => {
		beforeEach(() => {
			HomePage.visit();
		});
		
		it("Make an Appointment", () => {
			//Click - Make Appointment
			HomePage.makeAppointment.click();
			//Set username and password fields with the demo account credentials
			LoginPage.usernameField.type("John Doe");
			LoginPage.passwordField.type("ThisIsNotAPassword");
			//Click - Login
			LoginPage.loginButton.click();
			//Set the following values:
			//1. Facility - Seoul CURA Healthcare Center
			MakeAppointmentPage.comboFacility.select("Seoul CURA Healthcare Center");
			//2. Check - Apply for hospital readmission
			MakeAppointmentPage.applyCheckBox.click();
			//3. Select - Medicaid
			MakeAppointmentPage.medicaidRadioBtn.click();
			//4. Set Date value by using the widget - 30
			MakeAppointmentPage.visitDateInput.click();
			MakeAppointmentPage.selectDay.contains("30").click();
			//5. Set comment - CURA Healthcare Service
			MakeAppointmentPage.commentField.type("CURA Healthcare Service");
			//6. Click - Book Appointment
			MakeAppointmentPage.bookAppointmentBtn.click();
			//Validate that previously set values are correct
			MakeAppointmentPage.appointmentConfirmation.contains("Appointment Confirmation");
		});
		
		it("Appointment history empty", () => {
			// Click - Make Appointment
			HomePage.makeAppointment.click();
			//Set username and password fields with the demo account credentials
			LoginPage.usernameField.type("John Doe");
			LoginPage.passwordField.type("ThisIsNotAPassword");
			//Click - Login
			LoginPage.loginButton.click();
			//Click - Menu/Stack/Burger icon
			MakeAppointmentPage.menuBar.click();
			//Validate that the sidebar is active
			MakeAppointmentPage.sideBar.should("have.class", "active")
			//Click - History
			MakeAppointmentPage.historyOption.click();
			//Validate that - No appointment - is visible
			MakeAppointmentPage.historyPage.contains("No appointment.");
		});
	});
});
