# Dropdown
A Dropdown JavaScript Module for websites published on npm.

This module will:

1. Hide a dropdown div from a html file.
2. Reveal the dropdown div on mouse hover or click on a html button.
3. Hide the dropdown div on a click outside the dropdown div.

# Usage

### Install using npm

```
npm i mrmine-dropdown
```

To use the dropdown, import dropdown function.

Then call it using: 

1.  the button (class or id) to show hidden dropdown, for the 1st argument, and 
2.  the div (class or id) to be unhidden, as the 2nd argument.

Example:

```javascript
import { dropdown } from "mrmine-dropdown";

dropdown(".button", "#div");
```

