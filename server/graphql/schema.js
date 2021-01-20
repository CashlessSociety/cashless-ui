const { gql } = require('apollo-server-express');
const Date = require('graphql-date');


const typeDefs = gql`
    scalar Date

    interface Name {
        type: NameType!
    }

    type Feed implements Name {
        type: NameType!
        id: ID
        publicKey: String
        reserves: ReservesAddress
        commonName: CommonName
        verifiedAccounts: [AccountHandle]
        messages: [Message]
        assets: [PromiseMessage]
        liabilities: [PromiseMessage]
        settledPromises: [PromiseMessage]
        settlements: [CompleteSettlementMessage]
    }

    type ReservesAddress implements Name {
        type: NameType!
        address: String
    }

    type CommonName implements Name {
        type: NameType!
        name: String
        id: ID
    }

    type AccountHandle implements Name {
        type: NameType!
        accountType: AccountType
        handle: String
    }

    interface Message {
        id: ID!
        type: MsgType!
        previous: String
        header: Header
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
    }

    type PromiseMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        recipient: Feed
        amount: Float
        issueDate: Date
        vestDate: Date
        denomination: Denomination
        memo: String
        tags: [String]
        nonce: Int
        claimName: ID
        claim: ReservesClaim
        isLatest: Boolean
        reciprocity: CompleteReciprocityMessage
    }

    type IdentityMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        feed: Feed
        name: Name
        evidence: Evidence
    }

    type CompleteSettlementMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        amount: Float
        denomination: Denomination
        claimName: ID
        nonce: Int
        claim: ReservesClaim
        tx: ID
        confirmed: Boolean
    }

    type ProposeReciprocityMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        amount: Float
        denomination: Denomination
        promises: [PromiseMessage]
        reciprocityId: ID
    }

    type AcceptReciprocityMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        proposal: ProposeReciprocityMessage
        outgoingOriginalClaim: ReservesClaim
        incomingOriginalClaim: ReservesClaim
        outgoingUpdatedClaim: ReservesClaim
        incomingUpdatedClaim: ReservesClaim
    }

    type CompleteReciprocityMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        proposal: ProposeReciprocityMessage
        originalClaims: [ReservesClaim]
        updatedClaims: [ReservesClaim]
    }

    type AvailabilityMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        skill: Skill
        isAvailable: Boolean   
    }

    type AdMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        title: String
        text: String
        rate: Float
        denomination: Denomination
        minHours: Int
        maxHours: Int
        adType: AdType
    }

    type GenericMessage implements Message {
        id: ID!
        type: MsgType!
        header: Header
        previous: String
        hash: HashFunc
        author: Feed
        sequence: Int
        timestamp: Date
        signature: String
        content: String
    }

    interface Evidence {
        type: EvidenceType!
    }

    type MessageEvidence implements Evidence {
        type: EvidenceType!
        id: ID
        feedId: ID
        sequence: Int
    }

    type ReservesClaim {
        data: String
        fromSignature: EthereumSignature
        toSignature: EthereumSignature
    }

    type Header {
        version: Float
        network: String
    }

    type EthereumSignature {
        v: Int
        r: String
        s: String
    }

    type Skill {
        id: ID
        name: String
    }

    enum HashFunc {
        SHA256
        KECCAK256
    }

    enum Denomination {
        USD
    }

    enum MsgType {
        IDENTITY
        AD
        AVAILABILITY
        PROMISE
        COMPLETE_SETTLEMENT
        PROPOSE_RECIPROCITY
        ACCEPT_RECIPROCITY
        COMPLETE_RECIPROCITY
        GENERIC
    }

    enum EvidenceType {
        MESSAGE
    }

    enum NameType {
        FEED
        COMMON
        RESERVES
        ACCOUNT
    }

    enum AccountType {
        FACEBOOK
        GOOGLE
        TWITTER
    }

    enum AdType {
        OFFER
        REQUEST
    }

    union FeedMessage = AdMessage | AvailabilityMessage  

    type Query {
        allFeedIds: [ID]
        allCurrentPromises: [PromiseMessage]
        allPromises: [PromiseMessage]
        allIdMsgs: [IdentityMessage]
        allMessagesFor(userId:ID): [FeedMessage]
        availabilityMessage(id:ID!): AvailabilityMessage
        adMessage(id:ID): AdMessage
        feed(id: ID!): Feed
        promises(feedId: ID!): [PromiseMessage]
        promiseChain(claimName: ID!, feedId: ID!): [PromiseMessage]
        promise(claimName: ID!, feedId: ID!, nonce: Int!): PromiseMessage
        messages(feedId: ID!): [Message]
        pendingPromises(feedId: ID!): [PromiseMessage]
        claimSettlement(claimName: ID!): [CompleteSettlementMessage]
        allSettlements: [CompleteSettlementMessage]
        activeProposals: [ProposeReciprocityMessage]
    }
`;

module.exports = typeDefs;