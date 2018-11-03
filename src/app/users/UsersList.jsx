import React, {Component} from 'react'
import './UsersList.scss'

class UsersList extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.props.$http.get('/users')
      .then(users => {
        this.setState({users})
      })
      .catch(err => {
        this.setState({users: []})
        console.error(err)
      })
  }

  renderUsers = () => {
    const {users} = this.state
    return users.map(u => <div className="user-info">{u.name}</div>)
  }

  render() {
    return (
      <div className="users-list">
        {this.renderUsers()}
      </div>
    )
  }
}

export default UsersList
