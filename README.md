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

![home-page](https://user-images.githubusercontent.com/88262115/135521776-2bde5269-bcdc-4c1d-9600-8ccace060bcb.jpg)

Then you will be asked to choose how many characters you need, it has to be a number between 8 to 128 or it will not proceed to the next step:

![password-length](https://user-images.githubusercontent.com/88262115/135521823-e6c4d500-98f7-4867-9c47-b03dd9c3ba48.jpg)

Then you will be asked series of questions to determine your desired password criteria:

![special-characters](https://user-images.githubusercontent.com/88262115/135521893-ec2a8135-e130-4463-94d3-729e40242f00.jpg)

![numeric-characters](https://user-images.githubusercontent.com/88262115/135521927-f2e2f0ba-1f95-40c3-bdd5-9b6f2785d47d.jpg)

![lowercase-characters](https://user-images.githubusercontent.com/88262115/135521943-62a62e64-2170-4f11-9913-44aac75ce270.jpg)

![uppercase-characters](https://user-images.githubusercontent.com/88262115/135521967-17bb9034-a6b4-41d0-8db9-f07cdc6cbadb.jpg)

At least one criteria has to be selected or you will get a message and password generator will start over:

![no-criteria-selected](https://user-images.githubusercontent.com/88262115/135521993-6dcc2ece-6c1f-4ed5-b869-e544225cd4a0.jpg)

This is the generated password if all ceriterias are selected and the length is set to 8 characters long:

![8-generated](https://user-images.githubusercontent.com/88262115/135522038-42353c1e-5f5e-404e-a0f0-111a585c89ad.jpg)

This is the generated password if all ceriterias are selected and the length is set to 128 characters long:

![128-generated](https://user-images.githubusercontent.com/88262115/135522064-fcf59ac3-1a55-4914-8195-3e88a2ab90ed.jpg)

Finally this is the link to my deployed application: https://ashariat.github.io/password-generator/
