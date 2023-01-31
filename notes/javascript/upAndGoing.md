# Beginning
-   What is JS?
    -   literals vs value
    -   Number
    -   Coercion - Implicit/Explicit
    -   Javascript is a multi-paradigm language
    -   Backwards compatibility is key to the language
    -   The idea is that JS developers can write code with confidence
    that their code won’t stop working unpredictably because a
    browser update is released.
    -   JS is not forwards-compatible.
    -   HTML and CSS, by contrast, are forwards-compatible but not
    backwards-compatible.
    -   A pragma is a compiler directive.
    -   ES6 modules
    assume strict mode, so all code in such files is automatically
    defaulted to strict mode.
-   Surveying JS
    -   symbol, which is a special-purpose value that behaves as a hidden unguessable value. Symbols are almost exclusively used as special keys on objects
    -   typeof null showing as Object is a historical blunder in JS, can't be fixed.
    -   It’s ill-advised to use const with object values, because those values can still be changed even though the variable can’t be re-assigned.
    -   All value comparisons in JS consider the type of the values being compared, not just the === operator. Specifically, === disallows any sort of type conversion (aka, “coercion”) in its comparison, where other JS comparisons do allow coercion.
    -   NaN === NaN; // false
    -   0 === -0; // true
    -   Use Number.isNaN(..) for NaN comparision or Object.is(...) utility for 0/-0. Humorously, you could think of Object.is(..) as the “quadruple-equals” ====, the reallyreally-strict comparison!
    -   JS does not define === as structural equality for object values. Instead, === uses identity equality for object values.
    -   In JS, all object values are held by reference, are assigned and passed by reference-copy, and to our current discussion, are compared by reference (identity) equality.
    -   Is this structural comparison never a part of functional language?
    -   the == operator should be described as “coercive equality.
    -   relational comparison operators like <, > (and even <= and >=). they’ll allow coercion first (generally, to numbers) if the types
    -   These relational operators typically use numeric comparisons, except in the case where both values being compared are already strings; in this case, they use alphabetical (dictionarylike) comparison of the strings:
    -   