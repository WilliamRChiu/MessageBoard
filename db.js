const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  async function addMessages(message, author){
    messages.push({ text: message, user: author, added: new Date() });
    return;
  };
  module.exports = {addMessages, messages};