# Countdown

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Countdown component displays a timer related to an event or offer, which works while it is active, with a custom message. Once it is over it shows a text indicating this. 
.

<img src="../react/assets/countdown.png" width="auto"/> 


## Configuration 

### Step 1 - Adding the Countdown app to your theme's dependencies

In your theme's `manifest.json`, add the Countdown app as a dependency:

```json
  "dependencies": {
    "vendor.custom-countdown": "0.x"
  }
```

### Step 2 - Declaring the block on the page you want it to be displayed

Now, you can use the block exported by the `custom-countdown` app.

#### `custom-countdown` blocks
 Block name   | Description  |
| -------- | ------------------------ |
| `custom-countdown`     |  ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Enables you to render a timer associate with an event or offer. By default when the component is declared it will show a title with the text "It's over".                    

```json
  "header.full": {
    "blocks": [
        "header-layout.desktop"
    ]
  },
  "header-layout.desktop": {
    "children": [
        "custom-countdown"
    ]
  }
```

### Step 2 - Defining the props that the component will have

Check all props to configure the block in the table below:

### `custom-countdown` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `targetDate`      | `string`       | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)Defines the end date of the countdown, it must be set in the format YYYY-MM-DD. E.g. 2023-10-21(21 of october, 2023). <br />`YYYY` -- year as a 4-digit number. <br />`MM` -- month from 01 to 12. <br />`DD` -- day from 01 to last day of the month (various). | `2000-12-12`        |
| `targetHour`      | `string`       | Defines the end time of the countdown, it must be set in the format HH:MM:SS. E.g. 08:30:00(08:30 a.m.). <br />`HH` -- hours from 00 to 23. <br />`MM` -- minutes from 00 to 59. <br />`SS` -- seconds from 00 to 59.   | `00:00:00`        |
| `countdownInactiveMessage`      | `string`       | Message that is showed when the countdown has not been defined or it is over. | `It's over`        |
| `countdownActiveMessage`      | `string`       | Message that is showed while the countdown is active or currently in process.| `Time to finish:`        |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `countdown__container` | 
| `countdown__message` | 
| `countdown__message--text` | 
| `countdown__time` | 
| `countdown__time--box` | 
| `countdown__time--box-numbers` | 
| `countdown__time--box-text` | 
| `countdown__time--phone` | 
| `countdown__message--text-phone` | 
| `countdown__time--box-numbers-phone` | 
| `countdown__inactive--container` | 
| `countdown__inactive--text` |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

1. Hugo Felipe Riveros Fajardo

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
