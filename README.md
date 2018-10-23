# bex - book exchange website

Instructions for running 
```
npm install # install dependecies
npm start # run application
`````

# Contributing

There will only be a few pages like Landing, Results, Setting. So when you're
designing the webpage just keep those in the containers. For anything that represents
an entity (i.e. a form, table, etc) consider putting it into a component. Then reusing 
that in the container. 

# Structure
Inside ``src/`` you will find a directory for components, containers, and the App.js files.
The app.js files are the main entry point into the application, here we simply define
the which webpages should be rendered by which containers, and route the url respectively. 
Components are used within containers etc, as they solve some form of functionality. 



