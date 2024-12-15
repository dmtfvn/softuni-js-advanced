function getArticleGenerator(articles) {
  const data = articles;
  const content = document.getElementById('content');

  function print() {
    if (data.length > 0) {
      const curEl = data.shift();

      const article = document.createElement('article');
      article.textContent = curEl;

      content.appendChild(article);
    }
  }

  return print;
}