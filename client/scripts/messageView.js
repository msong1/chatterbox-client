// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  $friend: $('.friend'),
  $stranger: $('.stranger'),
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat stranger">
        <div class= <%-username%>>
          <span class="username-text">
            <%-username%>
          </span>
        </div>
        <div class="messageText">
          <%- text %>
        </div>
      </div>
    `)

};

//<%-...%>  - syntax in _.template to escape HTML