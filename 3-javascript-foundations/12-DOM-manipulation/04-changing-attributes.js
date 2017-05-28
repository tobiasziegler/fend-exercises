/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('.nav-list');
navItem1 = navList.children().first();
anchor1 = navItem1.find('a');
anchor1.attr('href', '#1');
