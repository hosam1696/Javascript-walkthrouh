# Application Architecture

* single page web application
* the MV* architecture
* Models and collections
* Item views and collection views
* Controllers
* Events
* Router and hash navigation
* Mediator
* Client-side-rendering and virtual DOM
* The web component and  shodwo DOM
* choosing an MV* Framework

## MVC (Model- view - controller)

### Model

    is a component used to store data the data is retrieved from and displayed in the view 

### View

Views are responsible for rendering data stored in modles as HTML

views are usually required a model, a container to be passed as a constructor argument, property and setting

- the model andd template are used to generate the HTML

### Controllers

controllers are usually in charge of handling the lifecycle of specific models and their associated views


#### client-side rendering and virtual DOM

client-side-rendering req  uires a template and some data to generate HTML
some performance detaails that we need to consider when selecting MV* framework

#### Visual studio code

if the version of visual studio code built-in compiller differ from the typescript compiler on your machine

