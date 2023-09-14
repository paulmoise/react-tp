## Exo on Props

### 1- Add prop-types - optionnel

        npm i prop-types

### 2- Add eslint config

In package.json add a few lines to activate eslint

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

### 3- exercice

1. code a form functional component which returns the following HTML

```jsx
<div>
  <form noValidate autoComplete="off">
    <label htmlFor="name">Name:</label>
    <input id="name" />
    <button>OK</button>
  </form>
</div>
```

2. Pass as props :

   1. the name of the button in property 'buttonTitle' (instead of OK) define a default value of 'OK' for this prop.
   1. add onClick on the button and log something in the console
   1. test it
   1. when clicking on the button the form reloads, to prevent it capture onSubmit event on the &lt;form> and add event.preventDefault(); in the handler
   1. test again, that should prevent the app reload
   1. now the log you consoled should appear
   1. add an event handler on the input for onChange and log the value
   1. define a local variable called name (for FC let name;) to hold that value
   1. add a log on the button handler to log that name value
   1. test
   1. add this JSX code to your JSX : <div>VALUE from Input Name : {name ? name : 'empty'}</div>
   1. test it, does the name value change in HTML ?

3. code a Class Component Migrate the code form FC to CC
