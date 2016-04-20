import React, { View, Text, Image, TouchableHighlight, PropTypes, StyleSheet, PixelRatio } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class CommonItemCell extends React.Component {
  _renderDisclosureIndicator () {
    if (this.props.showDisclosureIndicator) {
      return <Icon style={styles.chevron} name='angle-right' size={22} />
    }
  }

  _renderLeft () {
    if (this.props.icon) {
      return (
        <View style={styles.iconContainer}>
          <View style={styles.paddingView} />
          <Image style={styles.icon}
            source={this.props.icon}
            resizeMode='cover'
          />
          <View style={styles.paddingView} />
        </View>
      )
    }
    else if (this.props.title)
    {
      return (
        <View style={styles.titleContainer}>
          <View style={styles.paddingView} />
          <Text style={styles.text}>
            {this.props.title}
          </Text>
          <View style={styles.paddingView} />
        </View>
      )
    }
    return <View style={styles.paddingView} />
  }

  render () {
    let touchableProps = {
      accessible: this.props.accessible,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut,
      onLongPress: this.props.onLongPress,
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
    }
    return (
      <TouchableHighlight {...touchableProps}
        underlayColor='#D9D9D9'
        style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.leftContainer}>
            {this._renderLeft()}
          </View>
          <View style={styles.bottomBorder}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {this.props.children}
              </Text>
              {this._renderDisclosureIndicator()}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

CommonItemCell.propTypes = {
  ...TouchableHighlight.propTypes,
  children: PropTypes.string.isRequired,
  showDisclosureIndicator: PropTypes.bool,
  title:PropTypes.string, //title or icon
  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string,
    }),
  ]),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  leftContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  bottomBorder: {
    flex: 1,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#C8C7CC',
    borderStyle: 'solid',
  },
  paddingView: {
    width: 15,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
  },
  chevron: {
    width: 25,
    paddingRight: 15,
    color: '#C8C7CC',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    width: 59,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  icon: {
    width: 29,
    height: 29,
    borderRadius: 8,
  },
})

export default CommonItemCell
