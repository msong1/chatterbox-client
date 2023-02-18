// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

//create friendsView.js.
var Friends = {
  // TODO: Define how you want to store your list of friends.
  _data: [],
  _dummy: '',

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function(username) {
    // add the username to _data
    this._data.push(1, username);
    console.log(username);
  },
  toggle: function(event) {
    // get search term
    let username = event.target.parentElement.attributes.class.value;

    // search
    // go above the family ladder?
    // change the class attribute

    console.log($(`.${username}`).parent()); //.includes('stranger')
    this._dummy = $(`.${username}`).parent();
    let chatbox = $(`.${username}`).parent()
    if (chatbox.attr('class').includes('stranger')) {
      $(`.${username}`).parent().removeClass('stranger');
      $(`.${username}`).parent().addClass('friend');
    } else {
      $(`.${username}`).parent().addClass('stranger');
      $(`.${username}`).parent().removeClass('friend');

    }
  },

  remove: function(username) {

  }

};