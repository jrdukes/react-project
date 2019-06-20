const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Nick", animal: "Dog", breed: "Lab Mix" }),
    React.createElement(Pet, { name: "Tucker", animal: "Dog", breed: "Mutt" }),
    React.createElement(Pet, {
      name: "Fred",
      animal: "Frog",
      breed: "Bull Frog"
    }),
    React.createElement(Pet, {
      name: "Wayne",
      animal: "Llama",
      breed: "Llama Mix"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
