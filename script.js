const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],

  showTags () {
    const self = this;
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();
