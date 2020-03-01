# Slider.js

Slider.js is a lightweight carousel slider jQuery plugin

**[DEMO](https://rajohan.no/slider)**

### How to use slider.js?

###### Includes
<sub>Add the code below to the `<head>` of your document</sub>

```
<link type="text/css" rel="stylesheet" href="css/slider.min.css" />                  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/slider.min.js"></script>
```
NOTE: Make sure jQuery is included before slider and that both are included before your own scripts.

###### HTML Structure

```
<div id="slider">
    <figure>
        <img src="https://your-image-url.com" alt="Image alt text">
        <figcaption>
            Image caption (optional)
        </figcaption>
    </figure>
    <figure>
        <img src="https://your-image-url.com" alt="Image alt text">
        <figcaption>
            Image caption (optional)
        </figcaption>
    </figure>
    <figure>
        <img src="https://your-image-url.com" alt="Image alt text">
        <figcaption>
            Image caption (optional)
        </figcaption>
    </figure>
    ...
</div>
```
NOTE: The figcaption is optional

###### Initialize Slider.js
```
$(document).ready(() => {
    $("#slider").slider();
});
```

###### Edit settings
```
$(document).ready(() => {
    $("#slider").slider({
        loop: true, // Decides if the slider should loop. true/false
        auto: true, // Decides if the slider should change image automatically. true/false
        speed: 2000, // Sets the speed between each image change. Number in MS
        width: 800, // Sets the width of the slider
        height: 500 // Sets the height of the slider
    });
});
```
