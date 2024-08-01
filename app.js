const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello World from React"),
        React.createElement("h2", {}, "I am an h2 tag")]
    ));

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" }, React.createElement("h1", {}, "this is child1 h1 tag")),
    React.createElement("div", { id: "child2" }, React.createElement("h1", {}, "this is h1 tag from chil 2"))])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(heading)