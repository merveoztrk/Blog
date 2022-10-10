import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId); //var olan tek action'ımız kendi verilerini burada fetch ediyor
    // }
    render() {
        // const user = this.props.users.find((user) => user.id === this.props.userId);
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return <div className='header'>{user.name}</div>
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return { users: state.users.find(user => user.id === ownProps.userId) };
}; //bileşene çok veri iletmek yerine üzerinde çalışılacak kullanıcı için mapStateProps fonksiyonu yazıldı

export default connect(
    mapStateToProps,
    // { fetchUser }
)(UserHeader);