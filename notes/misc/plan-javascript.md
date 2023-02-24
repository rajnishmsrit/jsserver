#   Basics
-   Execution Context / Memory Allocation // Code
-   How does JS works gets executed?
-   Lexical Environment
-   Hoisting
-   Scope, types and shadowing combination questions
-   Scope and Scope chaining, Hoisting and temporal dead zone
-   Block Scope & Shadowing
-   Closures 
-   settimeout and closures


# Types
-   undefined vs not defined
-   primitives and coercing
-   Symbol

# Functions
-   Function and first class citizens/functions
-   Callback functions
-   Pure Functions and Higher Order Functions 
-   map, filter and reduce

#   Asynchronous Nature of Javascript
-   Event loops, message queue and microtasks , macro tasks
-   JS Engines and how they work, AST, Memory Heap etc
-   asynchorous 
-   callback, promises, async/await // settimeout // settimeinterval and Web APIs
-   Behavior of this in js during different function context

# OOPS in JS
-   Behavior of this in js in object and function
-   bind, call, apply
-   Prototypal inheritance 
-   Prototype property and __proto property 
-   Object and its patterns

# Miscellaneous
-   ES6 and newer constructs
-   Feature detection and polyfill
-   Regular expressions 
-   Method chaining and Javascript Number.Math item
-   Storage
    -   Session storage is only for same tab
        -   Cookie
    -   Local storage last as long as you want
        -   stored on global object
-   JSON
    -   stringify
    -   parse
-   Script tag
    -   <script src""></script>
        -   sequential, script blocks html parsing
    -   <script async src""></script>
        -   does not block the html parsing till the script has loaded parallely. Blocks the html parsing when the script is available  
    -   <script defer src""></script>
        -   scripts are fetched parallely and executed once the html is parsed.
-   Events Lifecycle
    -   Event Bubbling and capturing
        -   Some event's do not bubble up like blur, window resize
    -   Event Delegation
    -   Debouncing
    -   Throttling
-   Built-in Objects
-   Web APIs
    -   Mutation Observer API
    -   Intersection Observer API
    -   Performance Observer API