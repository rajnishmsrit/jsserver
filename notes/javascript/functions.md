# Functions
-   Regular Functions vs Arrow Functions
    -   this is different
-   First class citizens
-   Functional Statement aka functional Declaration
-   Anonymous Function
-   Named Function Expression
-   Params vs Arguments
-   First Class Functions - ability to used like values
-   First class citizens 
-   Arrow Functions
-   Function Expression
-   `var a = function() {}`
-   reduce
    - 
- Callback function
  - Callback hell or pyramid of doom
  - Creates inversion of control (very bad)







-   React events do not work exactly the same as native events.
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
why is this rendering everytime we use it?

argument forwarding in arrow function?

Hoisiting is the difference b/w functional statement and functional declaration

