# Challenge

Create a set of components based on the card components in the @material-ui/core package that displays the icons with their description.

## Prerequisites

You need to have node installed on your computer
Download from here https://nodejs.org/en/

## The challenge

Using icon-card a user should be able to:

1. Display the title, description, icon and a button/link to the icons webpage by rendering one or more of the exposed components
2. Control the icon location so that it can be rendered in at least two different locations inside the card (e.g top or bottom ).
3. Render a loading card while data is being fetched
4. Render a empty card if the data loading fails
5. Customize the content of the card while data is being loaded or there is an error (such as displaying custom error messages or error components)

### Requirements

1. All components must be located in the ./components directory
2. Call the function exposed in api/fetchIcons.js to fetch the data.

When finished, the application should:

1. Render a static example of a card in a loading state
2. Render a example where the 3 icons returned from the call to fetchIcons is rendered using components form the icon-card library. While waiting for the promise to resolve the loading state should be rendered
3. Disable the Button/link to the icon page after its clicked one time.

## Tips:

You can use all the components available in the @material-ui/core or @material-ui/lab packages.

It doesn't need to be one component. Investigate how material-ui has structured their packages

Try to follow material-ui's [API design approach](https://material-ui.com/guides/api/)

Think about the API of your components. Make them as flexible and extendable as possible.

## Notes

Do not worry about making this a perfect display. The most important thing is so make informed choices which you are able to talk about when we discuss your solution with you :) If you get stuck, don't hesitate to send a question to ulrik@mnemonic.no.
If you are not able to finish the challenge before your interview, just send a message and ask for a postponed interview and we will set a new date.

## Usable links:

React component library - https://material-ui.com/

Material design specification - https://material.io/

Create react app - https://create-react-app.dev/
