const casual = require('casual');
const { MockList } = require('apollo-server');

const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => casual.name,
    Date: () => {
        return new Date();
    },
    Feed: () => ({
        profileImageSrc: () => "assets/img/" + casual.random_element(['emily', 'james', 'julie', 'mike', 'olivia', 'ryan']) + ".jpg"
    }),
    AdMessage: () => ({
        title: casual.random_element(['help with my thing', 'a new calendar', 'the start of a creation']),
        text:  casual.random_element(['help with my thing', 'a new calendar', 'the start of a creation']),
        skills: () => new MockList([1,1]),
    }),
    AvailabilityMessage: () => ({
        skills: () => new MockList([1,4]),
    }),
    Skill: () => ({
        name:  casual.random_element(['Web Development', 'Photography', 'Advice']),
    }),
   
    Query: () =>({
        allMessagesFor: () => new MockList([50, 100]),
    }),
};

module.exports = mocks;