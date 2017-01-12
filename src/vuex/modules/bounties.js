import _ from 'lodash'

const state = {
  isUserReserving:false,
  isUserClaiming:false,
  claimId: null,
  claimAlias:'',
  claimAddress:'',
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
    description: 'Trash bin is in the alley. The key is in the locker. Go out the back way. Step with care, watch for giant rats. Never lose faith in your safe return.',
    tags: ['danger', 'strength'],
    monthlyBudget: 50000,
    claimed: true,
    claimedBy:'test',
    isUserClaiming:false,
  }],
}

const mutations = {

    setIsUserReserving(bounties, isReserving){
      bounties.isUserReserving = isReserving
    },
    setIsUserClaiming(bounties, isClaiming){
        bounties.isUserClaiming = isClaiming
    },
    setClaimAddress(bounties, address){
        bounties.claimAddress = address
    },
    setClaimId(_id){
        bounties.claimId = _id
    },
    setClaimAlias(alias){
        bounties.claimAlias = alias
    },
    claimBounty(bounties, info){
        bounties.active.forEach( bounty => {
            if (bounty._id === bounties.claimId){
                bounty.claimed = true
                bounty.claimedBy += info.alias
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
    CLAIM_BOUNTY({commit}, info){
        commit('claimBounty', info)
        // TODO post req then mutate
    }
}

export default {
  state,
  mutations,
  actions,
}
