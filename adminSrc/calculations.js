
function calculateMsThisMonth(){
    let today = new Date()
    let daysThisMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()
    return daysThisMonth * 24 * 60 * 60 * 1000
}

function calculateBountyPayout(bounty){
    let msThisMonth = calculateMsThisMonth()
    let msSince = Date.now() - parseFloat(bounty.lastClaimed)
    let payout = (msSince / msThisMonth) * parseFloat(bounty.monthlyValue)
    let cap = parseFloat(bounty.cap)
    let boost = parseFloat(bounty.boost) || 0
    if (cap > 0){
        return Math.min(payout, cap) + boost
    }
    else {
        return payout + boost
    }
}

module.exports = {
  calculateBountyPayout
}
