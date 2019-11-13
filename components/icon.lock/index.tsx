import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from "../../utilities/branding/colors";

class LockIcon extends React.Component {
    render() {
        return <Icon name={"lock"} size={24} color={colors.gray} />
    }
}

export default LockIcon
