/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');
firstArticle = articleItems.first();
ul = firstArticle.find('ul');
ul.remove();
