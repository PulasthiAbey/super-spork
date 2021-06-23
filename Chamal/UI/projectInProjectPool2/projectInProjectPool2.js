import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ProjectInProjectPool2 extends Component {

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
    <ScrollView data-layer="3ffbe4c1-8a52-450b-ba28-39f9325bd508" style={styles.projectInProjectPool2}>
        <View data-layer="fb4e47e7-3a0a-4b15-bbb5-0a5e660886a4" style={styles.projectInProjectPool2_rectangle1625}></View>
        <View data-layer="479079db-d893-41bb-a1a7-63744e15a223" style={styles.projectInProjectPool2_rectangle1696}></View>
        <Text data-layer="105eb7cc-6eed-494b-beeb-49f75c97f9e5" style={styles.projectInProjectPool2_ongoingProjects}>Ongoing Projects</Text>
        <Text data-layer="063b37f9-fa52-4079-9031-18287799ab19" style={styles.projectInProjectPool2_tourGuide}>Tour Guide</Text>
        <Svg data-layer="8fa9cfa3-24d9-426a-b65a-f9d204b8ca45" style={styles.projectInProjectPool2_fiRrBell} preserveAspectRatio="none" viewBox="0.9858129620552063 0.0022306442260742188 21.7525634765625 24.0029296875" fill="rgba(16, 15, 13, 1)"><SvgPath d="M 22.55500030517578 13.66199970245361 L 20.65500068664551 6.825999736785889 C 19.50912475585938 2.705392360687256 15.70595932006836 -0.1066312789916992 11.43046379089355 0.005464553833007812 C 7.154967784881592 0.1175603866577148 3.504378318786621 3.125009536743164 2.57599925994873 7.300000190734863 L 1.105000019073486 13.91499996185303 C 0.7758784294128418 15.39554595947266 1.136574268341064 16.94545364379883 2.085581541061401 18.12855339050293 C 3.034588813781738 19.31165313720703 4.46931266784668 20.00004196166992 5.986000061035156 20 L 7.099999904632568 20 C 7.573192596435547 22.330322265625 9.62211799621582 24.0050106048584 11.99999904632568 24.0050106048584 C 14.37788009643555 24.0050106048584 16.42680549621582 22.330322265625 16.89999771118164 20 L 17.73799896240234 20 C 19.30085945129395 20 20.77353286743164 19.26955413818359 21.71903419494629 18.02558326721191 C 22.66440963745117 16.78195762634277 22.97412872314453 15.16752529144287 22.55599975585938 13.66200065612793 Z M 12 22 C 10.73321533203125 21.99474716186523 9.606256484985352 21.19435119628906 9.184001922607422 20.00000190734863 L 14.81599998474121 20 C 14.39374542236328 21.19435119628906 13.26678466796875 21.99474906921387 11.99999904632568 22 Z M 20.12599945068359 16.81500053405762 C 19.56100273132324 17.56452751159668 18.67561340332031 18.00370216369629 17.73699951171875 18 L 5.986000061035156 18 C 5.076607227325439 18 4.215872764587402 17.5870361328125 3.646482944488525 16.87729835510254 C 3.07689356803894 16.16706275939941 2.860550165176392 15.23722553253174 3.057999610900879 14.34899997711182 L 4.527999877929688 7.732999801635742 C 5.257105350494385 4.453667640686035 8.124523162841797 2.091390132904053 11.48277568817139 2.003414154052734 C 14.84102821350098 1.915438175201416 17.82819747924805 4.124344348907471 18.72800064086914 7.361001491546631 L 20.62800025939941 14.19699954986572 C 20.88254737854004 15.10001564025879 20.6965160369873 16.0701904296875 20.12599754333496 16.81499862670898 Z"  /></Svg>
        <Svg data-layer="c29c7f59-e7a2-4a9a-958e-9674c70488ef" style={styles.projectInProjectPool2_ellipse237} preserveAspectRatio="none" viewBox="0 0 12 12" fill="rgba(232, 33, 40, 1)"><SvgPath d="M 6 0 C 9.313708305358887 0 12 2.686291694641113 12 6 C 12 9.313708305358887 9.313708305358887 12 6 12 C 2.686291694641113 12 0 9.313708305358887 0 6 C 0 2.686291694641113 2.686291694641113 0 6 0 Z"  /></Svg>
        <Svg data-layer="36c20a74-e0c0-4120-95e1-e9cc7b1fe28f" style={styles.projectInProjectPool2_fiRrArrowLeft} preserveAspectRatio="none" viewBox="0.000026702880859375 5.674213409423828 24 12.58544921875" fill="rgba(16, 15, 13, 1)"><SvgPath d="M 0.8759999871253967 14.08800029754639 L 4.755000114440918 17.96700096130371 C 5.145500659942627 18.35738182067871 5.778500080108643 18.35738182067871 6.168999671936035 17.96700096130371 L 6.169000148773193 17.96700096130371 C 6.55938196182251 17.57650184631348 6.559381484985352 16.94350051879883 6.168999671936035 16.55300140380859 L 2.614000082015991 13 L 23 13 C 23.55228424072266 13 24 12.55228424072266 24 12 L 24 12 C 24 11.44771480560303 23.55228424072266 11 23 11 L 2.552999973297119 11 L 6.169000148773193 7.38100004196167 C 6.559382438659668 6.990500450134277 6.559382438659668 6.357499599456787 6.169000148773193 5.967000007629395 L 6.169000148773193 5.967000007629395 C 5.778500556945801 5.576618194580078 5.145500183105469 5.57661771774292 4.755000114440918 5.966999530792236 L 0.875 9.845999717712402 C -0.2920210361480713 11.01936626434326 -0.291574239730835 12.91518497467041 0.8760004043579102 14.0880012512207 Z"  /></Svg>
        <Text data-layer="6a67956e-28c1-4eaa-a766-7ce094bf4980" style={styles.projectInProjectPool2_x04252021}>04 / 25 / 2021</Text>
        <Text data-layer="df8ae805-ffca-43b0-8c41-253057fa8d78" style={styles.projectInProjectPool2_oneOfTheBestTourGuideIHaveEverMetea940ec0}>One of the Best Tour guide I have ever met.</Text>
        <Text data-layer="ee05dc90-728a-4c4f-bd64-a535a52f9de8" style={styles.projectInProjectPool2_oneOfTheBestTourGuideIHaveEverMet82c36ead}>One of the Best Tour guide I have ever met.</Text>
        <Text data-layer="08bfbc54-caf0-42df-b3f0-b877a898c317" style={styles.projectInProjectPool2_oneOfTheBestTourGuideIHaveEverMet}>One of the Best Tour guide I have ever met.</Text>
        <View style={styles.projectInProjectPool2_bodyMontserratRe5e6aa52c}><Text data-layer="9abcc8c9-4601-43ff-9c27-11a459c8c47a" style={{"marginTop":-0.5,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":"700","fontStyle":"normal","fontFamily":"Overpass","textAlign":"left","lineHeight":17.6}}>Previous Feedback</Text></View>
        <View data-layer="d932574e-384f-4d96-a5b4-28ac05e60dec" style={styles.projectInProjectPool2_group167}>
            <View data-layer="3182de9d-4d1a-4f46-991e-73897085597e" style={styles.projectInProjectPool2_group167_rectangle1514}></View>
            <View data-layer="73b508d2-762e-4f22-b7e1-81a27bc60759" style={styles.projectInProjectPool2_group167_rectangle1589}></View>
            <Text data-layer="7e357222-2e5f-4929-b147-a9e564270bb4" style={styles.projectInProjectPool2_group167_goBack}>Go Back</Text>
            <View data-layer="5b601743-cf27-43c2-bb62-3e68e3486c5f" style={styles.projectInProjectPool2_group167_group85}>
                <Text data-layer="24aa400d-32b6-474a-9c8a-8ef0fe9a6179" style={styles.projectInProjectPool2_group167_group85_sendARequest}>Send a Request</Text>
            </View>
        </View>
        <ReactImage data-layer="b6475b1f-1d0e-448c-91ae-68a828d8771f" source={require('./assets/rectangle1694.png')} style={styles.projectInProjectPool2_rectangle1694} />
        <Text data-layer="55abfb74-a45d-4212-9f2f-7a90232022fd" style={styles.projectInProjectPool2_samanKumara}>Saman Kumara</Text>
        <Text data-layer="c4d6a2f4-d11e-4913-bce7-bd73b9d670f5" style={styles.projectInProjectPool2_saraJames06172edf}>Sara James</Text>
        <Text data-layer="a2e33601-1667-4999-9567-6cd67727b2dc" style={styles.projectInProjectPool2_saraJamesbe600503}>Sara James</Text>
        <Text data-layer="32200f9e-031a-4aee-b1bd-10c359eee69f" style={styles.projectInProjectPool2_saraJames}>Sara James</Text>
        <View data-layer="b8d0244b-b579-43f4-8e16-5398ebf262c8" style={styles.projectInProjectPool2_group253}>
            <View data-layer="a87a6464-b17a-4594-a56e-81aa3efa07d9" style={styles.projectInProjectPool2_group253_star1676de04e}>
                <Svg data-layer="91289b7c-920e-4b16-aded-dd4e72c60f5e" style={styles.projectInProjectPool2_group253_star1676de04e_path514af521766} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 11.0120849609375 10.501220703125" fill="rgba(255, 220, 100, 1)"><SvgPath d="M 10.75197410583496 15.67039108276367 L 7.185117721557617 15.33957672119141 L 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 5.505756378173828 20.50812911987305 L 8.585844993591309 22.33703422546387 C 8.801505088806152 22.4650936126709 9.06577205657959 22.27311515808105 9.010626792907715 22.02844047546387 L 8.223027229309082 18.53391456604004 L 10.91423034667969 16.16971778869629 C 11.1026611328125 16.00419425964355 11.00172424316406 15.69355392456055 10.75197410583496 15.67039108276367 Z"  /></Svg>
                <Svg data-layer="9c68901f-b333-4ed9-b5be-7e8b341573fd" style={styles.projectInProjectPool2_group253_star1676de04e_path5152e47749b} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 6.4691162109375 10.501220703125" fill="rgba(255, 200, 80, 1)"><SvgPath d="M 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 3.113126754760742 21.92883491516113 C 3.208277940750122 18.0122184753418 5.028064727783203 15.25410270690918 6.468839168548584 13.67630195617676 L 5.768260478973389 12.04952812194824 Z"  /></Svg>
            </View>
            <View data-layer="b582e01c-054d-476e-9eae-e1e40c21accf" style={styles.projectInProjectPool2_group253_star1951c736b}>
                <Svg data-layer="d4715c43-fa21-4d13-a008-5f244bba9d91" style={styles.projectInProjectPool2_group253_star1951c736b_path514d1d26033} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 11.0120849609375 10.501220703125" fill="rgba(255, 220, 100, 1)"><SvgPath d="M 10.75197410583496 15.67039108276367 L 7.185117721557617 15.33957672119141 L 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 5.505756378173828 20.50812911987305 L 8.585844993591309 22.33703422546387 C 8.801505088806152 22.4650936126709 9.06577205657959 22.27311515808105 9.010626792907715 22.02844047546387 L 8.223027229309082 18.53391456604004 L 10.91423034667969 16.16971778869629 C 11.1026611328125 16.00419425964355 11.00172424316406 15.69355392456055 10.75197410583496 15.67039108276367 Z"  /></Svg>
                <Svg data-layer="c3a55c4d-aff7-43b9-a032-0b01ef194d7b" style={styles.projectInProjectPool2_group253_star1951c736b_path51590c94c8f} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 6.4691162109375 10.501220703125" fill="rgba(255, 200, 80, 1)"><SvgPath d="M 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 3.113126754760742 21.92883491516113 C 3.208277940750122 18.0122184753418 5.028064727783203 15.25410270690918 6.468839168548584 13.67630195617676 L 5.768260478973389 12.04952812194824 Z"  /></Svg>
            </View>
            <View data-layer="082b6efa-d7ee-47d9-90d2-e7a02d4b9083" style={styles.projectInProjectPool2_group253_star191587e93}>
                <Svg data-layer="4578a1e6-c278-4785-b0ae-2782ec52c9a9" style={styles.projectInProjectPool2_group253_star191587e93_path51471b6fe14} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 11.0120849609375 10.501220703125" fill="rgba(255, 220, 100, 1)"><SvgPath d="M 10.75197410583496 15.67039108276367 L 7.185117721557617 15.33957672119141 L 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 5.505756378173828 20.50812911987305 L 8.585844993591309 22.33703422546387 C 8.801505088806152 22.4650936126709 9.06577205657959 22.27311515808105 9.010626792907715 22.02844047546387 L 8.223027229309082 18.53391456604004 L 10.91423034667969 16.16971778869629 C 11.1026611328125 16.00419425964355 11.00172424316406 15.69355392456055 10.75197410583496 15.67039108276367 Z"  /></Svg>
                <Svg data-layer="55c4eac8-6400-4aed-8c75-03ca76fcc56a" style={styles.projectInProjectPool2_group253_star191587e93_path5152bc8e117} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 6.4691162109375 10.501220703125" fill="rgba(255, 200, 80, 1)"><SvgPath d="M 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 3.113126754760742 21.92883491516113 C 3.208277940750122 18.0122184753418 5.028064727783203 15.25410270690918 6.468839168548584 13.67630195617676 L 5.768260478973389 12.04952812194824 Z"  /></Svg>
            </View>
            <View data-layer="701c24ff-753d-4213-815d-6a2ed945f284" style={styles.projectInProjectPool2_group253_star1ff038cfa}>
                <Svg data-layer="c827e0d9-7c67-4d60-a267-b87fbcc0443e" style={styles.projectInProjectPool2_group253_star1ff038cfa_path51428374c17} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 11.0120849609375 10.501220703125" fill="rgba(255, 220, 100, 1)"><SvgPath d="M 10.75197410583496 15.67039108276367 L 7.185117721557617 15.33957672119141 L 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 5.505756378173828 20.50812911987305 L 8.585844993591309 22.33703422546387 C 8.801505088806152 22.4650936126709 9.06577205657959 22.27311515808105 9.010626792907715 22.02844047546387 L 8.223027229309082 18.53391456604004 L 10.91423034667969 16.16971778869629 C 11.1026611328125 16.00419425964355 11.00172424316406 15.69355392456055 10.75197410583496 15.67039108276367 Z"  /></Svg>
                <Svg data-layer="14ce89f3-0d62-4cf2-8b6e-37da86224751" style={styles.projectInProjectPool2_group253_star1ff038cfa_path515cbcf83bd} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 6.4691162109375 10.501220703125" fill="rgba(255, 200, 80, 1)"><SvgPath d="M 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 3.113126754760742 21.92883491516113 C 3.208277940750122 18.0122184753418 5.028064727783203 15.25410270690918 6.468839168548584 13.67630195617676 L 5.768260478973389 12.04952812194824 Z"  /></Svg>
            </View>
            <View data-layer="58d84073-4e94-4b4a-971e-ba1d0fae915a" style={styles.projectInProjectPool2_group253_star1}>
                <Svg data-layer="6b2f91d9-a1cb-4cdd-b53e-da04803a1e99" style={styles.projectInProjectPool2_group253_star1_path514} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 11.0120849609375 10.501220703125" fill="rgba(255, 220, 100, 1)"><SvgPath d="M 10.75197410583496 15.67039108276367 L 7.185117721557617 15.33957672119141 L 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 5.505756378173828 20.50812911987305 L 8.585844993591309 22.33703422546387 C 8.801505088806152 22.4650936126709 9.06577205657959 22.27311515808105 9.010626792907715 22.02844047546387 L 8.223027229309082 18.53391456604004 L 10.91423034667969 16.16971778869629 C 11.1026611328125 16.00419425964355 11.00172424316406 15.69355392456055 10.75197410583496 15.67039108276367 Z"  /></Svg>
                <Svg data-layer="6e4f8bf9-006d-45af-8d50-962e58212a79" style={styles.projectInProjectPool2_group253_star1_path515} preserveAspectRatio="none" viewBox="-0.00028324127197265625 11.876749038696289 6.4691162109375 10.501220703125" fill="rgba(255, 200, 80, 1)"><SvgPath d="M 5.768260478973389 12.04952812194824 C 5.669065475463867 11.81915664672852 5.342424869537354 11.81915664672852 5.243229866027832 12.04952812194824 L 3.826394557952881 15.33959770202637 L 0.2595387995243073 15.67039108276367 C 0.00978852529078722 15.69355392456055 -0.0911482498049736 16.00419425964355 0.09728284925222397 16.16971778869629 L 2.788486003875732 18.53391456604004 L 2.000907897949219 22.02844047546387 C 1.945761561393738 22.27311515808105 2.210008144378662 22.4650936126709 2.425668478012085 22.33703422546387 L 3.113126754760742 21.92883491516113 C 3.208277940750122 18.0122184753418 5.028064727783203 15.25410270690918 6.468839168548584 13.67630195617676 L 5.768260478973389 12.04952812194824 Z"  /></Svg>
            </View>
        </View>
        <Text data-layer="dbd9f82c-654d-4129-9bbc-235301041e24" style={styles.projectInProjectPool2_completedTours109}>Completed Tours - 109</Text>
        <Text data-layer="4005ddde-6a50-44a6-8581-359f4ecf56ad" style={styles.projectInProjectPool2_x10000LkrPerTour}>10,000 LKR per Tour</Text>
        <ReactImage data-layer="4fa8c26c-b64f-4cb2-8040-eb0294978f7b" source={require('./assets/rectangle1695.png')} style={styles.projectInProjectPool2_rectangle1695} />
        <ReactImage data-layer="8ccb2edc-dcaa-491f-a034-9afc7768cb28" source={require('./assets/rectangle1697.png')} style={styles.projectInProjectPool2_rectangle1697} />
        <ReactImage data-layer="f54a4df4-4afc-45c8-ba29-d39dd410dbee" source={require('./assets/rectangle1698.png')} style={styles.projectInProjectPool2_rectangle1698} />
        <Text data-layer="56316717-1a65-476b-9b82-cd58f3664772" style={styles.projectInProjectPool2_weAreGoingToImplementThisScheduleByCreating20PostsForFacebookAnd30VariousVideoContentFromDifferentContentCreatorsInYoutubeByAnalyzingTheFacebookPostsPublishedByTheFacebookPageOwnersWeAreCreatingAnotherKindOfConcept}>We are going to implement this schedule by creating 20 posts for facebook and 30 various video content from different content creators in YouTube. By analyzing the facebook posts published by the facebook page owners we are creating another kind of concept for version 3.below are the contant we are going to create. </Text>
        <View style={styles.projectInProjectPool2_bodyMontserratRe}><Text data-layer="c2b937c7-2033-49e9-a6aa-1c56a13e99ce" style={{"marginTop":-0.5,"color":"rgba(0, 0, 0, 1)","fontSize":16,"fontWeight":"700","fontStyle":"normal","fontFamily":"Overpass","textAlign":"left","lineHeight":17.6}}>Guide Description</Text></View>
    </ScrollView>
    );
  }
}

