import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import colors from "../../utilities/branding/colors";

class PhoneIcon extends React.Component {
    render() {
        return <Icon name={"phone"} size={24} color={colors.gray} />
    }
}

export default PhoneIcon
