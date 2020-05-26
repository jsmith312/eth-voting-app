import { generateStore, EventActions } from '@drizzle/store'
import drizzleOptions from '../drizzleOptions'
import { toast } from 'react-toastify'

const contractEventNotifier = store => next => action => {
    if (action.type === EventActions.EVENT_FIRED) {
        const contractEvent = action.event.event
        if (contractEvent === 'VoteCast') {
            const display = `Vote Cast!`
            toast.success(display, { position: toast.POSITION.TOP_RIGHT });
        }
    }
    return next(action)
}

const appMiddlewares = [ contractEventNotifier ]

export default generateStore({
  drizzleOptions,
  appMiddlewares,
  disableReduxDevTools: false  // enable ReduxDevTools!
})