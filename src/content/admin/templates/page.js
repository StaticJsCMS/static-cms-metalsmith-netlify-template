// use htm so we don't have to build templates with h()
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const { entry } = this.props;

    return html`
      <main>
        <h1>${entry.data.title}</h1>
        ${this.props.widgetFor("body")}
      </main>
    `;
  },
});

export default Page;
