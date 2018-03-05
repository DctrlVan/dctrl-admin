import events from './events'

function reactions(ev){
    switch (ev.type) {
        case 'member-field-updated':
            if (ev.field === 'secret') {
                // TODO: check if already have it
                events.badgeAdded(ev.memberId, 'secure')
            }
            break
        case 'member-paid':
            events.memberActivated(ev.memberId)
            break
        case 'resource-stocked':
            events.badgeAdded(ev.memberId, 'bitpepsi')
            break
    }
}


module.exports = reactions
