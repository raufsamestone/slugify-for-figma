import * as React from "react";
import * as ReactDOM from "react-dom";
import Slugify from "slugify";
import * as content from "./content";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  text = (element: HTMLInputElement) => {
    this.textbox = element;
  };

  onCreateFrame = () => {
    const texted = Slugify(this.textbox.value, {
      lower: true,
      replacement: "-",
    });
    const textForTitle = Slugify(this.textbox.value, { replacement: "-" });
    const textForName = this.textbox.value;
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-frame",
          texted,
          textForTitle,
          textForName,
        },
      },
      "*"
    );
  };

  onCreateText = () => {
    const texted = Slugify(this.textbox.value, {
      lower: true,
      replacement: "-",
    });
    const textForTitle = Slugify(this.textbox.value, { replacement: "-" });
    const textForName = this.textbox.value;
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-text",
          texted,
          textForTitle,
          textForName,
        },
      },
      "*"
    );
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  render() {
    return (
      <div>
        <img className="logo" src={require("./logo.svg")} />
        <p>{content.description}</p>
        <input id="input" placeholder="Type your text..." ref={this.text} />

        <div id="wrapper">
          <button id="create" onClick={this.onCreateFrame}>
            {content.buttonGenerateFrame}
          </button>
          <br />
          <span>Or</span>
          <br />      
          <br />
          <text id="createText" onClick={this.onCreateText}>
            {content.buttonGenerateText}
          </text>
        </div>
        <footer>
          <a
            href={`https://${content.website}`}
            title={`${content.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.website}
          </a>
          <a
            href={`https://twitter.com/${content.username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${content.username}/${content.repositoryName}`}
          >
            GitHub
          </a>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
