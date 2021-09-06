function getShortMessages(messages) {
    // SOLUTION GOES HERE

    let result = messages.filter(word => word.message.length < 51).map(m => m.message);
    return result;
  }
  
  module.exports = getShortMessages