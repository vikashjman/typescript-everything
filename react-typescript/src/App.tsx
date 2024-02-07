import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from './actions'
import { StoreState } from './reducers'

interface AppProps {
  todo?: Todo[]
  fetchTodos(): any
}

export class _App extends React.Component<AppProps> {

  componentDidMount(): void {
      this.props.fetchTodos();
  }

  render () {
    console.log(this.props.todo)
    return <div>Hii Threre</div>
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos }
}

export const App = connect(mapStateToProps, { fetchTodos })(_App)
