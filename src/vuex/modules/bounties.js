import _ from 'lodash'

const state = {
  active: [{
    _id: '1',
    name: 'Good Meetup',
    amount: 3500,
    description: 'Host an awesome meetup that brings a whole bunch of new faces into the space and teaches them about technology, decentralization, justice, etc...',
    tags: ['meetup', 'propaganda', 'people'],
    monthlyBudget: 50000,
    claimed: false,
  }],
  isUserClaiming:false,
}

const mutations = {
    setIsUserClaiming(bounties, isClaiming){
        bounties.isUserClaiming = isClaiming
    },
    claimBounty(bounties, bountyId){
        bounties.forEach( bounty => {
            if (bounty._id === bountyId){
                console.log('bounty claimed!')
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
