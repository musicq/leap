import {BehaviorSubject} from 'rxjs'
import {scan} from 'rxjs/operators'

export type reducer<S> = (s: S) => S

export function createStore() {
  const globalState = {}

  const actions$ = new BehaviorSubject(s => s)

  const state$ = actions$.pipe(
    scan((state, action) => action(state), globalState)
  )

  function createReducer<S>(fn: reducer<S>) {
    actions$.next(fn)
  }

  return {
    state$,
    createReducer
  }
}
