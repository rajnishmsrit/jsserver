# Beta Site
## Learn Section
-   Describing the UI
    -   nextjs renders partial html and rest react takes over by default
    -   use as little react possible
    -   write a function to create jsx to html
    -   What does react fragment actually do?
    -   Why do multiple JSX tags need to be wrapped?
        -   JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.