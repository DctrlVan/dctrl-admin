import _ from 'lodash'

const state = {
  isUserClaiming:false,
  claimId: null,
  active: [{
    _id: '1',
    name: 'Good Meetup',
    amount: 15000,
    description: 'Host an awesome meetup that brings a whole bunch of new faces into the space and teaches them about technology, decentralization, justice, etc...',
    tags: ['meetup', 'propaganda', 'people', 'intelligence'],
    monthlyBudget: 50000,
    claimed: false,
    claimedBy:'',
  },{
    _id: '1',
    name: 'Take out Garbage',
    amount: 3500,
    description: 'Trash bin is in the alley. The key is in the locker. Go out the back way.',
    tags: ['dangerous', 'strength'],
    monthlyBudget: 50000,
    claimed: false,
    claimedBy:'',
    isUserClaiming:false,
  }],
}

const mutations = {
    setIsUserClaiming(bounties, isClaiming){
        bounties.isUserClaiming = isClaiming
    },
    claimBounty(bounties, bountyId){
        bounties.forEach( bounty => {
            if (bounty._id === bountyId){
                bounty.claimed = true
            }
        })
    },
    addBounty(bounties, bounty){
        bounties.active.push(bounty)
    }
}

const actions = {
    ADD_BOUNTY(){
        // TODO post req then mutate
    },
    CLAIM_BOUNTY(){
        // TODO post req then mutate
    }
}

export default {
  state,
  mutations,
  actions,
}
