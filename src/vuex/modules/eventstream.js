let memes = [
    'very database',
    'such create',
    'wow',
    'much store',
]
function bestMeme(){
  return memes[Math.floor(Math.random()*memes.length)];
}

const state = {
    meme: bestMeme(),
    type: "",
    showEvent: false
}

const mutations = {
    show(state, ev){
        state.type = ev.type
        state.showEvent = true
    },
    hide(state){
        state.showEvent = false
    }
}

const actions = {
    displayEvent({commit}, ev){
        console.log("attempting to display event:", ev)
        commit('show', ev)
        setTimeout(()=>{
            commit('hide')
        }, 3456)
    }
}

module.exports = {
  state,
  mutations,
  actions
}
