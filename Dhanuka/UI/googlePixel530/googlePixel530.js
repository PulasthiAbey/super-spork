import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class GooglePixel530 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="7de94e98-a95f-46f5-9a07-091b13a0f2a6" style={styles.googlePixel530}>
        <View data-layer="63adc300-0518-4db1-98af-8999c6c22b47" style={styles.googlePixel530_rectangle1722}></View>
        <View data-layer="097ad124-feed-418b-8479-ee860cf3b1e1" style={styles.googlePixel530_rectangle1724}></View>
        <View data-layer="99d5c803-17fe-46bf-acaa-35e9de3af544" style={styles.googlePixel530_rectangle1723}></View>
        <Svg data-layer="5b809e74-8b67-486b-b880-7e5d836cc69f" style={styles.googlePixel530_fiRrBell} preserveAspectRatio="none" viewBox="0.9858129620552063 0.0022306442260742188 21.7525634765625 24.00244140625" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 22.55500030517578 13.66199970245361 L 20.65500068664551 6.825999736785889 C 19.50912475585938 2.705392360687256 15.70595932006836 -0.1066312789916992 11.43046379089355 0.005464553833007812 C 7.154967784881592 0.1175603866577148 3.504378318786621 3.125009536743164 2.57599925994873 7.300000190734863 L 1.105000019073486 13.91499996185303 C 0.7758784294128418 15.39554595947266 1.136574268341064 16.94545364379883 2.085581541061401 18.12855339050293 C 3.034588813781738 19.31165313720703 4.46931266784668 20.00004196166992 5.986000061035156 20 L 7.099999904632568 20 C 7.573192596435547 22.330322265625 9.62211799621582 24.0050106048584 11.99999904632568 24.0050106048584 C 14.37788009643555 24.0050106048584 16.42680549621582 22.330322265625 16.89999771118164 20 L 17.73799896240234 20 C 19.30085945129395 20 20.77353286743164 19.26955413818359 21.71903419494629 18.02558326721191 C 22.66440963745117 16.78195762634277 22.97412872314453 15.16752529144287 22.55599975585938 13.66200065612793 Z M 12 22 C 10.73321533203125 21.99474716186523 9.606256484985352 21.19435119628906 9.184001922607422 20.00000190734863 L 14.81599998474121 20 C 14.39374542236328 21.19435119628906 13.26678466796875 21.99474906921387 11.99999904632568 22 Z M 20.12599945068359 16.81500053405762 C 19.56100273132324 17.56452751159668 18.67561340332031 18.00370216369629 17.73699951171875 18 L 5.986000061035156 18 C 5.076607227325439 18 4.215872764587402 17.5870361328125 3.646482944488525 16.87729835510254 C 3.07689356803894 16.16706275939941 2.860550165176392 15.23722553253174 3.057999610900879 14.34899997711182 L 4.527999877929688 7.732999801635742 C 5.257105350494385 4.453667640686035 8.124523162841797 2.091390132904053 11.48277568817139 2.003414154052734 C 14.84102821350098 1.915438175201416 17.82819747924805 4.124344348907471 18.72800064086914 7.361001491546631 L 20.62800025939941 14.19699954986572 C 20.88254737854004 15.10001564025879 20.6965160369873 16.0701904296875 20.12599754333496 16.81499862670898 Z"  /></Svg>
        <View data-layer="05435e09-1e0c-4a8e-bfe9-a58bb1cb51b5" style={styles.googlePixel530_fiRrAlignLeft}>
            <Svg data-layer="dd5dbdbc-abde-4498-8a2f-4b01d14520d9" style={styles.googlePixel530_fiRrAlignLeft_path25} preserveAspectRatio="none" viewBox="0 4 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 6 L 23 6 C 23.55228424072266 6 24 5.552284717559814 24 5 C 24 4.447715282440186 23.55228424072266 4 23 4 L 1 4 C 0.4477152228355408 4 0 4.447715282440186 0 5 C 0 5.552284717559814 0.4477152824401855 6 1 6 Z"  /></Svg>
            <Svg data-layer="1032ffbb-1b94-4b72-a260-8c36670e5804" style={styles.googlePixel530_fiRrAlignLeft_path26} preserveAspectRatio="none" viewBox="0 9 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 11 L 15 11 C 15.55228519439697 11 16 10.55228424072266 16 10 C 16 9.447714805603027 15.55228424072266 9 15 9 L 1 9 C 0.4477152228355408 9 0 9.447715759277344 0 10 C 0 10.55228519439697 0.4477152824401855 11 1 11 Z"  /></Svg>
            <Svg data-layer="aacd990a-e82d-4e71-b344-d014b2df385d" style={styles.googlePixel530_fiRrAlignLeft_path27} preserveAspectRatio="none" viewBox="0 19 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 15 19 L 1 19 C 0.4477152228355408 19 0 19.44771575927734 0 20 C 0 20.55228424072266 0.4477152824401855 21 1 21 L 15 21 C 15.55228519439697 21 16 20.55228424072266 16 20 C 16 19.44771575927734 15.55228424072266 19 15 19 Z"  /></Svg>
            <Svg data-layer="0cdb135d-1880-43fb-bbed-a52beb0d279d" style={styles.googlePixel530_fiRrAlignLeft_path28} preserveAspectRatio="none" viewBox="0 14 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 23 14 L 1 14 C 0.4477152228355408 14 0 14.44771575927734 0 15 C 0 15.55228519439697 0.4477152824401855 16 1 16 L 23 16 C 23.55228424072266 16 24 15.55228424072266 24 15 C 24 14.44771480560303 23.55228424072266 14 23 14 Z"  /></Svg>
        </View>
        <Svg data-layer="5998524f-2e74-41f4-971a-c7fba189aa38" style={styles.googlePixel530_path347} preserveAspectRatio="none" viewBox="0 0 12 12" fill="rgba(74, 77, 246, 1)"><SvgPath d="M 6 0 C 9.313708305358887 0 12 2.686291694641113 12 6 C 12 9.313708305358887 9.313708305358887 12 6 12 C 2.686291694641113 12 0 9.313708305358887 0 6 C 0 2.686291694641113 2.686291694641113 0 6 0 Z"  /></Svg>
        <Text data-layer="59cc4a7c-a5a0-44b8-80b7-16338b0b89be" style={styles.googlePixel530_bodyMontserratReeeabed04}>Suggested Tour Map </Text>
        <Svg data-layer="42a00e36-cc44-49e6-8fcc-299d7cae850f" style={styles.googlePixel530_b70e4cbcfd0bae1cb1e5d38b4f24ada0} preserveAspectRatio="none" viewBox="0 0 393 500" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-b70e4cbcfd0bae1cb1e5d38b4f24ada0" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/b70e4cbcfd0bae1cb1e5d38b4f24ada0.png')} x="0" y="0" width="393.00px" height="500.00px" /></Pattern></Defs><SvgPath d="M 0 0 L 393 0 L 393 500 L 0 500 L 0 0 Z" fill="url(#img-b70e4cbcfd0bae1cb1e5d38b4f24ada0)" /></Svg>
        <Text data-layer="774a8913-48ad-43a8-b7b1-37b2eb071ade" style={styles.googlePixel530_bodyMontserratRe4a6c3e5a}>Total Tour Distance</Text>
        <Text data-layer="f778c1e1-aac7-4168-bf57-767b13e96ab1" style={styles.googlePixel530_bodyMontserratRedb7ab0f7}>206 KM</Text>
        <Text data-layer="37794233-e248-462d-b217-0db5e5fd7085" style={styles.googlePixel530_bodyMontserratRe4848f071}>12</Text>
        <Text data-layer="5058d9f5-8f91-48a9-b586-58cfb844c3b8" style={styles.googlePixel530_bodyMontserratRe723eec5b}>2 DAYS</Text>
        <Text data-layer="53d3f362-57c9-4bf1-af49-785a07c5b7fb" style={styles.googlePixel530_bodyMontserratRe949f5a38}>Total Tour Places Covered</Text>
        <Text data-layer="2ad3ea9e-cab1-4f7a-a66b-e10a737fec50" style={styles.googlePixel530_bodyMontserratRe}>Tour Duration</Text>
    </ScrollView>
    );
  }
}

