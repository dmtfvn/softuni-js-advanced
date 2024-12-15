function solveCurTask() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      let result = '';

      result += `Post: ${this.title}\n`;
      result += `Content: ${this.content}\n`;

      return result;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);

      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let result = super.toString();

      result += `Rating: ${this.likes - this.dislikes}\n`;

      if (this.comments.length) {
        result += 'Comments:\n';

        this.comments.forEach(c => result += ` * ${c}\n`);
      }

      return result.trim();
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);

      this.views = views;
    }

    toString() {
      let result = super.toString();

      result += `Views: ${this.views}\n`;

      return result.trim();
    }

    view() {
      this.views++;
      return this;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost
  }
}

const classes = solveCurTask();

const post = new classes.Post("Post", "Content");

console.log(post.toString());

const scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

const blog = new classes.BlogPost('Blogs', 'Blog info');
blog.view().view().view();

console.log(blog);