import _ from 'lodash'
import request from 'superagent'

const state = {
  claimId: false,
  claimaddress: false,
  claimNotes: false,
  active: [{
    _id: '12',
    name: 'Host a good meetup.',
    amount: 10000,
    description: 'Host an awesome meetup that brings a whole bunch of new faces into the space and teaches them about technology, decentralization, justice, etc...',
    tags: ['meetup', 'propaganda', 'people', 'intelligence'],
    monthlyBudget: 60000,
    claimed: false,
    claimedBy:'',
  },{
    _id: '2123',
    name: 'Take out the garbage.',
    amount: 1000,
    description: 'Bundle all known bins both small and large, then take them out the dangerous back hallway and into the rubbish bin in the alley.',
    tags: ['strength', 'courage', 'intelligence'],
    monthlyBudget: 50000,
    claimed: false,
    claimedBy:'',
  },{
    _id: '222222',
    name: 'Mop the main room.',
    amount: 21001,
    description: 'Move all the furniture, sweep, vacuum, then mop. It needs to be done.',
    tags: ['strength', 'courage', 'intelligence'],
    monthlyBudget: 50000,
    claimed: false,
    claimedBy:'',
  },{
    _id: '212442223212',
    name: 'Clean the toilet.',
    amount: 7000,
    description: 'Hospital style bleach that thing and the sink too. It needs to be done.',
    tags: ['strength', 'courage', 'intelligence'],
    monthlyBudget: 50000,
    claimed: false,
    claimedBy:'',
  },{
    _id: '22314125',
    name: 'Upgrade vending code to work with the kegorator.',
    amount: 15000,
    description: 'For details refer to the github issues on btc-vending-machine. ',
    tags: ['strength', 'courage', 'intelligence'],
    claimed: false,
    claimedBy:'',
  },{
    _id: '7',
    name: 'Install the kegorator onto the kegs.',
    amount: 25000,
    description: 'Figure out what we need to do to mount the flowmeters and valves onto the keg. Probably need to drill a hole in the fridge. Figure a way to mount the electronics and power them.',
    tags: ['strength', 'courage', 'intelligence'],
    claimed: false,
    claimedBy:'',
  },{
    _id: '3',
    name: 'Get the 3D printer working.',
    amount: 30300,
    description: 'At the start of the print the plastic doesn\'t adhere.',
    tags: [ 'courage', 'intelligence'],
    claimed: false,
    claimedBy:'',
  },{
    _id: '226224234',
    name: 'Build something cool under the front stairs.',
    amount: 1000,
    description: 'Members must first agree what, but it has to be good.',
    tags: ['strength', 'courage', 'intelligence'],
    claimed: false,
    claimedBy:'',
  }],
}

const mutations = {
    setClaimId(bounties, _id){
      bounties.claimId = _id
    },
    setClaimAddress(bounties, address){
        bounties.claimAddress = address
    },
    setClaimNotes(bounties, notes){
        bounties.claimNotes = notes
    },
    addBounty(bounties, bounty){
        bounties.active.push(bounty)
    }
}

// Actions are for the async calls to the server

const actions = {
    ADD_BOUNTY(){
        // TODO post req then mutate
    },
    CLAIM_BOUNTY({commit, state}){
        let claimPost = {
            alias: state.claimAlias,
            address: state.claimAddress,
            bountyId: state.claimId
        }
        console.log('TODO POST TO SERVER', claimPost)
        // request
        //     .post('')
        //     .send(claimPost)
        // commit('claimBounty')
    }
}

export default {
  state,
  mutations,
  actions,
}
