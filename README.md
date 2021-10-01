## Password Generator

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Solution

This is the home page before any click:

![home-page](https://user-images.githubusercontent.com/88262115/135551271-aeb3ff05-ea98-4cdb-ae18-87ec30eaffe8.png)

Then you will be asked to choose how many characters you need, it has to be a number between 8 to 128 or it will not proceed to the next step:

![password-length](https://user-images.githubusercontent.com/88262115/135551298-caedb60c-7b98-4d86-88c7-06464fefdef8.png)

Then you will be asked series of questions to determine your desired password criteria:

![special-characters](https://user-images.githubusercontent.com/88262115/135551302-13130bc2-ded8-476c-bd2c-3f054a86469e.png)

![numeric-characters](https://user-images.githubusercontent.com/88262115/135551309-c800c119-45e8-4bf5-b2d8-e65a39669808.png)

![lowercase-characters](https://user-images.githubusercontent.com/88262115/135551317-b6c60f70-df3c-4d6a-b9ae-d118b23bfce8.png)

![uppercase-characters](https://user-images.githubusercontent.com/88262115/135551332-3b43377e-dd23-4bf0-bd13-d575627b1d1a.png)

At least one criteria has to be selected or you will get a message and password generator will start over:

![no-criteria-selected](https://user-images.githubusercontent.com/88262115/135551339-3732126c-d228-45f9-a997-9d7aa54f60c2.png)

This is the generated password if all ceriterias are selected and the length is set to 8 characters long:

![8-generated](https://user-images.githubusercontent.com/88262115/135551344-bb4ba533-4584-4931-a847-58267b748344.png)

This is the generated password if all ceriterias are selected and the length is set to 128 characters long:

![128-generated](https://user-images.githubusercontent.com/88262115/135551351-ad6b98a9-0299-44a0-a05d-ee9e457556b8.png)

Finally this is the link to my deployed application:
https://ashariat.github.io/password-generator/
