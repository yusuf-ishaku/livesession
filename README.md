# livesession
1. When organizing file structure, keep in mind:
Like Content in the same folder: your folders should reflect your content. 
Your folders should have like things inside. 
If these components are found on this page, best you put them in a separate folder.
Folder names should be descriptive.
Don't nest files too deep.
Like file formats in same folder.

2. When writing code: Easily readable code. 
Another dev should easily understand your code.
Your code should be easily editable.
When building applications that will scale, learn to group functions according to their
purpose.
Refactoring spaghetti code. Keeping code that updates the UI and updates the database
differently.
Different working parts of the application should be held separately so
that changes here won't affect changes there.
Reduces development times.
Easier to understand. Easier to transport. Easier to maintain. Easier to test.
https://dev.to/tamerlang/separation-of-concerns-the-simple-way-4jp2


Separation of Concerns
Model View Controller. 
Data  Ui   Controller

In this system, you separate functions that update your data from functions that update your state(UI).

A typical example is displayed in this repository at /src/assets/functions/model1.js
In the App.jsx file, useState and set[vareiable name ] is an example of the SOC that react does under the hood. 
You can also study my vtamise-chat-app repository for another example of this method of working with SOC


In this codebase, a typical file structure is shown.
And a typical separation of concern tactic is deployed in model1.js in the functions folder.

Reactjs is a class example of a separations of concern instance. The use of hooks. 
Here I just show how you can take it a step further to write neater, better more concise code.

Any questions or further explanation needed, please contact me at: fortuneyusufishaku@gmail.com
