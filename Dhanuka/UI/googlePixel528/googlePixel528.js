import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class GooglePixel528 extends Component {

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
    <ScrollView data-layer="24aa6235-2945-4a58-8b6b-a12443f970f6" style={styles.googlePixel528}>
        <Svg data-layer="ab7d4515-cff0-401a-8fe2-4a783aff8a8c" style={styles.googlePixel528_fiRrBell} preserveAspectRatio="none" viewBox="0.9858129620552063 0.0022306442260742188 21.75244140625 24.00244140625" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 22.55500030517578 13.66199970245361 L 20.65500068664551 6.825999736785889 C 19.50912475585938 2.705392360687256 15.70595932006836 -0.1066312789916992 11.43046379089355 0.005464553833007812 C 7.154967784881592 0.1175603866577148 3.504378318786621 3.125009536743164 2.57599925994873 7.300000190734863 L 1.105000019073486 13.91499996185303 C 0.7758784294128418 15.39554595947266 1.136574268341064 16.94545364379883 2.085581541061401 18.12855339050293 C 3.034588813781738 19.31165313720703 4.46931266784668 20.00004196166992 5.986000061035156 20 L 7.099999904632568 20 C 7.573192596435547 22.330322265625 9.62211799621582 24.0050106048584 11.99999904632568 24.0050106048584 C 14.37788009643555 24.0050106048584 16.42680549621582 22.330322265625 16.89999771118164 20 L 17.73799896240234 20 C 19.30085945129395 20 20.77353286743164 19.26955413818359 21.71903419494629 18.02558326721191 C 22.66440963745117 16.78195762634277 22.97412872314453 15.16752529144287 22.55599975585938 13.66200065612793 Z M 12 22 C 10.73321533203125 21.99474716186523 9.606256484985352 21.19435119628906 9.184001922607422 20.00000190734863 L 14.81599998474121 20 C 14.39374542236328 21.19435119628906 13.26678466796875 21.99474906921387 11.99999904632568 22 Z M 20.12599945068359 16.81500053405762 C 19.56100273132324 17.56452751159668 18.67561340332031 18.00370216369629 17.73699951171875 18 L 5.986000061035156 18 C 5.076607227325439 18 4.215872764587402 17.5870361328125 3.646482944488525 16.87729835510254 C 3.07689356803894 16.16706275939941 2.860550165176392 15.23722553253174 3.057999610900879 14.34899997711182 L 4.527999877929688 7.732999801635742 C 5.257105350494385 4.453667640686035 8.124523162841797 2.091390132904053 11.48277568817139 2.003414154052734 C 14.84102821350098 1.915438175201416 17.82819747924805 4.124344348907471 18.72800064086914 7.361001491546631 L 20.62800025939941 14.19699954986572 C 20.88254737854004 15.10001564025879 20.6965160369873 16.0701904296875 20.12599754333496 16.81499862670898 Z"  /></Svg>
        <View data-layer="6758c267-4f1c-4556-87cf-a53d13876f94" style={styles.googlePixel528_fiRrAlignLeft}>
            <Svg data-layer="dbf389ca-c879-41d2-bba9-772747b66280" style={styles.googlePixel528_fiRrAlignLeft_path25} preserveAspectRatio="none" viewBox="0 4 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 6 L 23 6 C 23.55228424072266 6 24 5.552284717559814 24 5 C 24 4.447715282440186 23.55228424072266 4 23 4 L 1 4 C 0.4477152228355408 4 0 4.447715282440186 0 5 C 0 5.552284717559814 0.4477152824401855 6 1 6 Z"  /></Svg>
            <Svg data-layer="d9d76a36-7664-4903-bccc-93cf0bd5dfea" style={styles.googlePixel528_fiRrAlignLeft_path26} preserveAspectRatio="none" viewBox="0 9 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 11 L 15 11 C 15.55228519439697 11 16 10.55228424072266 16 10 C 16 9.447714805603027 15.55228424072266 9 15 9 L 1 9 C 0.4477152228355408 9 0 9.447715759277344 0 10 C 0 10.55228519439697 0.4477152824401855 11 1 11 Z"  /></Svg>
            <Svg data-layer="1e76e9b2-0347-4c98-8241-c739ca25ea00" style={styles.googlePixel528_fiRrAlignLeft_path27} preserveAspectRatio="none" viewBox="0 19 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 15 19 L 1 19 C 0.4477152228355408 19 0 19.44771575927734 0 20 C 0 20.55228424072266 0.4477152824401855 21 1 21 L 15 21 C 15.55228519439697 21 16 20.55228424072266 16 20 C 16 19.44771575927734 15.55228424072266 19 15 19 Z"  /></Svg>
            <Svg data-layer="c2f7640b-3a0d-4267-a391-4fc2c898d06c" style={styles.googlePixel528_fiRrAlignLeft_path28} preserveAspectRatio="none" viewBox="0 14 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 23 14 L 1 14 C 0.4477152228355408 14 0 14.44771575927734 0 15 C 0 15.55228519439697 0.4477152824401855 16 1 16 L 23 16 C 23.55228424072266 16 24 15.55228424072266 24 15 C 24 14.44771480560303 23.55228424072266 14 23 14 Z"  /></Svg>
        </View>
        <Svg data-layer="2a0e70e6-9c23-41dd-973f-2a426aea954d" style={styles.googlePixel528_path347} preserveAspectRatio="none" viewBox="0 0 12 12" fill="rgba(74, 77, 246, 1)"><SvgPath d="M 6 0 C 9.313708305358887 0 12 2.686291694641113 12 6 C 12 9.313708305358887 9.313708305358887 12 6 12 C 2.686291694641113 12 0 9.313708305358887 0 6 C 0 2.686291694641113 2.686291694641113 0 6 0 Z"  /></Svg>
        <View data-layer="8a2666c5-be11-4cde-8a89-791a9fdad389" style={styles.googlePixel528_rectangle1704}></View>
        <Text data-layer="e69948ba-44a6-4b6e-b1d8-d76bdc4aed76" style={styles.googlePixel528_bodyMontserratRe276f5921}>Remember me</Text>
        <Text data-layer="2c08a25e-a52b-42b5-a9b4-017c1f0ee95b" style={styles.googlePixel528_bodyMontserratRefd8375b6}>Forgot Password?</Text>
        <Text data-layer="7d6b8a23-ab42-49bf-9dfe-bab52e0ff358" style={styles.googlePixel528_bodyMontserratRe80285ba6}>Enter Your Location</Text>
        <Text data-layer="147172f8-5443-4cf4-99e7-44b9efcb4b07" style={styles.googlePixel528_bodyMontserratReff605f9b}>Your Free time Slot</Text>
        <Text data-layer="fd196a79-5da6-41c8-9ee1-730181b2423f" style={styles.googlePixel528_bodyMontserratRef99d4618}>Select Your Preferences</Text>
        <View data-layer="1ee68969-045c-4966-b228-d5db8ab89a61" style={styles.googlePixel528_rectangle1657}></View>
        <View data-layer="b7ddc300-3df8-4e1f-bee6-88dd28a33e82" style={styles.googlePixel528_rectangle1659}></View>
        <Text data-layer="87797fdc-efa2-4245-9b06-0a27580333aa" style={styles.googlePixel528_bodyMontserratRe9e24d01f}>From</Text>
        <Text data-layer="0c7d2a67-220d-4df2-8b50-5a05646274c5" style={styles.googlePixel528_bodyMontserratRe}>TO</Text>
        <View data-layer="a23caf50-8af8-4a42-b2f3-dc4b897f6e55" style={styles.googlePixel528_rectangle1706}></View>
        <View data-layer="ef4796f1-d569-4997-b1d8-460fe6e260b2" style={styles.googlePixel528_rectangle1710}></View>
        <View data-layer="b0529c01-5f5c-41e4-bbf6-eb8e2d62b0cc" style={styles.googlePixel528_rectangle1713}></View>
        <View data-layer="1434707c-8894-4579-a9f5-85ecd8a54e11" style={styles.googlePixel528_rectangle1716}></View>
        <View data-layer="4b054e0c-fa78-4ca2-8d0f-96b811aaca87" style={styles.googlePixel528_rectangle1705}></View>
        <View data-layer="77bcd5a0-3073-4f0c-96a0-8984d73ba4c6" style={styles.googlePixel528_rectangle1708}></View>
        <View data-layer="8aadd943-6076-4924-abb1-e4084c99cef2" style={styles.googlePixel528_rectangle1711}></View>
        <View data-layer="c9785882-8fa5-4a5a-9769-04b5433c66ee" style={styles.googlePixel528_rectangle1714}></View>
        <View data-layer="2e8b531d-bec6-4ef0-aeaa-48f2c469faa3" style={styles.googlePixel528_rectangle1707}></View>
        <View data-layer="d132dd02-b473-423a-b884-99645ed4539e" style={styles.googlePixel528_rectangle1709}></View>
        <View data-layer="452dc370-6eb3-49ea-a5ee-a48c812a8c43" style={styles.googlePixel528_rectangle1712}></View>
        <View data-layer="de980b64-2172-413f-ae98-42fe6362b3b2" style={styles.googlePixel528_rectangle1715}></View>
    </ScrollView>
    );
  }
}

