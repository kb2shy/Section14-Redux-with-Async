import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    console.log(this.props.userId)
    return <div>User Header</div>;
  }
}

export default connect(null, { fetchUser })(UserHeader);
