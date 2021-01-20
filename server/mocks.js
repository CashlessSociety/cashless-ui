const casual = require('casual');
const { MockList } = require('apollo-server');

const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => casual.name,
    Date: () => {
        return new Date();
    },
    AdMessage: () => ({
        title: "Request title here",
        text: "user description of what the card is"
    }),
    Query: () =>({
        allMessagesFor: () => new MockList([50, 100]),
    }),
};

module.exports = mocks;