# Beta Site
## Learn Section
-   Describing the UI
    -   nextjs renders partial html and rest react takes over by default
    -   use as little react possible
    -   write a function to create jsx to html
    -   What does react fragment actually do?
    -   Why do multiple JSX tags need to be wrapped?
        -   JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
    -  Quotes for strings "", '', { for scripts }
    -   `{{ Double curlies for objects and css }}`
    -   `<ul style="background-color: black">` would be written as `<ul style={{ backgroundColor: 'black' }}>`
    -   Don’t miss the pair of { and } curlies inside of ( and ) when declaring props:   
    -   Passing Props
        -    Props are not always static
        -   You can’t change props. When you need interactivity, you’ll need to set state
        -   {children} prop
        - Props are read-only snapshots in time: every render receives a new version of props.
    -   Conditional Rendering
        -   Don’t put numbers on the left side of &&.
        -   In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />`, otherwise `<B />`”.
        -   In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”.
    -   Rendering Lists
        -   key can be built using database values or crypto.randomUUIID()
        -   Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
        -   Keys must not change or that defeats their purpose! Don’t generate them while rendering.
        -   do not generate keys on the fly, e.g. with key={Math.random()}
    -   Keep Components Pure
        -   In React there are three kinds of inputs that you can read while rendering: props, state, and context. You should always treat these inputs as read-only.
        -   React offers a “Strict Mode” in which it calls each component’s function twice during development.
        -   You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
        -   Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
        -   Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.
        -   Pure functions can be run on server and you need to not worry since the return are always same.
        -   Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
-   Adding Interactivity
    -   If copying objects in code gets tedious, you can use a library like Immer to reduce repetitive code:
    -   State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects and arrays that you hold in the React state directly. Instead, when you want to update an object and array, you need to create a new one (or make a copy of an existing one), and then update the state to use that copy.
        -   Arrays are another type of mutable JavaScript objects you can store in state and should treat as read-only. Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array:
    -   Responding to Events
        -   By convention, it is common to name event handlers as handle followed by the event name. You’ll often see onClick={handleClick}, onMouseEnter={handleMouseEnter}, and so on.
        -   Functions passed to event handlers must be passed, not called.
        -   If you want to define your event handler inline, wrap it in an anonymous function like so: `<button onClick={() => alert('You clicked me!')}>`
        -   By convention, event handler props should start with on, followed by a capital letter.
        -   When does the event propagation stop? at body? head?
        -   Capture events are useful for code like routers or analytics, but you probably won’t use them in app code.
        -   You can handle events by passing a function as a prop to an element like <button>.
        -   Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
        -   You can define an event handler function separately or inline.
        -   Event handlers are defined inside a component, so they can access props.
        -   You can declare an event handler in a parent and pass it as a prop to a child.
        -   You can define your own event handler props with application-specific names.
        -   Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
        -   Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
        -   Explicitly calling an event handler prop from a child handler is a good alternative to propagation.
    -   State: A Component's Memory
        -   Hooks are special functions that are only available while React is rendering
        -   Use a state variable when a component needs to “remember” some information between renders.
        -   State variables are declared by calling the useState Hook.
        -   Hooks are special functions that start with use. They let you “hook into” React features like state.
        -   Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
        -   The useState Hook returns a pair of values: the current state and the function to update it.
        -   You can have more than one state variable. Internally, React matches them up by their order.
        -   State is private to the component. If you render it in two places, each copy gets its own state.
    -   Render and Commit
        -   After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as “browser rendering”, we’ll refer to it as “painting” to avoid confusion in the rest of these docs.
        -   Any screen update in a React app happens in three steps:
            -   Trigger
            -   Render
            -   Commit
        -   You can use Strict Mode to find mistakes in your components
        -   React does not touch the DOM if the rendering result is the same as last time
    -   State as a Snapshot
        -   Setting state requests a new render.
        -   React stores state outside of your component, as if on a shelf.
        -   When you call useState, React gives you a snapshot of the state for that render.
        -   Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
        -   Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
        -   You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
        -   Event handlers created in the past have the state values from the render in which they were created.
    -   Queueing a Series of State Updates
        -   React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.
        -   React does not batch across multiple intentional events like clicks—each click is handled separately
        -   Event Handler and react re-rendering has a different relationship. Not all event handler's invoke react re-render, unlike on click.
        -   It is an uncommon use case, but if you would like to update the same state variable multiple times before the next render, instead of passing the next state value like setNumber(number + 1), you can pass a function that calculates the next state based on the previous one in the queue, like setNumber(n => n + 1). It is a way to tell React to “do something with the state value” instead of just replacing it.
        -    updater functions must be pure and only return the result. Don’t try to set state from inside of them or run other side effects
        -   It’s common to name the updater function argument by the first letters of the corresponding state variable:
        -    another common convention is to repeat the full state variable name, like setEnabled(enabled => !enabled), or to use a prefix like setEnabled(prevEnabled => !prevEnabled).
        -   Setting state does not change the variable in the existing render, but it requests a new render.
        -   React processes state updates after event handlers have finished running. This is called batching.
        -   To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.
    -   Updating Objects in State
        -    although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.
        -   the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.
        -   Immer and Proxy built-in objects
        -   Treat all state in React as immutable.
        -   When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
        -   Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
        -   You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
        -   Spread syntax is shallow: it only copies one level deep.
        -   To update a nested object, you need to create copies all the way up from the place you’re updating.
        -   To reduce repetitive copying code, use Immer.
    -   Updating Arrays in State
        -   https://beta.reactjs.org/learn/updating-arrays-in-state#updating-arrays-without-mutation
        -    you don’t want to mutate objects or arrays in state
            -   because react creates a snapshot of state and works on it.
            -   Experiment and play with this concept, try some mutations and see when it breaks, local variable vs state 
        -   You can put arrays into state, but you can’t change them.
        -   Instead of mutating an array, create a new version of it, and update the state to it.
        -   You can use the [...arr, newItem] array spread syntax to create arrays with new items.
        -   You can use filter() and map() to create new arrays with filtered or transformed items.
        -   You can use Immer to keep your code concise.
-   Managing State
    -   Reacting to Input with State
        -   Notice that human inputs often require event handlers!
        -   Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
        -   When developing a component:
            -   Identify all its visual states.
            -   Determine the human and computer triggers for state changes.
            -   Model the state with useState.
            -   Remove non-essential state to avoid bugs and paradoxes.
            -   Connect the event handlers to set state.
    -   Choosing the State Structure
        -   Think about create a state finite machines out of an existing React Component
        -   Don’t mirror props in state 
        -   Think about state as a snapshot when trying to create multiple states - Are we duplicating a value?
        -   https://docs.flutter.dev/development/data-and-backend/state-mgmt/ephemeral-vs-app
        -   If two state variables always update together, consider merging them into one.
        -   Choose your state variables carefully to avoid creating “impossible” states.
        -   Structure your state in a way that reduces the chances that you’ll make a mistake updating it.
        -   Avoid redundant and duplicate state so that you don’t need to keep it in sync.
        -   Don’t put props into state unless you specifically want to prevent updates.
        -   For UI patterns like selection, keep ID or index in state instead of the object itself.
        -   If updating deeply nested state is complicated, try flattening it.
    -   Sharing State Between Components
        -   “lift their state up” to a parent component in three steps:
            -   Remove state from the child components.
            -   Pass hardcoded data from the common parent.
            -   Add state to the common parent and pass it down together with the event handlers.
        -   When you want to coordinate two components, move their state to their common parent.
        -   Then pass the information down through props from their common parent.
        -   Finally, pass the event handlers down so that the children can change the parent’s state.
        -   It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).
    -   Preserving and Resetting State
        -   https://beta.reactjs.org/learn/preserving-and-resetting-state#the-ui-tree
        -   Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React!
        -   React keeps state for as long as the same component is rendered at the same position.
        -   State is not kept in JSX tags. It’s associated with the tree position in which you put that JSX.
        -   You can force a subtree to reset its state by giving it a different key.
        -   Don’t nest component definitions, or you’ll reset state by accident.
    -   Extracting State Logic into a Reducer
        -   An action object can have any shape.
        -   it’s a convention to use switch statements inside reducers
        -   Extremely important to practice this and find out how the standard library do it like redux and other
        -   Reducers must be pure. Similar to state updater functions, reducers run during rendering! (Actions are queued until the next render.) This means that reducers must be pure—same inputs always result in the same output. They should not send requests, schedule timeouts, or perform any side effects (operations that impact things outside the component). They should update objects and arrays without mutations.
        -   Each action describes a single user interaction, even if that leads to multiple changes in the data. For example, if a user presses “Reset” on a form with five fields managed by a reducer, it makes more sense to dispatch one reset_form action rather than five separate set_field actions. If you log every action in a reducer, that log should be clear enough for you to reconstruct what interactions or responses happened in what order. This helps with debugging!
        -   To convert from useState to useReducer:
            -   Dispatch actions from event handlers.
            -   Write a reducer function that returns the next state for a given state and action.
            -   Replace useState with useReducer.
        -   Reducers require you to write a bit more code, but they help with debugging and testing.
        -   Reducers must be pure.
        -   Each action describes a single user interaction.
        -   Use Immer if you want to write reducers in a mutating style.
    -   Passing Data Deeply with Context
        -   Why can a hook be called at the top level component only?
        -   Context lets a component provide some information to the entire tree below it.
        -   To pass context:
            -   Create and export it with export const MyContext = createContext(defaultValue).
            -   Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
            -   Wrap children into <MyContext.Provider value={...}> to provide it from a parent.
        -   Context passes through any components in the middle.
        -   Context lets you write components that “adapt to their surroundings”.
        -   Before you use context, try passing props or passing JSX as children.
        -   It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.
    -   Scaling Up with Reducer and Context
        -   Extremely crucial to practice this one
        -   You can combine reducer with context to let any component read and update state above it.
        -   To provide state and the dispatch function to components below:
            -   Create two contexts (for state and for dispatch functions).
            -   Provide both contexts from the component that uses the reducer.
            -   Use either context from components that need to read them.
        -   You can further declutter the components by moving all wiring into one file.
            -   You can export a component like TasksProvider that provides context.
            -   You can also export custom Hooks like useTasks and useTasksDispatch to read it.
        -   You can have many context-reducer pairs like this in your app.
-   Escape Hatches
    -   There are two common cases in which you don’t need Effects:
        -   You don’t need Effects to transform data for rendering.
        -   You don’t need Effects to handle user events.
    -   Referencing Values with Refs
        -   Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
        -   A ref is a plain JavaScript object with a single property called current, which you can read or set.
        -   You can ask React to give you a ref by calling the useRef Hook.
        -   Like state, refs let you retain information between re-renders of a component.
        -   Unlike state, setting the ref’s current value does not trigger a re-render.
        -   Don’t read or write ref.current during rendering. This makes your component hard to predict.
    -   Manipulating the DOM with Refs
        -   Use of refs to to a scrollIntoView with cats. Must try locally
        -   In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, to forward their refs to their DOM nodes. On the other hand, high-level components like forms, lists, or page sections usually won’t expose their DOM nodes to avoid accidental dependencies on the DOM structure.
        -   In general, you don’t want to access refs during rendering.
        -   Refs are a generic concept, but most often you’ll use them to hold DOM elements.
        -   You instruct React to put a DOM node into myRef.current by passing <div ref={myRef}>.
        -   Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
        -   A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.
        -   Avoid changing DOM nodes managed by React.
        -   If you do modify DOM nodes managed by React, modify parts that React has no reason to update.
    -   Synchronizing with Effects
        -   consider using or building a client-side cache. Popular open source solutions include React Query, useSWR, and React Router 6.4+
        -   Unlike events, Effects are caused by rendering itself rather than a particular interaction.
        -   Effects let you synchronize a component with some external system (third-party API, network, etc).
        -   By default, Effects run after every render (including the initial one).
        -   React will skip the Effect if all of its dependencies have the same values as during the last render.
        -   You can’t “choose” your dependencies. They are determined by the code inside the Effect.
        -   An empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.
        -   When Strict Mode is on, React mounts components twice (in development only!) to stress-test your Effects.
        -   If your Effect breaks because of remounting, you need to implement a cleanup function.
        -   React will call your cleanup function before the Effect runs next time, and during the unmount.
    -   You Might Not Need an Effect
        -   ```
            // How to measure time
            console.time('filter array');
            const visibleTodos = getFilteredTodos(todos, filter);
            console.timeEnd('filter array');
            ```
        -   Think about how many re-renders this useEffect will call (due to parent's state change)
        -   While doing data-fetching in useEffect think about debouncing and stale responses.
        -   To fix the race condition, you need to add a cleanup function to ignore stale responses:
        -   Always think how to reduce the time when a user sees spinner.
        -   If you can calculate something during render, you don’t need an Effect.
        -   To cache expensive calculations, add useMemo instead of useEffect.
        -   To reset the state of an entire component tree, pass a different key to it.
        -   To reset a particular bit of state in response to a prop change, set it during rendering.
        -   Code that needs to run because a component was displayed should be in Effects, the rest should be in events.
        -   If you need to update the state of several components, it’s better to do it during a single event.
        -   Whenever you try to synchronize state variables in different components, consider lifting state up.
        -   You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.
    -   Lifecycle of Reactive Effects
        -   Some Effects don’t return a cleanup function at all. More often than not, you’ll want to return one—but if you don’t, React will behave as if you returned an empty cleanup function that doesn’t do anything.
        -   useEffect is compared with Object.is
        -    Props, state, and other values declared inside the component are reactive because they’re calculated during rendering and participate in the React data flow.
        -   All variables declared in the component body are reactive
        -   All values inside the component (including props, state, and variables in your component’s body) are reactive. Any reactive value can change on a re-render, so you need to include reactive values as Effect’s dependencies.
        -   Avoid relying on objects and functions as dependencies.
        -   Components can mount, update, and unmount.
        -   Each Effect has a separate lifecycle from the surrounding component.
        -   Each Effect describes a separate synchronization process that can start and stop.
        -   When you write and read Effects, you should think from each individual Effect’s perspective (how to start and stop synchronization) rather than from the component’s perspective (how it mounts, updates, or unmounts).
        -   Values declared inside the component body are “reactive”.
        -   Reactive values should re-synchronize the Effect because they can change over time.
        -   The linter verifies that all reactive values used inside the Effect are specified as dependencies.
        -   All errors flagged by the linter are legitimate. There’s always a way to fix the code that doesn’t break the rules.
    -   Separating Events from Effects
        -   Use a special Hook called useEffectEvent to extract this non-reactive logic out of your Effect:
        -   Event handlers run in response to specific interactions.
        -   Effects run whenever synchronization is needed.
        -   Logic inside event handlers is not reactive.
        -   Logic inside Effects is reactive.
        -   You can move non-reactive logic from Effects into Effect Events.
        -   Only call Effect Events from inside Effects.
        -   Don’t pass Effect Events to other components or Hooks.
    -   Removing Effect Dependencies
        -   This might feel like solving an equation. You might start with a goal (for example, to remove a dependency), and you need to “find” the exact code matching that goal. Not everyone finds solving equations fun, and the same thing could be said about writing Effects! Luckily, there is a list of common recipes that you can try below.
        -   Dependencies should always match the code.
        -   When you’re not happy with your dependencies, what you need to edit is the code.
        -   Suppressing the linter leads to very confusing bugs, and you should always avoid it.
        -   To remove a dependency, you need to “prove” to the linter that it’s not necessary.
        -   If the code in your Effect should run in response to a specific interaction, move that code to an event handler.
        -   If different parts of your Effect should re-run for different reasons, split it into several Effects.
        -   If you want to update some state based on the previous state, pass an updater function.
        -   If you want to read the latest value without “reacting” it, extract an Effect Event from your Effect.
        -   In JavaScript, objects and functions are considered different if they were created at different times.
        -   Try to avoid object and function dependencies. Move them outside the component or inside the Effect.
    -   Reusing Logic with Custom Hooks
        -   Custom Hooks let you share logic between components.
        -   Custom Hooks must be named starting with use followed by a capital letter.
        -   Custom Hooks only share stateful logic, not state itself.
        -   You can pass reactive values from one Hook to another, and they stay up-to-date.
        -   All Hooks re-run every time your component re-renders.
        -   The code of your custom Hooks should be pure, like your component’s code.
        -   Wrap event handlers received by custom Hooks into Effect Events.
        -   Don’t create custom Hooks like useMount. Keep their purpose specific.
        -   It’s up to you how and where to choose the boundaries of your code.