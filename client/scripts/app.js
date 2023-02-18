// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  _rawData: [],

  initialize: function() {
    App.username = window.location.search.substr(10);




    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner); // we get all the data

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.




  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('data: ', data);
      console.log(1);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // if (this._rawData[0] && (data[0].message_id === this._rawData[0].message_id)) {
      //   callback(); //=========
      //   setTimeout(() => {
      //     App.initialize();
      //   }, 5000);
      //   return;
      // }
      console.log(2);

      // if the data are different, update the database
      this._rawData = data;
      console.log(3);

      // initialize the database
      Rooms._data = App.getVal(App._rawData, 'roomname'); //
      console.log(4);

      Messages._data = [];
      console.log(5);

      FormView.initialize();
      console.log(6);
      RoomsView.initialize(); // specify the initial room to be, or show all the messages something like 'lobby'
      console.log(7);
      MessagesView.initialize();
      console.log(8);

      callback(); //=========
      // console.log('reloaded');
      // setTimeout(() => {
      //   $('#chats').empty();
      //   App.initialize();
      // }, 5000);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  getVal: function(arr, key) {
    return _.uniq(_.pluck(arr, key));
  }




};
