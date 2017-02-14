import _ from 'lodash'
import request from 'superagent'

const state = {
  claimId: false,
  claimaddress: false,
  claimNotes: false,
  active: [],
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
const location = 'http://localhost:3000/'

const actions = {
    GET_ACTIVE_BOUNTIES({commit, state}){
        request
            .get(location + 'activebounties')
            .then(res => {
                res.body.forEach(bounty => {
                    commit('addBounty', bounty)
                })
            })
    },
    CLAIM_BOUNTY({commit, state}){
        let claimPost = {
            notes: state.claimNotes,
            address: state.claimAddress,
            bountyId: state.claimId
        }
        request
            .post(location + 'claimbounty')
            .send(claimPost)
            .then(res => {
                console.log(res.body)
            })
    }
}

export default {
  state,
  mutations,
  actions,
}
