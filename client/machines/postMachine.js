import { createMachine, interpret } from 'xstate';

export default postMachine = createMachine({
    id: 'fetch',
    initial: 'idle',
    context: {
        retries: 0
    },
    states: {
        start: {
        on: {
            POST: 'loading'
        }
        },
        loading: {
            on: {
                RESOLVE: 'success',
                REJECT: 'failure'
            }
            },
            success: {
            on: {
                END_ANIM: 'ready'
            }
            },
            failure: {
            on: {
                END_ANIM: 'ready'
            }
        },
        ready: {
            on: {
                POST: 'loading'
            }
        }
    }
});