# Guess the Color
#### A simple tool to keep your colors in mind

[Check out the app!](https://nzufelt.github.io/guess-the-color/)

### Building and running
This app is build with [create-react-app](https://github.com/facebook/create-react-app). They have excellent documentation, but here's the very basics:

* Use `npm start` run the development server
* Use `npm run build` build the code
* You should serve `build/index.html`.

This particular app was hosted on github pages by using [this tutorial](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages) from the `create-react-app` docs.

### How did I make this app?
The most important code happens in [`RandomColor.js`](https://github.com/nzufelt/guess-the-color/blob/master/src/RandomColor.js).  I generate a random color, and send that to the item `style` of my `div` on click.  All animations are just using [css transitions](https://css-tricks.com/almanac/properties/t/transition/).  I use the complementary color as the text color, and that could probably be done in a much fancier way.

### Contributing
I welcome contributions.  Feel free to raise an issue first to discuss what you think needs changing.
