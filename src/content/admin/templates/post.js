// use htm so we don't have to build templates with h()
import htm from "https://unpkg.com/htm?module";
// a little help with the date format
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";
const html = htm.bind(h);

// Preview component for a Page
const Post = createClass({
  render() {
    const { entry } = this.props;

    // recreate the blog-post template part
    return html`
      <div class="container">
        <article class="blog-post">
          <h1>${entry.data.blogTitle || null}</h1>
          <time>${format(entry.data.date || new Date(), "dd MMM, yyyy")}</time>
          <img class="blog-image" src="${entry.data.image || null}" alt="${entry.data.blogTitle || null}" />
          ${this.props.widgetFor("body")}
        </article>
      </div>
    `;
  },
});

export default Post;
