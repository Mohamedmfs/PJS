const post = {
  title: 'Post',
  body: 'knsjdnsdnlknsdlkn k skfv kjvkjvnvkv ivk vurhr',
  author: 'Hassan Habib',
  views: 21,
  comments: [
    {author: 'Habib Ali',
    body: 'dgfbjdnjkbd uisdbjkvnjsv svbjksdhui hviuvbdbsjbs'},

    {author: 'khabib Ali',
      body: 'dgfbjdnjkbd uisdbjkvnjsv svbjksdhui hviuvbdbsjbs'},
  ],
  isLive: true
}

console.log(post)

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
}

const newPost = new Post('my title', 'a', 'khabib')

console.log(newPost);