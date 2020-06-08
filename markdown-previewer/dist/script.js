const Header = () =>
React.createElement("div", { className: "jumbotron" },
React.createElement("h1", { id: "text" }, "Markdown Previewer"));



class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      converter: new showdown.Converter(),
      value: `Hello, World!\n===\n---\n# This is an h1\n## This is an h2\n### This is an h3\n#### This is an h4\n##### This is an h5\n###### This is an h6` };



  }

  createMarkup() {
    return { __html: this.state.converter.makeHtml(this.state.value) };
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-12 col-sm-6" },
      React.createElement("textarea", { id: "editor", type: "text", defaultValue: this.state.value,
        onChange: this.handleChange.bind(this) })),



      React.createElement("div", { className: "col-12 col-sm-6" },
      React.createElement("div", { id: "preview" },
      React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() }))))));





  }}


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      React.createElement("div", { className: "App" },
      React.createElement(Header, null),
      React.createElement(Editor, null)));


  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("root"));