GooglePixel530.propTypes = {

}

GooglePixel530.defaultProps = {

}


const styles = StyleSheet.create({
  "googlePixel530": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "googlePixel530_rectangle1722": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(17, 7, 116, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "width": 74,
    "height": 25,
    "left": 309,
    "top": 649
  },
  "googlePixel530_rectangle1724": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(17, 7, 116, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "width": 74,
    "height": 25,
    "left": 308,
    "top": 729
  },
  "googlePixel530_rectangle1723": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(17, 7, 116, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "width": 40,
    "height": 25,
    "left": 342,
    "top": 689
  },
  "googlePixel530_fiRrBell": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.75,
    "height": 24,
    "left": 347.12,
    "top": 29
  },
  "googlePixel530_fiRrAlignLeft": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 17,
    "left": 21.53,
    "top": 33
  },
  "googlePixel530_fiRrAlignLeft_path25": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 2,
    "left": 0,
    "top": 0
  },
  "googlePixel530_fiRrAlignLeft_path26": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16,
    "height": 2,
    "left": 0,
    "top": 5
  },
  "googlePixel530_fiRrAlignLeft_path27": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16,
    "height": 2,
    "left": 0,
    "top": 15
  },
  "googlePixel530_fiRrAlignLeft_path28": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 2,
    "left": 0,
    "top": 10
  },
  "googlePixel530_path347": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 12,
    "height": 12,
    "left": 359,
    "top": 27
  },
  "googlePixel530_bodyMontserratReeeabed04": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 164,
    "height": 28,
    "left": 115,
    "top": 77.53
  },
  "googlePixel530_b70e4cbcfd0bae1cb1e5d38b4f24ada0": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 500,
    "left": 0,
    "top": 125
  },
  "googlePixel530_bodyMontserratRe4a6c3e5a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 15,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.5,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 129,
    "height": 20,
    "left": 23,
    "top": 655.5
  },
  "googlePixel530_bodyMontserratRedb7ab0f7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 15,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.5,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52,
    "height": 20,
    "left": 319,
    "top": 653.5
  },
  "googlePixel530_bodyMontserratRe4848f071": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 15,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.5,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16,
    "height": 20,
    "left": 353,
    "top": 693.5
  },
  "googlePixel530_bodyMontserratRe723eec5b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 15,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.5,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 20,
    "left": 321,
    "top": 733.5
  },
  "googlePixel530_bodyMontserratRe949f5a38": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 15,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.5,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 173,
    "height": 20,
    "left": 23,
    "top": 693.5
  },
  "googlePixel530_bodyMontserratRe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 15,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.5,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 93,
    "height": 20,
    "left": 23,
    "top": 731.5
  }
});