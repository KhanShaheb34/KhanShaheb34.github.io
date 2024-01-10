# Why Should You Not Use px?

Using `px` or pixels in CSS sizing is generally not recommended. This document explores alternative units of measurement that can be employed instead of `px`. But first, let's delve into why `px` is often considered a poor choice.

## The Problem with Pixels

Everything displayed on a screen comprises pixels. But why does using pixels for measurement pose a problem? Websites are viewed on a variety of screens, each differing in size, orientation, zoom levels, and pixel geometries. What looks perfect on one screen might be distorted on another.

Consider a `div` on your website set to 600px, occupying half of your screen. When you resize the screen, zoom in or out, or view the site on a mobile device, your website might not display as intended. Moreover, in CSS, a pixel doesn't always correspond to a physical pixel on your screen. On high-resolution displays, several device pixels can combine to form a single CSS pixel.

Additionally, pixel-based sizing scales poorly. For users with poor eyesight who have increased their device's font size, a fixed font size like `14px` on your website might render the text unreadable, as it doesn't adjust to their preferred settings.

## Alternatives to Pixels

So, what are the alternatives to using `px`? Units like `em`, `rem`, `ch`, `ex`, `vh`, `vw`, and others offer more flexibility. Let's explore them in detail.

### Understanding `rem` and `em`

The `rem` unit is relative to the font size of the root element of the document, which is usually the `<html>` element. This means that if the font size of the `<html>` element is set to 16 pixels, `1rem` will be equivalent to 16 pixels. Using `rem` for font sizes, margins, padding, and other properties ensures consistency throughout your website. For example, setting paragraph font sizes to `1rem` means that they will scale appropriately if the user has different default font size settings in their browser. This makes `rem` particularly useful for maintaining accessibility, as it adapts to the preferences of users with poor eyesight.

The `em` unit is relative to the font size of the element it's used on. It's useful for scaling designs within an element, such as for text, margins, and padding. If `em` is used for an element's font size, it's relative to its own font size. For other properties, it's based on the element's text size.

Take a look at the example:

```html
<style>
  html {
    font-size: 16px;
  }
  h2 {
    font-size: 2.5rem;
  } /* 40px if root font size is 16px */
  h2 span {
    font-size: 2em;
  } /* Twice the font size of h2 */
</style>

<h2><span>Larger</span> Text</h2>
```

In this example, changing `h2`'s font size automatically adjusts the `<span>` size, showcasing `em`'s adaptability.

### What Are `ch` and `ex`?

`Ch` and `ex` units refer to the width and height of a character, respectively. `1ch` is the width of the character `0`, and `1ex` is the height of the `x` character in your font. For instance, if you want a paragraph with a consistent character count per line regardless of font size, you can use:

```html
<style>
  p {
    max-inline-size: 30ch;
  }
</style>

<p>Long text...</p>
```

### Viewport Units

Viewport units are responsive to the size of the user's browser window. `1vw` represents 1% of the viewport's width, and `1vh` is 1% of its height. To create a `div` that takes half of the viewport's width, set its width to `50vw`. The same concept applies to `vh`.

Additionally, `vmin` and `vmax` are based on the smaller and larger dimensions of the viewport. A div with `width: 50vmin` and `height: 50vmax` occupies 50% of the viewport's smallest width and largest height.

### Percentages (%)

Percentages are relative to the size of the parent element. For example:

```css
div {
  width: 600px;
}

div p {
  width: 50%;
}
```

In this case, the `p` tag inside the `div` will be 300px wide.

### Absolute Lengths

CSS also offers units like `cm`, `mm`, `in`, `pt`, etc., based on physical measurements. However, like `px`, these units can vary depending on the screen and are typically not recommended.

In conclusion, while pixels may seem straightforward, they often lead to less flexible and accessible designs. Embracing alternative units like `em`, `rem`, `ch`, `ex`, `vw`, `vh`, `vmin`, `vmax`, and percentages can make your web designs more adaptable and user-friendly.
