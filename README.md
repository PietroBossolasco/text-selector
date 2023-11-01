# Text-Selector Library

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

The Text-Selector library is a JavaScript library that enables you to enhance the user experience with select elements. It allows you to replace standard select elements with custom-designed text and provides the ability to open and close the selection dynamically. This library also supports animations when jQuery is included.

## Features
* Easily transform standard select elements into custom-designed text elements.
* Customize the text with specific CSS classes and text element tags.
* Animations for opening and closing the selector (requires jQuery).
* Simplified initialization with a single function call.

## Installation
To use the Text-Selector library, follow these steps:

1. Include the text-selector.min.js JavaScript file and the text-selector.min.css CSS file in your HTML.
1. Optionally, include jQuery if you want to enable animations for opening and closing the selector. Make sure to include jQuery before the Text-Selector library.

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="text-selector.min.js"></script>
<link rel="stylesheet" href="text-selector.min.css">
```

## Usage
1. In your HTML document, insert a select element with the class text-selector. You can further customize the text by using the text-class attribute to add specific CSS classes and the text-element attribute to specify the HTML tag for the text (default is p).

```html
<select id="select" class="text-selector" text-class="prova" text-element="h1">
    <option value="a">option 1</option>
    <option value="b">option 2</option>
    <option value="c">option 3</option>
    <option value="d">option 4</option>
</select>
```

1. Initialize the Text-Selector library by calling the textSelector.init() function. This function should be called after the document has loaded.

```html
<script>
    window.onload = function () {
        textSelector.init();
    };
</script>
```

1. Your custom Text-Selector elements are now ready to use. When you click on the custom text, the selector will dynamically open and display the available options.

## Example
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Text-Selector Example</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="text-selector.min.js"></script>
    <link rel="stylesheet" href="text-selector.min.css">
</head>

<body>
    <select id="select" class="text-selector" text-class="prova" text-element="h1">
        <option value="a">option 1</option>
        <option value="b">option 2</option>
        <option value="c">option 3</option>
        <option value="d">option 4</option>
    </select>
    
    <!-- Additional Text-Selector elements -->

    <script>
        window.onload = function () {
            textSelector.init();
        };
    </script>
</body>

</html>

```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed with 💖 by Pietro Bossolasco
