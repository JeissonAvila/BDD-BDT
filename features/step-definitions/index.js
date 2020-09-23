var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
  var cajaLogIn = $('.cajaLogIn');

 var mailInput = cajaLogIn.$('input[name="correo"]');
 mailInput.click();
 mailInput.keys(email);

 var passwordInput = cajaLogIn.$('input[name="password"]');
 passwordInput.click();
 passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
 $('.aviso.alert.alert-danger').waitForDisplayed(5000);
 var alertText = browser.$('.aviso.alert.alert-danger').getText();
 expect(alertText).to.include(error);
});

Then('I expect to see cuenta button', () => {
	$('button[id=cuenta]').waitForExist(5000)
});

When(/^I fill account info with (.*), (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/ , (name, lastname, email, university, magister, learningLine, password, term) => {
 var cajaSignUp = $('.cajaSignUp');

 var nameInput = cajaSignUp.$('input[name="nombre"]');
 nameInput.click();
 nameInput.keys(name);

 var lastnameInput = cajaSignUp.$('input[name="apellido"]');
 lastnameInput.click();
 lastnameInput.keys(lastname);

 var mailInput = cajaSignUp.$('input[name="correo"]');
 mailInput.click();
 mailInput.keys(email);

 if(university != ""){
 	var universitySelect = cajaSignUp.$('select[name="idUniversidad"]');
	universitySelect.click();
	universitySelect.$(`option[value=${university}]`).click();
 }

 if (magister){
 	var magisterCheck = cajaSignUp.$('input[type="checkbox"]');
 	magisterCheck.click();
 }

 if(learningLine != ""){
 	var learningLineSelect = cajaSignUp.$('select[name="idPrograma"]');
 		learningLineSelect.click();
 		learningLineSelect.$(`option[value="${learningLine}"]`).click();
 }
 
 var passwordInput = cajaSignUp.$('input[name="password"]');
 passwordInput.click();
 passwordInput.keys(password)

 if (term){
 	var termCheck = cajaSignUp.$('input[name="acepta"]');
 	termCheck.click();
 }
});

 When('I try to register', () => {
  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('button=Registrarse').click();
 });

 Then(/^I expect to see success or repet account (.*)$/ , (email) => {
   if (email == "miso@gmail.com"){
   		$(".sweet-alert ").waitForDisplayed(1000);
	   	var alertText = browser.$('.lead').getText();
   		expect(alertText).to.include("Error: Ya existe un usuario registrado con el correo 'miso@gmail.com'");
   }
   else{
   		$(".sweet-alert ").waitForDisplayed(1000);
	   	var alertText = browser.$('.sweet-alert ').getText();
   		expect(alertText).to.include("Registro exitoso!");
   }
 });