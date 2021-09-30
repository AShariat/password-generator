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
```
This is the home page before any click:

![home-page](https://user-images.githubusercontent.com/88262115/135529683-4b5b9422-4369-4f89-aa15-44700f5bf9a3.png)

Then you will be asked to choose how many characters you need, it has to be a number between 8 to 128 or it will not proceed to the next step:

![password-length](https://user-images.githubusercontent.com/88262115/135529715-fd27f16b-f9e0-42e9-a273-764e7bbcf142.png)

Then you will be asked series of questions to determine your desired password criteria:

![special-characters](https://user-images.githubusercontent.com/88262115/135529727-3db7acba-d01f-49d7-a406-5d813650f7ad.png)

![numeric-characters](https://user-images.githubusercontent.com/88262115/135529745-589c9315-560a-4709-876c-cb18a79897cf.png)

![lowercase-characters](https://user-images.githubusercontent.com/88262115/135529760-50630853-dda0-4f73-ab8f-e635b0576ed6.png)

![uppercase-characters](https://user-images.githubusercontent.com/88262115/135529784-8eda3f6e-209a-4025-b6fa-a967951587e6.png)

At least one criteria has to be selected or you will get a message and password generator will start over:

![no-criteria-selected](https://user-images.githubusercontent.com/88262115/135529819-a8384330-30d9-4eb5-ad75-8627ab5b41eb.png)

This is the generated password if all ceriterias are selected and the length is set to 8 characters long:

![8-generated](https://user-images.githubusercontent.com/88262115/135529835-5c84ea12-4d94-479c-aefb-b2b973e777d4.png)

This is the generated password if all ceriterias are selected and the length is set to 128 characters long:

![128-generated](https://user-images.githubusercontent.com/88262115/135529857-579d95ff-3130-4c3e-a3a1-290ccde6cb20.png)

Finally this is the link to my deployed application: https://ashariat.github.io/password-generator/
