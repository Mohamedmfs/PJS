// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// }

// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     const self = this;
//     self.tags.forEach(function(tag) {
//       console.log(self.title, tag);
//     })
//   }
// }

// video.showTags();

function playVideo() {
  console.log(this);
}

playVideo();