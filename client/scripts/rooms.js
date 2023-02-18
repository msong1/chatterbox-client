// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function() {
    // add a room by sending a new message with a new room name
    // ask for a roomname
    let roomName = prompt('Please enter a roomname:');
    let message = {
      username: App.username,
      text: `${App.username} has created a new room. Join now to win a $900 million prize!`,
      roomname: roomName
    };

    Parse.create(message);
  },

  filterRoom: function(roomName) {
    // I: string
    // O: an array with message objs

    return App._rawData.filter(messageObj => messageObj.roomname === roomName);
  //need to call renderRoom
  }

};