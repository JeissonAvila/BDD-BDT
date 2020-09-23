Feature: Create account into losestudiantes
    As an user I want to create myself account within losestudiantes website

Scenario Outline: Crate account failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill account info with <name>, <lastname>, <email>, <university>, <magister>, <learningLine>, <password> and <term>
    And I try to register
    Then I expect to see <error>

    Examples:
      | name    | lastname | email            | university               | magister | learningLine | password     | term  | error                    |
      |         |          |                  |                          |          |              |              |       | "Ingresa tu correo"   |
      | Alguien | Apellido | miso@gmail.com   | universidad-de-los-andes | True     | 16           | Prueba12     |       | "Debes aceptar los términos y condiciones" |
      | Alguien | Apellido | miso@gmail.com   | universidad-de-los-andes | True     | 16           | Prueba1      |       | "La contraseña debe ser al menos de 8 caracteres" |
      | Alguien | Apellido |                  | universidad-de-los-andes | True     | 16           | Prueba12     | True  | "Ingresa tu correo" |
      | Alguien | Apellido | miso@gmail.com   | universidad-de-los-andes | True     | 16           |              | True  | "Ingresa una contraseña" |


Scenario Outline: Crate account failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill account info with <name>, <lastname>, <email>, <university>, <magister>, <learningLine>, <password> and <term>
    And I try to register
    Then I expect to see success or repet account <email>

    Examples:
      | name    | lastname | email            | university               | magister | learningLine | password     | term  |
      | Alguien | Apellido | miso@gmail.com   | universidad-de-los-andes | True     | 16           | Prueba12     | True  |
      | Alguien | Apellido | fake3@gmail.com  | universidad-de-los-andes | True     | 16           | Prueba12     | True  |