GooglePixel528.propTypes = {

}

GooglePixel528.defaultProps = {

}


const styles = StyleSheet.create({
  "googlePixel528": {
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
  "googlePixel528_fiRrBell": {
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
  "googlePixel528_fiRrAlignLeft": {
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
  "googlePixel528_fiRrAlignLeft_path25": {
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
  "googlePixel528_fiRrAlignLeft_path26": {
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
  "googlePixel528_fiRrAlignLeft_path27": {
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
  "googlePixel528_fiRrAlignLeft_path28": {
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
  "googlePixel528_path347": {
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
  "googlePixel528_rectangle1704": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(220, 220, 220, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(220, 220, 220, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(220, 220, 220, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(220, 220, 220, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 309,
    "height": 44,
    "left": 42,
    "top": 104.63
  },
  "googlePixel528_bodyMontserratRe276f5921": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 13,
    "fontWeight": "300",
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
    "width": 82,
    "height": 27,
    "left": 63,
    "top": 106.63
  },
  "googlePixel528_bodyMontserratRefd8375b6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 13,
    "fontWeight": "300",
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
    "width": 98,
    "height": 27,
    "left": 249,
    "top": 106.63
  },
  "googlePixel528_bodyMontserratRe80285ba6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 13,
    "fontWeight": "300",
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
    "width": 110,
    "height": 27,
    "left": 69,
    "top": 114.63
  },
  "googlePixel528_bodyMontserratReff605f9b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 13,
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
    "width": 120,
    "height": 27,
    "left": 41,
    "top": 173.84
  },
  "googlePixel528_bodyMontserratRef99d4618": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 13,
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
    "width": 146,
    "height": 27,
    "left": 43,
    "top": 282.53
  },
  "googlePixel528_rectangle1657": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(220, 220, 220, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(220, 220, 220, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(220, 220, 220, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(220, 220, 220, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 149,
    "height": 44,
    "left": 42,
    "top": 214.82
  },
  "googlePixel528_rectangle1659": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(220, 220, 220, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(220, 220, 220, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(220, 220, 220, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(220, 220, 220, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 149,
    "height": 44,
    "left": 202,
    "top": 214.82
  },
  "googlePixel528_bodyMontserratRe9e24d01f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(1, 1, 1, 1)",
    "fontSize": 13,
    "fontWeight": "300",
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
    "width": 28,
    "height": 27,
    "left": 62,
    "top": 223.32
  },
  "googlePixel528_bodyMontserratRe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(1, 1, 1, 1)",
    "fontSize": 13,
    "fontWeight": "300",
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
    "width": 16,
    "height": 27,
    "left": 219,
    "top": 223.32
  },
  "googlePixel528_rectangle1706": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 44,
    "top": 334
  },
  "googlePixel528_rectangle1710": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 44,
    "top": 458
  },
  "googlePixel528_rectangle1713": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 44,
    "top": 582
  },
  "googlePixel528_rectangle1716": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 44,
    "top": 706
  },
  "googlePixel528_rectangle1705": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 152,
    "top": 334
  },
  "googlePixel528_rectangle1708": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 152,
    "top": 458
  },
  "googlePixel528_rectangle1711": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 152,
    "top": 582
  },
  "googlePixel528_rectangle1714": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 152,
    "top": 706
  },
  "googlePixel528_rectangle1707": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 260,
    "top": 334
  },
  "googlePixel528_rectangle1709": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 260,
    "top": 458
  },
  "googlePixel528_rectangle1712": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 260,
    "top": 582
  },
  "googlePixel528_rectangle1715": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 246, 246, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 90,
    "height": 103,
    "left": 260,
    "top": 706
  }
});