import React from 'react'
import colors from "../../utilities/branding/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

class UserIcon extends React.Component {
    render() {
        return <Icon name={"user-alt"} size={24} color={colors.gray} />
    }
}

export default UserIcon
