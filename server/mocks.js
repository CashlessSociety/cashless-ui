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
        allMessages: () => new MockList([20, 30]),
    }),
};

module.exports = mocks;