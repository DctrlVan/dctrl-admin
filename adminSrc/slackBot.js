const dctrlDb = require('./dctrlDb')

//

function slackReq(callback){
    request
        .post(config.bountiesSlack)
        .send({text: activeBounty.name + ' was claimed by ' + claimant.name+ ' for $'+ payoutRequest.action.amount})
        .end(callback)
}


// TODO: listen to changefeed and decide when slack messages should be sent
