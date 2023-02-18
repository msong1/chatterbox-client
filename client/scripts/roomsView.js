// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // give the button functionality
    RoomsView.$button.on('click', RoomsView.handleClick);

    RoomsView.render();

  },

  render: function() {
    // TODO: Render out the list of rooms.
    // add the list of rooms on the select
    // Room._data[i]
    for (let i = 0; i < Rooms._data.length; i++) {
      RoomsView.$select.append($('<option>', {value: String(Rooms._data[i]), text: String(Rooms._data[i])}));
    }
    // {value: 'opt1', text: 'Opt2'}
    // add action when selected?
    // RoomsView.$select.append(() => console.log($(this)));
    RoomsView.$select.change(() => RoomsView.handleChange(RoomsView.$select.val()));

  },

  renderRoom: function(filteredMessages) {
    // TODO: Render out a single room.
    // reset chat?
    $('#chats').empty();
    MessagesView.render(filteredMessages);
  },

  handleChange: function(roomName) {
    // TODO: Handle a user selecting a different room.
    // FILTER MESSAGES
    let filteredMessages = Rooms.filterRoom(roomName);
    RoomsView.renderRoom(filteredMessages);

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // add a room by sending a default message
    Rooms.addRoom();

    // enter the room filtering?

  }

};

// when 1 is selected,
// invoke a function: handleChange
// filter messages

// when roomname is null, do not filter
// filter message only in that room.
// show the messages