ProjectInProjectPool2.propTypes = {

}

ProjectInProjectPool2.defaultProps = {

}


const styles = StyleSheet.create({
  "projectInProjectPool2": {
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
  "projectInProjectPool2_rectangle1625": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 245, 245, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 9,
    "borderTopRightRadius": 9,
    "borderBottomLeftRadius": 9,
    "borderBottomRightRadius": 9,
    "width": 363,
    "height": 131,
    "left": 17,
    "top": 138
  },
  "projectInProjectPool2_rectangle1696": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(245, 245, 245, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 9,
    "borderTopRightRadius": 9,
    "borderBottomLeftRadius": 9,
    "borderBottomRightRadius": 9,
    "width": 363,
    "height": 209,
    "left": 17,
    "top": 488
  },
  "projectInProjectPool2_ongoingProjects": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 15, 13, 1)",
    "fontSize": 16,
    "fontWeight": "700",
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
    "width": 122,
    "height": 35,
    "left": 136,
    "top": 23.5
  },
  "projectInProjectPool2_tourGuide": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(232, 33, 40, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 30,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 96,
    "height": 37,
    "left": 17,
    "top": 101.5
  },
  "projectInProjectPool2_fiRrBell": {
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
  "projectInProjectPool2_ellipse237": {
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
  "projectInProjectPool2_fiRrArrowLeft": {
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
    "height": 12.59,
    "left": 30,
    "top": 34.27
  },
  "projectInProjectPool2_x04252021": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(63, 66, 68, 1)",
    "fontSize": 9,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 18,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 56,
    "height": 21,
    "left": 243,
    "top": 3
  },
  "projectInProjectPool2_oneOfTheBestTourGuideIHaveEverMetea940ec0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 286,
    "height": 28,
    "left": 82,
    "top": 542
  },
  "projectInProjectPool2_oneOfTheBestTourGuideIHaveEverMet82c36ead": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 286,
    "height": 28,
    "left": 82,
    "top": 600
  },
  "projectInProjectPool2_oneOfTheBestTourGuideIHaveEverMet": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 286,
    "height": 28,
    "left": 82,
    "top": 657
  },
  "projectInProjectPool2_bodyMontserratRe5e6aa52c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 17.6,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 134,
    "height": 21,
    "left": 17,
    "top": 454
  },
  "projectInProjectPool2_group167": {
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
    "width": 341,
    "height": 31,
    "left": 26,
    "top": 803
  },
  "projectInProjectPool2_group167_rectangle1514": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(196, 196, 196, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 165,
    "height": 31,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group167_rectangle1589": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(65, 188, 161, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 165,
    "height": 31,
    "left": 176,
    "top": 0
  },
  "projectInProjectPool2_group167_goBack": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 48,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 43,
    "height": 52,
    "left": 53,
    "top": -9.87
  },
  "projectInProjectPool2_group167_group85": {
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
    "width": 82,
    "height": 16,
    "left": 216.5,
    "top": 6.13
  },
  "projectInProjectPool2_group167_group85_sendARequest": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 48,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 82,
    "height": 52,
    "left": 0,
    "top": -16
  },
  "projectInProjectPool2_rectangle1694": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 48,
    "height": 48,
    "left": 42,
    "top": 156
  },
  "projectInProjectPool2_samanKumara": {
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
    "width": 106,
    "height": 23,
    "left": 112,
    "top": 160.5
  },
  "projectInProjectPool2_saraJames06172edf": {
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
    "width": 78,
    "height": 23,
    "left": 82,
    "top": 515.5
  },
  "projectInProjectPool2_saraJamesbe600503": {
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
    "width": 78,
    "height": 23,
    "left": 82,
    "top": 573.5
  },
  "projectInProjectPool2_saraJames": {
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
    "width": 78,
    "height": 23,
    "left": 82,
    "top": 630.5
  },
  "projectInProjectPool2_group253": {
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
    "width": 72.99,
    "height": 10.5,
    "left": 114,
    "top": 188
  },
  "projectInProjectPool2_group253_star1676de04e": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1676de04e_path514af521766": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1676de04e_path5152e47749b": {
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
    "width": 6.47,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1951c736b": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 15.49,
    "top": 0
  },
  "projectInProjectPool2_group253_star1951c736b_path514d1d26033": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1951c736b_path51590c94c8f": {
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
    "width": 6.47,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star191587e93": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 30.99,
    "top": 0
  },
  "projectInProjectPool2_group253_star191587e93_path51471b6fe14": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star191587e93_path5152bc8e117": {
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
    "width": 6.47,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1ff038cfa": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 46.48,
    "top": 0
  },
  "projectInProjectPool2_group253_star1ff038cfa_path51428374c17": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1ff038cfa_path515cbcf83bd": {
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
    "width": 6.47,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 61.98,
    "top": 0
  },
  "projectInProjectPool2_group253_star1_path514": {
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
    "width": 11.01,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_group253_star1_path515": {
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
    "width": 6.47,
    "height": 10.5,
    "left": 0,
    "top": 0
  },
  "projectInProjectPool2_completedTours109": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(65, 188, 161, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 130,
    "height": 27,
    "left": 114,
    "top": 206.5
  },
  "projectInProjectPool2_x10000LkrPerTour": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 220, 100, 1)",
    "fontSize": 12,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 130,
    "height": 27,
    "left": 114,
    "top": 242.5
  },
  "projectInProjectPool2_rectangle1695": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 31,
    "height": 31,
    "left": 42,
    "top": 511
  },
  "projectInProjectPool2_rectangle1697": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 31,
    "height": 31,
    "left": 42,
    "top": 569
  },
  "projectInProjectPool2_rectangle1698": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 24,
    "borderTopRightRadius": 24,
    "borderBottomLeftRadius": 24,
    "borderBottomRightRadius": 24,
    "width": 31,
    "height": 31,
    "left": 42,
    "top": 626
  },
  "projectInProjectPool2_weAreGoingToImplementThisScheduleByCreating20PostsForFacebookAnd30VariousVideoContentFromDifferentContentCreatorsInYoutubeByAnalyzingTheFacebookPostsPublishedByTheFacebookPageOwnersWeAreCreatingAnotherKindOfConcept": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 23,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 332,
    "height": 100,
    "left": 17,
    "top": 314
  },
  "projectInProjectPool2_bodyMontserratRe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "left",
    "lineHeight": 17.6,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 130,
    "height": 21,
    "left": 17,
    "top": 290
  }
});