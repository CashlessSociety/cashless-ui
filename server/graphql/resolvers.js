module.exports = {
    Message: {
        __resolveType(msg, _context, _info){
            if (msg.type == "PROMISE") {
                return 'PromiseMessage';
            } else if (msg.type == "IDENTITY") {
                return 'IdentityMessage';
                // TODO: ProposeSettlementMessage for settlements with a dispute period (two part settlements)
            } else if (msg.type == "COMPLETE_SETTLEMENT") {
                return 'CompleteSettlementMessage';
            } else if (msg.type == "PROPOSE_RECIPROCITY") {
                return 'ProposeReciprocityMessage';
            } else if (msg.type == "ACCEPT_RECIPROCITY") {
                return 'AcceptReciprocityMessage';
            } else if (msg.type == "COMPLETE_RECIPROCITY") {
                return 'CompleteReciprocityMessage';
            } else if (msg.type == "AD") {
                return 'AdMessage';
            } else if (msg.type == "AVAILABILITY") {
                return 'AvailabilityMessage';
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
            } else if (msg.type == "FEED") {
                return 'Feed';
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
        allCurrentPromises: (_, __, {dataSources}) =>
            dataSources.ssbFlumeAPI.getActivePromises(),
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
            dataSources.ssbFlumeAPI.getAllSettlements(),
        activeProposals: (_, __, {dataSources}) =>
            dataSources.ssbFlumeAPI.getActiveReciprocityProposals(),
    }
  };