module.exports = {
    Message: {
        __resolveType(msg, _context, _info){
            if (msg.type == "PROMISE") {
                return 'PromiseMessage';
            } else if (msg.type == "IDENTITY") {
                return 'IdentityMessage';
            } else {
                return 'GenericMessage';
            }
        },
    },
    Name: {
        __resolveType(msg, _context, _info){
            if (msg.type == "RESERVES") {
                return 'ReservesAddress';
            } else if (msg.type == "ACCOUNT") {
                return 'AccountHandle';
            } else {
                return 'CommonName';
            }
        },
    },
    Evidence: {
        __resolveType(_msg, _context, _info){
            return 'Message';
        }
    },
    Query: {
        allPromises: (_, __, {dataSources}) =>
            dataSources.ssbFlumeAPI.getAllPromises(),
        promises: (_, { feedId }, {dataSources}) =>
            dataSources.ssbFlumeAPI.getPromisesByFeedId({ feedId: feedId }),
        pendingPromises: (_, { feedId }, {dataSources}) =>
            dataSources.ssbFlumeAPI.getPendingPromisesByFeedId({ feedId: feedId }),
        promiseChain: (_, { claimName, feedId }, {dataSources})  => 
            dataSources.ssbFlumeAPI.getPromiseChain({ claimName: claimName, feedId: feedId }),
        promise: (_, { claimName, feedId, nonce }, {dataSources})  => 
            dataSources.ssbFlumeAPI.getPromise({ claimName: claimName, feedId: feedId, nonce: nonce }),
        messages: (_, { feedId }, { dataSources }) =>
            dataSources.ssbFlumeAPI.getFeedMessages({ feedId: feedId }),
        feed: (_, { id }, { dataSources }) =>
            dataSources.ssbFlumeAPI.getFeed({ feedId: id }),
        allIdMsgs: (_, __, {dataSources}) =>
            dataSources.ssbFlumeAPI.getAllIdMsgs(),
        allFeedIds: (_, __, {dataSources}) =>
            dataSources.ssbFlumeAPI.getFeedIds(),
        claimSettlement: (_, { claimName }, {dataSources}) =>
            dataSources.ssbFlumeAPI.getSettlementByClaimName({ claimName }),
        allSettlements: (_, __, {dataSources}) =>
            dataSources.ssbFlumeAPI.getAllSettlements()
    }
  };