const TopicsButton = require("./topicsButton");
const SeeAllBlogCta = require("./seeAllBlogCta");

var md = require("markdown-it")({
  html: true,
});

function LatestBlogPost({ post }) {
  return /*html*/ `
    <article class="latestBlogPost">
      <h3 class="latestBlogPost__title">${post.title}</h3>

      <div class="latestBlogPost__excerpt">
        ${md.render(post.excerpt)}
      </div>

      <div class="latestBlogPost__topics">
        ${TopicsButton({
          topics: post.topicsCollection.items,
          url: `/blog/${post.slug}/`,
          ariaLabel: `Read ${post.title}`,
        })}
      </div>

      ${SeeAllBlogCta()}
    </article>
  `;
}

module.exports = LatestBlogPost;