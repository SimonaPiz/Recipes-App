# Recipes App
> Exercise from Codecademy - Redux
> 
> Imagine you are working for the software development company whose main product is this Recipes application.  
> The product manager has determined the desired features and functionality,   
> the graphic designer has defined its style, and the React engineer has created its components.   
> 
> Now it is up to you, the Redux Engineer, to design the state management system that can put it all together!  


## This application does the following:


- displays a set of recipes which are pulled from a database.
- allows the user to add/remove their favorite recipes to/from a separate list.
- allows the user to enter a search term to filter the visible recipes.

### Example of the final product:
![image](https://user-images.githubusercontent.com/91121660/160582056-c31987c7-749b-469b-b828-5519e38c0108.png)

## Initial Questions:
- What React components exist in this application?
- What data does each component need from the store?
- What actions occur within this application?
- How do those actions update the store’s state?

## Before continuing on, 
make sure that you are familiar with the following terms and concepts relating to React and Redux:

- #### React
  - How to create components
  - How to render components using `ReactDOM.render()`
  - How to nest components and pass data through props
- #### Redux
  - One-way data flow model: `State → View → Actions → State → View` …
  - How to create a reducer function: `(state, action) => nextState`
  - How to write action objects and action creators
  - How to create a `store` using `createStore()`
  - How to use the `store` methods `getState()`, `dispatch()`, and `subscribe()`
