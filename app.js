





// const heading = React.createElement
// ("h1",{id:"heading"} , "this is my first react project")
//      const root = ReactDOM.createRoot(document.getElementById('root'));
//      root.render(heading); 

const parant = React.createElement('div',{id:'parant'},[
   React.createElement('h1',{id:'child1'},[
    React.createElement('h2',{},"this is my h2 tage"),
    React.createElement('h3',{},'this is my tage'),
   ]),
   React.createElement('h1',{id:'child2'},[
    React.createElement('h2',{},"this is my h2 tage"),
    React.createElement('h3',{},'this is my tage'),
   ]),
]);


console.log(parant);

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(parant);