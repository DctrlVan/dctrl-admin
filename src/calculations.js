
function calculateMsThisMonth(){
    let today = new Date()
    let daysThisMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()
    return daysThisMonth * 24 * 60 * 60 * 1000
}

function calculateTaskPayout(task){
    let msThisMonth = calculateMsThisMonth()
    let msSince = Date.now() - parseFloat(task.lastClaimed)
    let payout = (msSince / msThisMonth) * parseFloat(task.monthlyValue)
    let cap = parseFloat(task.cap)
    let boost = parseFloat(task.boost) || 0
    if (cap > 0){
        return Math.min(payout, cap) + boost
    }
    else {
        return payout + boost
    }
}

module.exports = {
  calculateTaskPayout
}
