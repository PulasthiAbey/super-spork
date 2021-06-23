import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class GooglePixel529 extends Component {

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
    <ScrollView data-layer="ddf8bc12-c1ab-404d-b32c-2ab096a1acec" style={styles.googlePixel529}>
        <Svg data-layer="002fa8d6-bafa-4bdc-9071-2628f2523c39" style={styles.googlePixel529_fiRrBell} preserveAspectRatio="none" viewBox="0.9858129620552063 0.0022306442260742188 21.75244140625 24.00244140625" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 22.55500030517578 13.66199970245361 L 20.65500068664551 6.825999736785889 C 19.50912475585938 2.705392360687256 15.70595932006836 -0.1066312789916992 11.43046379089355 0.005464553833007812 C 7.154967784881592 0.1175603866577148 3.504378318786621 3.125009536743164 2.57599925994873 7.300000190734863 L 1.105000019073486 13.91499996185303 C 0.7758784294128418 15.39554595947266 1.136574268341064 16.94545364379883 2.085581541061401 18.12855339050293 C 3.034588813781738 19.31165313720703 4.46931266784668 20.00004196166992 5.986000061035156 20 L 7.099999904632568 20 C 7.573192596435547 22.330322265625 9.62211799621582 24.0050106048584 11.99999904632568 24.0050106048584 C 14.37788009643555 24.0050106048584 16.42680549621582 22.330322265625 16.89999771118164 20 L 17.73799896240234 20 C 19.30085945129395 20 20.77353286743164 19.26955413818359 21.71903419494629 18.02558326721191 C 22.66440963745117 16.78195762634277 22.97412872314453 15.16752529144287 22.55599975585938 13.66200065612793 Z M 12 22 C 10.73321533203125 21.99474716186523 9.606256484985352 21.19435119628906 9.184001922607422 20.00000190734863 L 14.81599998474121 20 C 14.39374542236328 21.19435119628906 13.26678466796875 21.99474906921387 11.99999904632568 22 Z M 20.12599945068359 16.81500053405762 C 19.56100273132324 17.56452751159668 18.67561340332031 18.00370216369629 17.73699951171875 18 L 5.986000061035156 18 C 5.076607227325439 18 4.215872764587402 17.5870361328125 3.646482944488525 16.87729835510254 C 3.07689356803894 16.16706275939941 2.860550165176392 15.23722553253174 3.057999610900879 14.34899997711182 L 4.527999877929688 7.732999801635742 C 5.257105350494385 4.453667640686035 8.124523162841797 2.091390132904053 11.48277568817139 2.003414154052734 C 14.84102821350098 1.915438175201416 17.82819747924805 4.124344348907471 18.72800064086914 7.361001491546631 L 20.62800025939941 14.19699954986572 C 20.88254737854004 15.10001564025879 20.6965160369873 16.0701904296875 20.12599754333496 16.81499862670898 Z"  /></Svg>
        <View data-layer="98bbd0be-8ff6-4390-806d-43c8ca30d2d7" style={styles.googlePixel529_fiRrAlignLeft}>
            <Svg data-layer="4b4834cb-2a0b-41ad-bc9e-bc0952262e11" style={styles.googlePixel529_fiRrAlignLeft_path25} preserveAspectRatio="none" viewBox="0 4 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 6 L 23 6 C 23.55228424072266 6 24 5.552284717559814 24 5 C 24 4.447715282440186 23.55228424072266 4 23 4 L 1 4 C 0.4477152228355408 4 0 4.447715282440186 0 5 C 0 5.552284717559814 0.4477152824401855 6 1 6 Z"  /></Svg>
            <Svg data-layer="630ffbfb-a00f-4cfa-9360-e2498ccf5652" style={styles.googlePixel529_fiRrAlignLeft_path26} preserveAspectRatio="none" viewBox="0 9 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 11 L 15 11 C 15.55228519439697 11 16 10.55228424072266 16 10 C 16 9.447714805603027 15.55228424072266 9 15 9 L 1 9 C 0.4477152228355408 9 0 9.447715759277344 0 10 C 0 10.55228519439697 0.4477152824401855 11 1 11 Z"  /></Svg>
            <Svg data-layer="cfbefa0e-ebb9-47c0-95f3-28b0e0f7067c" style={styles.googlePixel529_fiRrAlignLeft_path27} preserveAspectRatio="none" viewBox="0 19 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 15 19 L 1 19 C 0.4477152228355408 19 0 19.44771575927734 0 20 C 0 20.55228424072266 0.4477152824401855 21 1 21 L 15 21 C 15.55228519439697 21 16 20.55228424072266 16 20 C 16 19.44771575927734 15.55228424072266 19 15 19 Z"  /></Svg>
            <Svg data-layer="a7c48135-4c73-4071-a2b9-3b2663649956" style={styles.googlePixel529_fiRrAlignLeft_path28} preserveAspectRatio="none" viewBox="0 14 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 23 14 L 1 14 C 0.4477152228355408 14 0 14.44771575927734 0 15 C 0 15.55228519439697 0.4477152824401855 16 1 16 L 23 16 C 23.55228424072266 16 24 15.55228424072266 24 15 C 24 14.44771480560303 23.55228424072266 14 23 14 Z"  /></Svg>
        </View>
        <Svg data-layer="a5541788-7abf-41d1-8df3-5e471d7235c4" style={styles.googlePixel529_path347} preserveAspectRatio="none" viewBox="0 0 12 12" fill="rgba(74, 77, 246, 1)"><SvgPath d="M 6 0 C 9.313708305358887 0 12 2.686291694641113 12 6 C 12 9.313708305358887 9.313708305358887 12 6 12 C 2.686291694641113 12 0 9.313708305358887 0 6 C 0 2.686291694641113 2.686291694641113 0 6 0 Z"  /></Svg>
        <View data-layer="95d802ee-0736-45e4-abcc-7592c26a8d83" style={styles.googlePixel529_rectangle1633}></View>
        <View data-layer="a47a46de-0227-4acd-9084-72874e03fae2" style={styles.googlePixel529_rectangle1717}></View>
        <View data-layer="c3935c86-8550-48bc-8256-20b55ed26a58" style={styles.googlePixel529_rectangle1718}></View>
        <View data-layer="341729fe-5bb3-44f9-ad7f-177828f74718" style={styles.googlePixel529_rectangle1719}></View>
        <View data-layer="e96496b4-51de-4fdf-941b-8081d13e6ad3" style={styles.googlePixel529_rectangle1720}></View>
        <Text data-layer="2ca20869-f6bd-48a6-8a59-07a13ed627a2" style={styles.googlePixel529_galleFortClockTower00a340a3}>Galle Fort Clock Tower</Text>
        <Text data-layer="f98c5b79-1dda-474b-b5e2-8d8da80cb8f4" style={styles.googlePixel529_galleFortClockTower2cd83a76}>Galle Fort Clock Tower</Text>
        <Text data-layer="982d02ea-d0bb-45b7-b9c7-8c858d480066" style={styles.googlePixel529_galleFortClockTower729d0ec9}>Galle Fort Clock Tower</Text>
        <Text data-layer="8df7e6f7-5f45-40e8-94e1-8d47a8f41a59" style={styles.googlePixel529_galleFortClockTowera748194a}>Galle Fort Clock Tower</Text>
        <Text data-layer="aba7cc1c-5990-4be1-b1c1-e9ea08023c27" style={styles.googlePixel529_galleFortClockTower}>Galle Fort Clock Tower</Text>
        <Text data-layer="78c7bf66-5c94-433f-b26a-65adee4d21fc" style={styles.googlePixel529_galle28f516dd}>Galle</Text>
        <Text data-layer="8cd524ac-5756-46fe-8047-479df7337fcc" style={styles.googlePixel529_gallee553f211}>Galle</Text>
        <Text data-layer="d7571303-a331-4403-a08c-9ef172d245e9" style={styles.googlePixel529_galled1fb3e18}>Galle</Text>
        <Text data-layer="eb709403-3fe2-402b-b133-09bdb3a9662d" style={styles.googlePixel529_galle414d7544}>Galle</Text>
        <Text data-layer="32326600-c6e5-4065-92d7-1807ace5c09c" style={styles.googlePixel529_galle}>Galle</Text>
        <View data-layer="037b73b4-fd77-4396-87a3-aa0a9fac0f5d" style={styles.googlePixel529_group183}>
            <Text data-layer="2ca1f89e-5b5f-4f82-adb5-af3a2abaefce" style={styles.googlePixel529_group183_accept801e0e5b}>ACCEPT</Text>
        </View>
        <View data-layer="efbc958c-0703-4d74-a97f-2a1824376282" style={styles.googlePixel529_group264}>
            <Text data-layer="4d502986-a871-43bb-b3e0-15a37182c27c" style={styles.googlePixel529_group264_accepta2844264}>ACCEPT</Text>
        </View>
        <View data-layer="bd5aa121-3403-4956-a531-4dfe8ffbc9e4" style={styles.googlePixel529_group266}>
            <Text data-layer="9528a6d6-061b-4386-a657-031ac0b77503" style={styles.googlePixel529_group266_accept4cde41fe}>ACCEPT</Text>
        </View>
        <View data-layer="9af6c99a-cc6f-436d-a1e3-cbaf0bd697cd" style={styles.googlePixel529_group268}>
            <Text data-layer="6fcc76cd-fb83-428a-a20a-72da81d472d1" style={styles.googlePixel529_group268_accept297bb062}>ACCEPT</Text>
        </View>
        <View data-layer="01eff6f3-d8b3-4457-b885-471fba88a780" style={styles.googlePixel529_group270}>
            <Text data-layer="102ccff1-748b-44f0-89b8-8b2f959482f5" style={styles.googlePixel529_group270_accept}>ACCEPT</Text>
        </View>
        <View data-layer="0f3a7863-543c-4dfe-a475-744913d7a67b" style={styles.googlePixel529_group231}>
            <Text data-layer="46450ae3-ae97-44f8-999c-fbd45a4d5bda" style={styles.googlePixel529_group231_rejectb5eb6e69}>REJECT</Text>
        </View>
        <View data-layer="418a823e-4355-4e80-8bab-5b96ea1d8688" style={styles.googlePixel529_group265}>
            <Text data-layer="4c11347e-c3af-4355-8847-d4247e5c82c8" style={styles.googlePixel529_group265_reject4af2eb61}>REJECT</Text>
        </View>
        <View data-layer="a620aaec-6756-4229-b7b4-e38abeab2131" style={styles.googlePixel529_group267}>
            <Text data-layer="0a775ca3-c2d3-44ee-8011-37599118160f" style={styles.googlePixel529_group267_rejecta185c334}>REJECT</Text>
        </View>
        <View data-layer="59611b3e-7596-4e31-9ab0-e3a5acdd414a" style={styles.googlePixel529_group269}>
            <Text data-layer="35cae7e9-84c9-43e3-a186-f1b5d45bd05b" style={styles.googlePixel529_group269_rejecte9b18ac9}>REJECT</Text>
        </View>
        <View data-layer="ac1bf37e-b82f-44a9-99a9-47a6cb64949e" style={styles.googlePixel529_group271}>
            <Text data-layer="2d40633b-6999-4c06-8c2b-dcd7167e720c" style={styles.googlePixel529_group271_reject}>REJECT</Text>
        </View>
        <ReactImage data-layer="1729b94d-d84d-401b-a7b5-f17664be08c2" source={require('./assets/download.png')} style={styles.googlePixel529_download} />
        <ReactImage data-layer="67e0aa6c-ea41-4ff2-b8b0-720a2668708c" source={require('./assets/download1.png')} style={styles.googlePixel529_download1} />
        <ReactImage data-layer="5f91c973-27d7-447f-acf8-ce0d4a6737a3" source={require('./assets/download2.png')} style={styles.googlePixel529_download2} />
        <ReactImage data-layer="54b1a8e7-ec6a-4277-a50e-f5aaf7b71860" source={require('./assets/download3.png')} style={styles.googlePixel529_download3} />
        <ReactImage data-layer="6d76c4aa-3422-421e-8e9a-385e21bc493e" source={require('./assets/images.png')} style={styles.googlePixel529_images} />
        <Text data-layer="b21a4d8c-1597-4a11-a385-610c8503ccc9" style={styles.googlePixel529_bodyMontserratRe}>Suggested Places based on User Location </Text>
    </ScrollView>
    );
  }
}

