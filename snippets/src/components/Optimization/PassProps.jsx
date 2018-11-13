import React, { Component, Fragment } from 'react'

/**
 * Pass props
 */
// class Properties extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isShow: true
//         }
//     }
//     toggleShow = () => {
//         this.setState(prevState => ({
//             isShow: !prevState.isShow
//         }))
//     }
//     render() {
//         return (
//             <Fragment>
//                 <button type="button" onClick={this.toggleShow}>Toggle Show</button>
//                 <Greeting greeting={{ text: "Thank you!" }} isShow={this.state.isShow} />
//             </Fragment>
//         )
//     }
// }

// export default Properties;

// class Greeting extends Component {
//     render() {
//         const greeting = 'Thank you!'
//         return (
//             <h1>{greeting}</h1>
//         )
//     }
// }

// const Greeting = ({ greeting, isShow }) =>
//     isShow ? <h1>{greeting.text}</h1> : null

/**
 * Pass components as props
 */
export default class UserProfile extends Component {
    render() {
        const user = {
            name: 'Tudor',
            biography: 'Frontend Developer...',
            avatarUrl: 'https://miro.medium.com/fit/c/240/240/1*-nDLzQOAgivg82Sza_8Nqg.jpeg'
        }
        return <User user={user} />
    }
}

const User = ({ user }) => (
    <Profile
        user={user}
        avatar={<AvatarRound user={user} />}
        biography={<BiographyFat user={user} />}
    />
)

const Profile = ({ user, avatar, biography }) => (
    <div className="profile">
        <div>{avatar}</div>
        <div>
            <p>{user.name}</p>
            {biography}
        </div>
    </div>
)

const AvatarRound = ({ user }) => (
    <img className="round" src={user.avatarUrl} alt="avatar" />
)

const BiographyFat = ({ user }) => (
    <p className="fat">{user.biography}</p>
)