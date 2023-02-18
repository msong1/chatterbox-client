// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  _rawData: [],

  initialize: function() {
    App.username = window.location.search.substr(10);



    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    // initialize the database

    // store fetched



  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      if (this._rawData[0] && (data[0].message_id === this._rawData[0].message_id)) {
        return;
      }

      // if the data are different, update the database
      this._rawData = data;
      Rooms._data = Array.from(new Set(App._rawData.map(obj => {
        if (obj.roomname !== null) {
          return obj.roomname; // HTML encode before storing it
        }
      }))); //
      Friends._data = [];
      Messages._data = [];

      callback(); //=========
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
