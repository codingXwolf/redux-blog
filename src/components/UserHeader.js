import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find((user) => user.id === this.props.userId) //find can be called with a function. If it return true the entire find function returns the value that was true.
        //if user.id equals to userId then it will return true and its value.
        if (!user) {//so if we did not find a user it will return null.
            return (<div>...loading</div>);
        }

        return <div className="header" >{user.name}</div>
    }
};

const mapStateToProps = (state) => {
    return { users: state.users };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);