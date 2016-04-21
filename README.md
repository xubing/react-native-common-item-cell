# react-native-common-item-cell
A React Native  item cell. The cell grows with the inner text.
This project is forked from [react-native-item-cell](https://github.com/APSL/react-native-item-cell), I add the left title in it .

<p align="center">
<img src="https://github.com/xubing/react-native-common-item-cell/blob/master/Example/items/screen1.png" alt="ItemCell component screenshot" width="400">
</p>


## Install

Install the package:

```bash
$ npm i react-native-common-item-cell --save
```

Install ``FontAwesome`` from the awesome Joel Oblador's ``react-native-vector-icons``: https://github.com/oblador/react-native-vector-icons#installation


## Usage

```javascript
import ItemCell from 'react-native-common-item-cell';
```

```javascript
<ItemCell>
  Item
</ItemCell>
```

```javascript
<ItemCell icon={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}>
  Item
</ItemCell>
```

```javascript
<ItemCell title = {"Gender:"} showDisclosureIndicator={true}
onPress ={()=>console.log("pressme")}
onPressOut ={()=>console.log("pressme out")}>
  Man
</ItemCell>
```

## Prop API

| Prop | Type | Description |
|------|------|-------------|
|``showDisclosureIndicator`` | ``bool`` | Shows a small arrow at the right side of the cell. |
|``icon`` | ``{uri: string}`` object or ``require()`` | URI to render left icon with an URL for the image source or ``require`` for a local image source. |
|``children`` | ``string`` | The inner text to render. |
|``title`` | ``string`` | The left title text to render. |

## License

MIT
