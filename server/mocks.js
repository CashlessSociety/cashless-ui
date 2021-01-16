const casual = require('casual');
const { MockList } = require('apollo-server');

const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => casual.name,
    Date: () => {
        return new Date();
    },
    Person: () => ({
        name: casual.name,
        age: () => casual.integer(0, 120),
    }),
    Query: () =>({
        allMessagesFor: () => new MockList([50, 100]),
    }),
};

module.exports = mocks;