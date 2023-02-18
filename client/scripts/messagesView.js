// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render(App._rawData);
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    //MessagesView.renderMessage(obj)
    messages.forEach(message => MessagesView.$chats.append(MessagesView.renderMessage(message)));
    // MessagesView.$chats.append(MessagesView.renderMessage(messages[0]));
    // make the usernames clickable
    // RoomsView.$button.on('click', RoomsView.handleClick);
    $('.username-text').on('click', (event) => {
      Friends.add(event.currentTarget.innerText); //this ==> MessagesView
      Friends.toggle(event);
    });


  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // this method is the same as MessageVie.render
    // but will use it like below to keep the provided structure
    return MessageView.render(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};