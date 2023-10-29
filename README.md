# Text-Selector Library

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

The Text-Selector library is a JavaScript library that allows you to create custom select elements with a text label that, when clicked, displays a list of options. It provides an alternative and visually appealing way to present and interact with select options.

## Features
* Show a list of selectable options when the text label is clicked.
* Easy to initialize with a simple function call.

## Installation
To use the Text-Selector library, you can include the JavaScript file in your HTML:
```html
<script src="text-selector.js"></script>
```
Make sure to include the library after the document is loaded.
## Usage
* Include the text-selector.js file in your HTML.
* Create a standard select element and an associated text element. Assign id attributes to both elements.

```html
<select id="mySelect">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>

<div id="myText">Click me to select an option</div> <!-- It work with all the elements! -->
```
* Initialize the Text-Selector library by calling the textselectorinit function, passing an array of objects that define the text and select element pairs:

```js
textselectorinit([
    { text: 'myText', data: 'mySelect' }
]);
```
Your custom text-selector element is now ready to use. When you click on the text element, it will display the select options.

## Example
```html
<!DOCTYPE html>
<html>
<head>
    <title>Text-Selector Example</title>
</head>
<body>
    <select id="mySelect">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>

    <div id="myText">Click me to select an option</div>

    <script src="text-selector.js"></script>
    <script>
        textselectorinit([
            { text: 'myText', data: 'mySelect' }
        ]);
    </script>
</body>
</html>
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed with 💖 by Pietro Bossolasco