GooglePixel529.propTypes = {

}

GooglePixel529.defaultProps = {

}


const styles = StyleSheet.create({
  "googlePixel529": {
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
  "googlePixel529_fiRrBell": {
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
  "googlePixel529_fiRrAlignLeft": {
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
  "googlePixel529_fiRrAlignLeft_path25": {
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
  "googlePixel529_fiRrAlignLeft_path26": {
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
  "googlePixel529_fiRrAlignLeft_path27": {
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
  "googlePixel529_fiRrAlignLeft_path28": {
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
  "googlePixel529_path347": {
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
  "googlePixel529_rectangle1633": {
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
    "borderTopLeftRadius": 23,
    "borderTopRightRadius": 23,
    "borderBottomLeftRadius": 23,
    "borderBottomRightRadius": 23,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 345,
    "height": 122,
    "left": 24,
    "top": 141
  },
  "googlePixel529_rectangle1717": {
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
    "borderTopLeftRadius": 23,
    "borderTopRightRadius": 23,
    "borderBottomLeftRadius": 23,
    "borderBottomRightRadius": 23,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 345,
    "height": 122,
    "left": 24,
    "top": 278
  },
  "googlePixel529_rectangle1718": {
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
    "borderTopLeftRadius": 23,
    "borderTopRightRadius": 23,
    "borderBottomLeftRadius": 23,
    "borderBottomRightRadius": 23,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 345,
    "height": 122,
    "left": 24,
    "top": 415
  },
  "googlePixel529_rectangle1719": {
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
    "borderTopLeftRadius": 23,
    "borderTopRightRadius": 23,
    "borderBottomLeftRadius": 23,
    "borderBottomRightRadius": 23,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 345,
    "height": 122,
    "left": 24,
    "top": 552
  },
  "googlePixel529_rectangle1720": {
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
    "borderTopLeftRadius": 23,
    "borderTopRightRadius": 23,
    "borderBottomLeftRadius": 23,
    "borderBottomRightRadius": 23,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 345,
    "height": 122,
    "left": 24,
    "top": 689
  },
  "googlePixel529_galleFortClockTower00a340a3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 23,
    "left": 139,
    "top": 177.5
  },
  "googlePixel529_galleFortClockTower2cd83a76": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 23,
    "left": 139,
    "top": 314.5
  },
  "googlePixel529_galleFortClockTower729d0ec9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 23,
    "left": 139,
    "top": 451.5
  },
  "googlePixel529_galleFortClockTowera748194a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 23,
    "left": 139,
    "top": 588.5
  },
  "googlePixel529_galleFortClockTower": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 157,
    "height": 23,
    "left": 139,
    "top": 725.5
  },
  "googlePixel529_galle28f516dd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 7, 116, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22,
    "height": 34,
    "left": 139,
    "top": 191
  },
  "googlePixel529_gallee553f211": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 7, 116, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22,
    "height": 34,
    "left": 139,
    "top": 328
  },
  "googlePixel529_galled1fb3e18": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 7, 116, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22,
    "height": 34,
    "left": 139,
    "top": 465
  },
  "googlePixel529_galle414d7544": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 7, 116, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22,
    "height": 34,
    "left": 139,
    "top": 602
  },
  "googlePixel529_galle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 7, 116, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22,
    "height": 34,
    "left": 139,
    "top": 739
  },
  "googlePixel529_group183": {
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
    "width": 34,
    "height": 14,
    "left": 305,
    "top": 234
  },
  "googlePixel529_group183_accept801e0e5b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(65, 188, 161, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group264": {
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
    "width": 34,
    "height": 14,
    "left": 305,
    "top": 371
  },
  "googlePixel529_group264_accepta2844264": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(65, 188, 161, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group266": {
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
    "width": 34,
    "height": 14,
    "left": 305,
    "top": 508
  },
  "googlePixel529_group266_accept4cde41fe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(65, 188, 161, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group268": {
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
    "width": 34,
    "height": 14,
    "left": 305,
    "top": 645
  },
  "googlePixel529_group268_accept297bb062": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(65, 188, 161, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group270": {
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
    "width": 34,
    "height": 14,
    "left": 305,
    "top": 782
  },
  "googlePixel529_group270_accept": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(65, 188, 161, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group231": {
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
    "width": 32,
    "height": 14,
    "left": 249,
    "top": 234
  },
  "googlePixel529_group231_rejectb5eb6e69": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(232, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group265": {
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
    "width": 32,
    "height": 14,
    "left": 249,
    "top": 371
  },
  "googlePixel529_group265_reject4af2eb61": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(232, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group267": {
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
    "width": 32,
    "height": 14,
    "left": 249,
    "top": 508
  },
  "googlePixel529_group267_rejecta185c334": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(232, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group269": {
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
    "width": 32,
    "height": 14,
    "left": 249,
    "top": 645
  },
  "googlePixel529_group269_rejecte9b18ac9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(232, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_group271": {
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
    "width": 32,
    "height": 14,
    "left": 249,
    "top": 782
  },
  "googlePixel529_group271_reject": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(232, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 34,
    "left": 0,
    "top": -8
  },
  "googlePixel529_download": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "width": 77,
    "height": 77,
    "left": 46,
    "top": 158
  },
  "googlePixel529_download1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "width": 77,
    "height": 77,
    "left": 46,
    "top": 295
  },
  "googlePixel529_download2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "width": 77,
    "height": 77,
    "left": 46,
    "top": 432
  },
  "googlePixel529_download3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "width": 77,
    "height": 77,
    "left": 46,
    "top": 569
  },
  "googlePixel529_images": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "width": 77,
    "height": 77,
    "left": 46,
    "top": 706
  },
  "googlePixel529_bodyMontserratRe": {
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
    "width": 322,
    "height": 28,
    "left": 36,
    "top": 101.53
  }
});