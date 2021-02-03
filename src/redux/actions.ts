const actionTypes = {
    updateTick: "UPDATE_TICK"
}

const actions = {
    updateTick(tick:string):object{
        return {
            type: actionTypes.updateTick,
            payload: tick
        }
    }
}

export {actionTypes, actions}