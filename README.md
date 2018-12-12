# Todos App

## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Instructions

A simple app to maintain a list of thing to do. You can mark a todo as complete and once done, you can delete a todo as well. There are filters to show complete todos, incomplete todos and all todos

To get started, open [the GitHub repo](https://github.com/aman-kumar-rai/todos/) and clone or fork the project, and then 

* execute ```npm install``` to install all the dependencies
* execute ```npm start``` to start a local dev server which will open up the app in your default web browser

## Dependencies

### JS

The project is built using react, so dependencies include
* react
* react-dom
* prop-types
* redux

### CSS
* The projects is built using vanilla CSS, but for icons, i have used [font-awesome](https://fontawesome.com/)

## Contributing

This projects is functional, but there are bugs to fix and improvements to make
### Bugs

* If you mark a todo as complete, the background of the icon does not get back to the original style

These bugs are not that major, but removing these should improve the user experience

### Improvements

* Using local storage to retain the todos
* Using react-redux library to improve performance
* Providing the feature to delete all completed todos
* Using lifecycle methods to improve performance by stopping render() when not needed
* Option to edit a todo by clicking on it

I would push the changes for these soon. Feel free to contribute and use the app the way you want
