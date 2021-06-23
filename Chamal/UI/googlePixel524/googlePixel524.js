import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class GooglePixel524 extends Component {

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
    <ScrollView data-layer="348f4a23-f23d-47bd-8fbe-59ed3cfd1d7f" style={styles.googlePixel524}>
        <Svg data-layer="c9f03551-56c5-47a2-919c-b1b79ecdf5ba" style={styles.googlePixel524_fiRrBell} preserveAspectRatio="none" viewBox="0.9858129620552063 0.0022306442260742188 21.75244140625 24.0029296875" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 22.55500030517578 13.66199970245361 L 20.65500068664551 6.825999736785889 C 19.50912475585938 2.705392360687256 15.70595932006836 -0.1066312789916992 11.43046379089355 0.005464553833007812 C 7.154967784881592 0.1175603866577148 3.504378318786621 3.125009536743164 2.57599925994873 7.300000190734863 L 1.105000019073486 13.91499996185303 C 0.7758784294128418 15.39554595947266 1.136574268341064 16.94545364379883 2.085581541061401 18.12855339050293 C 3.034588813781738 19.31165313720703 4.46931266784668 20.00004196166992 5.986000061035156 20 L 7.099999904632568 20 C 7.573192596435547 22.330322265625 9.62211799621582 24.0050106048584 11.99999904632568 24.0050106048584 C 14.37788009643555 24.0050106048584 16.42680549621582 22.330322265625 16.89999771118164 20 L 17.73799896240234 20 C 19.30085945129395 20 20.77353286743164 19.26955413818359 21.71903419494629 18.02558326721191 C 22.66440963745117 16.78195762634277 22.97412872314453 15.16752529144287 22.55599975585938 13.66200065612793 Z M 12 22 C 10.73321533203125 21.99474716186523 9.606256484985352 21.19435119628906 9.184001922607422 20.00000190734863 L 14.81599998474121 20 C 14.39374542236328 21.19435119628906 13.26678466796875 21.99474906921387 11.99999904632568 22 Z M 20.12599945068359 16.81500053405762 C 19.56100273132324 17.56452751159668 18.67561340332031 18.00370216369629 17.73699951171875 18 L 5.986000061035156 18 C 5.076607227325439 18 4.215872764587402 17.5870361328125 3.646482944488525 16.87729835510254 C 3.07689356803894 16.16706275939941 2.860550165176392 15.23722553253174 3.057999610900879 14.34899997711182 L 4.527999877929688 7.732999801635742 C 5.257105350494385 4.453667640686035 8.124523162841797 2.091390132904053 11.48277568817139 2.003414154052734 C 14.84102821350098 1.915438175201416 17.82819747924805 4.124344348907471 18.72800064086914 7.361001491546631 L 20.62800025939941 14.19699954986572 C 20.88254737854004 15.10001564025879 20.6965160369873 16.0701904296875 20.12599754333496 16.81499862670898 Z"  /></Svg>
        <View data-layer="faae3907-25da-49f6-85fe-955714384fd4" style={styles.googlePixel524_fiRrAlignLeft}>
            <Svg data-layer="7c38a7b2-2943-4da8-97e1-755a88910168" style={styles.googlePixel524_fiRrAlignLeft_path25} preserveAspectRatio="none" viewBox="0 4 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 6 L 23 6 C 23.55228424072266 6 24 5.552284717559814 24 5 C 24 4.447715282440186 23.55228424072266 4 23 4 L 1 4 C 0.4477152228355408 4 0 4.447715282440186 0 5 C 0 5.552284717559814 0.4477152824401855 6 1 6 Z"  /></Svg>
            <Svg data-layer="116619d1-fec6-4e00-bdd2-ba9123cb1751" style={styles.googlePixel524_fiRrAlignLeft_path26} preserveAspectRatio="none" viewBox="0 9 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 1 11 L 15 11 C 15.55228519439697 11 16 10.55228424072266 16 10 C 16 9.447714805603027 15.55228424072266 9 15 9 L 1 9 C 0.4477152228355408 9 0 9.447715759277344 0 10 C 0 10.55228519439697 0.4477152824401855 11 1 11 Z"  /></Svg>
            <Svg data-layer="b5d37c58-e5bd-4e27-85f8-df226b0c5a2f" style={styles.googlePixel524_fiRrAlignLeft_path27} preserveAspectRatio="none" viewBox="0 19 16 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 15 19 L 1 19 C 0.4477152228355408 19 0 19.44771575927734 0 20 C 0 20.55228424072266 0.4477152824401855 21 1 21 L 15 21 C 15.55228519439697 21 16 20.55228424072266 16 20 C 16 19.44771575927734 15.55228424072266 19 15 19 Z"  /></Svg>
            <Svg data-layer="e2b33aae-14c5-428f-ab4d-4ce19fe5144b" style={styles.googlePixel524_fiRrAlignLeft_path28} preserveAspectRatio="none" viewBox="0 14 24 2" fill="rgba(17, 7, 116, 1)"><SvgPath d="M 23 14 L 1 14 C 0.4477152228355408 14 0 14.44771575927734 0 15 C 0 15.55228519439697 0.4477152824401855 16 1 16 L 23 16 C 23.55228424072266 16 24 15.55228424072266 24 15 C 24 14.44771480560303 23.55228424072266 14 23 14 Z"  /></Svg>
        </View>
        <Svg data-layer="eeece567-268b-47d7-b96a-ac9f69e48b44" style={styles.googlePixel524_path347} preserveAspectRatio="none" viewBox="0 0 12 12" fill="rgba(74, 77, 246, 1)"><SvgPath d="M 6 0 C 9.313708305358887 0 12 2.686291694641113 12 6 C 12 9.313708305358887 9.313708305358887 12 6 12 C 2.686291694641113 12 0 9.313708305358887 0 6 C 0 2.686291694641113 2.686291694641113 0 6 0 Z"  /></Svg>
        <Text data-layer="a1317b6a-75c9-43ec-808a-7144dbbd5f8a" style={styles.googlePixel524_selectYourFavourables}>Select Your favourables</Text>
        <Text data-layer="69d26b9e-79db-46a5-8f7d-c8c868d76240" style={styles.googlePixel524_whatIsTheLanguge}>What is the Languge </Text>
        <Text data-layer="8e384082-1b58-4ffd-89bc-ddd2a4c10943" style={styles.googlePixel524_bodyMontserratRe}>Select the Best tour guide for your tour. This is auto Genarated</Text>
        <View data-layer="de8d0114-3c6f-4f31-b4eb-7a7c8cb14642" style={styles.googlePixel524_translate}>
            <Svg data-layer="3480c0d8-fc37-4e09-9b35-144a7dcf55b1" style={styles.googlePixel524_translate_path516} preserveAspectRatio="none" viewBox="-0.00018310546875 -0.000003814697265625 44.9189453125 37.8902587890625" fill="rgba(0, 216, 224, 1)"><SvgPath d="M 44.13349151611328 10.39073276519775 L 37.81438446044922 5.87722110748291 C 37.32075119018555 2.556053876876831 34.45024490356445 -3.814697265625e-06 30.99431991577148 -3.814697265625e-06 L 6.895567417144775 -3.814697265625e-06 C 3.092967510223389 -3.814697265625e-06 -0.00018310546875 3.093146800994873 -0.00018310546875 6.895259380340576 L -0.00018310546875 30.99501037597656 C -0.00018310546875 34.79712295532227 3.092967510223389 37.89027404785156 6.895567417144775 37.89027404785156 L 27.98217964172363 37.89027404785156 C 29.01778793334961 37.89027404785156 29.85711288452148 37.05094909667969 29.85711288452148 36.01533889770508 C 29.85711288452148 35.49729156494141 29.64764785766602 35.02856063842773 29.30830383300781 34.68970108032227 L 34.68897247314453 29.30854606628418 C 35.02831649780273 29.64789009094238 35.49704742431641 29.85784339904785 36.01461029052734 29.85784339904785 C 37.05022048950195 29.85784339904785 37.88954544067383 29.01803016662598 37.88954544067383 27.98291015625 L 37.88954544067383 17.90173721313477 L 44.13345336914062 13.44193649291992 C 44.62611389160156 13.09038639068604 44.91858291625977 12.52204895019531 44.91858291625977 11.91660404205322 C 44.91858291625977 11.31066799163818 44.62611389160156 10.74232959747314 44.13345336914062 10.39078426361084 Z M 44.13349151611328 10.39073276519775"  /></Svg>
            <Svg data-layer="24556e2f-8839-4c67-a52d-91338dfb47f6" style={styles.googlePixel524_translate_path517} preserveAspectRatio="none" viewBox="152.63671875 -0.000003814697265625 25.83984375 37.8902587890625" fill="rgba(0, 172, 179, 1)"><SvgPath d="M 177.6914672851562 10.39073276519775 L 171.3723602294922 5.87722110748291 C 170.8787231445312 2.556053876876831 168.0082244873047 -3.814697265625e-06 164.5522918701172 -3.814697265625e-06 L 152.63671875 -3.814697265625e-06 L 152.63671875 37.89025115966797 L 161.5402069091797 37.89025115966797 C 162.5758056640625 37.89025115966797 163.4151306152344 37.05092620849609 163.4151306152344 36.01531600952148 C 163.4151306152344 35.49726867675781 163.2056732177734 35.02853775024414 162.8663330078125 34.68967819213867 L 168.2469940185547 29.30852317810059 C 168.5863342285156 29.64786720275879 169.0550689697266 29.85782051086426 169.5726318359375 29.85782051086426 C 170.6082458496094 29.85782051086426 171.4475708007812 29.01800727844238 171.4475708007812 27.98288726806641 L 171.4475708007812 17.90171432495117 L 177.6914825439453 13.44191360473633 C 178.1841430664062 13.09036350250244 178.4766082763672 12.52202606201172 178.4766082763672 11.91658115386963 C 178.4766082763672 11.31064510345459 178.1841430664062 10.74230670928955 177.6914825439453 10.39076137542725 Z M 177.6914672851562 10.39073276519775"  /></Svg>
            <Svg data-layer="639258c4-acb5-4aeb-b58e-213134dd0392" style={styles.googlePixel524_translate_path518} preserveAspectRatio="none" viewBox="97.01529693603516 92.3550796508789 13.63623046875 14.80224609375" fill="rgba(254, 244, 245, 1)"><SvgPath d="M 109.5944290161133 105.042610168457 C 108.095947265625 105.042610168457 106.6936569213867 104.6285629272461 105.4930114746094 103.9088592529297 C 106.9412002563477 102.3459320068359 107.9040679931641 100.3279418945312 108.1369552612305 98.09461975097656 L 109.5944290161133 98.09461975097656 C 110.1779022216797 98.09461975097656 110.6515197753906 97.62149047851562 110.6515197753906 97.03752899169922 C 110.6515197753906 96.45356750488281 110.1779022216797 95.97994995117188 109.5944290161133 95.97994995117188 L 104.8909912109375 95.97994995117188 L 104.8909912109375 93.41265869140625 C 104.8909912109375 92.82820892333984 104.4173736572266 92.35507965087891 103.8334121704102 92.35507965087891 C 103.2499389648438 92.35507965087891 102.7763214111328 92.82820892333984 102.7763214111328 93.41265869140625 L 102.7763214111328 95.97994995117188 L 98.0728759765625 95.97994995117188 C 97.48940277099609 95.97994995117188 97.01578521728516 96.45356750488281 97.01578521728516 97.03752899169922 C 97.01578521728516 97.62149047851562 97.48940277099609 98.09461975097656 98.0728759765625 98.09461975097656 L 99.53034973144531 98.09461975097656 C 99.76276397705078 100.3279418945312 100.7256164550781 102.3459320068359 102.1738052368164 103.9088592529297 C 100.9736480712891 104.6275863647461 99.57135772705078 105.042610168457 98.0728759765625 105.042610168457 C 97.48891448974609 105.042610168457 97.01529693603516 105.5157318115234 97.01529693603516 106.0997009277344 C 97.01529693603516 106.6836624145508 97.48891448974609 107.1572799682617 98.0728759765625 107.1572799682617 C 100.2119598388672 107.1572799682617 102.1972427368164 106.4878692626953 103.8334045410156 105.3507080078125 C 105.4695739746094 106.4883575439453 107.4548645019531 107.1572799682617 109.5939331054688 107.1572799682617 C 110.1779022216797 107.1572799682617 110.6515121459961 106.6836624145508 110.6515121459961 106.0997009277344 C 110.6515121459961 105.5157318115234 110.1779022216797 105.042610168457 109.5944213867188 105.042610168457 Z M 106.0061798095703 98.09461975097656 C 105.7762145996094 99.82795715332031 104.9906005859375 101.3869781494141 103.8334121704102 102.5871353149414 C 102.6767196655273 101.3869857788086 101.8910980224609 99.82795715332031 101.6611328125 98.09461975097656 L 106.0061798095703 98.09461975097656 Z M 106.0061798095703 98.09461975097656"  /></Svg>
            <Svg data-layer="29508e8c-9a79-467c-996d-40ba4984ea78" style={styles.googlePixel524_translate_path519} preserveAspectRatio="none" viewBox="152.63656616210938 208.86669921875 44.9189453125 37.8902587890625" fill="rgba(84, 227, 96, 1)"><SvgPath d="M 190.6601104736328 208.8667449951172 L 166.5608520507812 208.8667449951172 C 162.7587432861328 208.8667449951172 159.6656036376953 211.9598846435547 159.6656036376953 215.7619934082031 L 159.6656036376953 228.8552856445312 L 153.4216918945312 233.3150787353516 C 152.9290313720703 233.6666259765625 152.6365661621094 234.2349700927734 152.6365661621094 234.8404083251953 C 152.6365661621094 235.4463500976562 152.9290313720703 236.0146789550781 153.4216918945312 236.3662261962891 L 159.7407989501953 240.8797454833984 C 160.2344360351562 244.2009124755859 163.1049346923828 246.7569580078125 166.5608673095703 246.7569580078125 L 190.6601104736328 246.7569580078125 C 194.4622192382812 246.7569580078125 197.5553741455078 243.663818359375 197.5553741455078 239.8612060546875 L 197.5553741455078 215.761962890625 C 197.5553741455078 211.9598541259766 194.4622192382812 208.86669921875 190.6601104736328 208.86669921875 Z M 190.6601104736328 208.8667449951172"  /></Svg>
            <Svg data-layer="9a83e9b6-f8a4-4a0c-aa25-cfc2b7202df8" style={styles.googlePixel524_translate_path520} preserveAspectRatio="none" viewBox="360.4337158203125 208.86691284179688 18.945068359375 37.8902587890625" fill="rgba(0, 171, 94, 1)"><SvgPath d="M 372.4835815429688 208.8669281005859 L 360.4337158203125 208.8669281005859 L 360.4337158203125 246.7571716308594 L 372.4835815429688 246.7571716308594 C 376.2856750488281 246.7571716308594 379.3788452148438 243.6640319824219 379.3788452148438 239.8614196777344 L 379.3788452148438 215.7621765136719 C 379.3788452148438 211.9600524902344 376.2856750488281 208.8669128417969 372.4835815429688 208.8669128417969 Z M 372.4835815429688 208.8669281005859"  /></Svg>
            <Svg data-layer="20a89072-90f1-46d9-a0da-bd788368b1bc" style={styles.googlePixel524_translate_path521} preserveAspectRatio="none" viewBox="315.6838684082031 301.222412109375 11.187255859375 14.8017578125" fill="rgba(254, 244, 245, 1)"><SvgPath d="M 315.6838989257812 314.9402465820312 C 315.6838989257812 314.8997192382812 315.7044067382812 314.8196411132812 315.7244262695312 314.7390747070312 L 319.6007385253906 302.1066589355469 C 319.7814025878906 301.504150390625 320.5240478515625 301.222412109375 321.2671813964844 301.222412109375 C 322.0308227539062 301.222412109375 322.7739562988281 301.504150390625 322.9546203613281 302.1066589355469 L 326.8304443359375 314.7390747070312 C 326.8504638671875 314.8196411132812 326.8709716796875 314.8796997070312 326.8709716796875 314.9402465820312 C 326.8709716796875 315.5622863769531 325.9271850585938 316.0242004394531 325.2240600585938 316.0242004394531 C 324.7821960449219 316.0242004394531 324.4408874511719 315.8840637207031 324.3403015136719 315.5022277832031 L 323.5771484375 312.8309631347656 L 318.9777221679688 312.8309631347656 L 318.2145385742188 315.5022277832031 C 318.1144409179688 315.8840637207031 317.7731628417969 316.0242004394531 317.3312683105469 316.0242004394531 C 316.628173828125 316.0242004394531 315.6838684082031 315.5823059082031 315.6838684082031 314.9402465820312 Z M 323.0151672363281 310.7821960449219 L 321.2671813964844 304.6169128417969 L 319.5201721191406 310.7821960449219 L 323.0151672363281 310.7821960449219 Z M 323.0151672363281 310.7821960449219"  /></Svg>
            <View data-layer="f5ee401d-b807-4da5-86a6-b48d2962bb3a" style={styles.googlePixel524_translate_group254}>
                <Svg data-layer="1be8e3e1-a074-45ad-ac82-824e4c8e45a8" style={styles.googlePixel524_translate_group254_path522} preserveAspectRatio="none" viewBox="152.63638305664062 92.43311309814453 6.683837890625 14.79248046875" fill="rgba(213, 237, 237, 1)"><SvgPath d="M 158.2631225585938 98.16289520263672 C 158.8466033935547 98.16289520263672 159.3202209472656 97.68976593017578 159.3202209472656 97.10580444335938 C 159.3202209472656 96.52184295654297 158.8466033935547 96.04822540283203 158.2631225585938 96.04822540283203 L 153.5596923828125 96.04822540283203 L 153.5596923828125 93.48092651367188 C 153.5596923828125 92.94237518310547 153.1568756103516 92.49903106689453 152.6363830566406 92.43311309814453 L 152.6363830566406 98.16288757324219 L 154.6748809814453 98.16288757324219 C 154.4537048339844 99.82786560058594 153.7193603515625 101.3312301635742 152.6363830566406 102.5108795166016 L 152.6363830566406 105.5083312988281 C 154.2466735839844 106.5903244018555 156.1811828613281 107.2255554199219 158.2631225585938 107.2255554199219 C 158.8466033935547 107.2255554199219 159.3202209472656 106.7519378662109 159.3202209472656 106.1679763793945 C 159.3202209472656 105.5840148925781 158.8466033935547 105.1108856201172 158.2631225585938 105.1108856201172 C 156.7646484375 105.1108856201172 155.3623657226562 104.6963500976562 154.1617126464844 103.9771423339844 C 155.6098937988281 102.4142074584961 156.5727691650391 100.3962173461914 156.8056640625 98.16290283203125 L 158.2631225585938 98.16289520263672 Z M 158.2631225585938 98.16289520263672"  /></Svg>
                <Svg data-layer="a0414e40-1dcb-4a46-9473-05397d7eca9e" style={styles.googlePixel524_translate_group254_path523} preserveAspectRatio="none" viewBox="360.4331970214844 301.2257080078125 5.593505859375 14.8011474609375" fill="rgba(213, 237, 237, 1)"><SvgPath d="M 365.9862060546875 314.7418823242188 L 362.1103820800781 302.1094665527344 C 361.9302062988281 301.5093994140625 361.1929321289062 301.2276611328125 360.4331970214844 301.2257080078125 L 360.4331970214844 304.6552734375 L 362.1704406738281 310.7849426269531 L 360.4331970214844 310.7849426269531 L 360.4331970214844 312.8336791992188 L 362.73291015625 312.8336791992188 L 363.4960632324219 315.5049743652344 C 363.5966491699219 315.8867797851562 363.9379577636719 316.0269165039062 364.3798217773438 316.0269165039062 C 365.0829162597656 316.0269165039062 366.0267333984375 315.5655212402344 366.0267333984375 314.9429931640625 C 366.0267333984375 314.8824462890625 366.0067138671875 314.8223876953125 365.9862060546875 314.7418212890625 Z M 365.9862060546875 314.7418823242188"  /></Svg>
            </View>
        </View>
        <View data-layer="0e2a51f5-4179-42f1-b838-c8fa0a7b3121" style={styles.googlePixel524_rectangle1700}></View>
        <View data-layer="e7fde195-f9ab-4f82-83f7-52a74c2ef0c5" style={styles.googlePixel524_rectangle1701}></View>
        <Svg data-layer="66713d47-45a9-4956-abc2-0e9f32ded825" style={styles.googlePixel524_ellipse295} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="e2c1fe48-0573-4f4f-875c-027586771f70" style={styles.googlePixel524_ellipse297} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="550d6f39-6efa-46ba-ab62-ff2414973cee" style={styles.googlePixel524_ellipse300} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="1c913aca-6172-481d-9976-8e0420c08f29" style={styles.googlePixel524_ellipse298} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="cb946be1-4604-4c73-903e-59f899f0b3b0" style={styles.googlePixel524_ellipse301} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="3ec4a99e-5f1a-48da-9cb4-04d67f1bc34d" style={styles.googlePixel524_ellipse296} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="72af1e83-5a64-4d3d-b356-fd12f5bc4ed0" style={styles.googlePixel524_ellipse302} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="344c2142-fb83-4a1c-bc5e-f8c4ab8982f0" style={styles.googlePixel524_ellipse299} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <Svg data-layer="20d2e891-e775-4bb1-b7f3-f8534f4663b9" style={styles.googlePixel524_ellipse303} preserveAspectRatio="none" viewBox="0 0 9 9" fill="rgba(178, 178, 178, 1)"><SvgPath d="M 4.5 0 C 6.985280990600586 0 9 2.014718770980835 9 4.5 C 9 6.985280990600586 6.985280990600586 9 4.5 9 C 2.014718770980835 9 0 6.985280990600586 0 4.5 C 0 2.014718770980835 2.014718770980835 0 4.5 0 Z"  /></Svg>
        <View data-layer="9f06b139-9622-4efb-8ebd-59dc761df73a" style={styles.googlePixel524_rightArrow1e031c448}>
            <View data-layer="43c3a76d-e287-4847-9b54-62e685ce6e54" style={styles.googlePixel524_rightArrow1e031c448_group255a403c04b}>
                <Svg data-layer="43a360f5-92e0-4c38-a550-cf5e54118386" style={styles.googlePixel524_rightArrow1e031c448_group255a403c04b_path52485a6dc66} preserveAspectRatio="none" viewBox="101.47801208496094 0 10.003173828125 17.0269775390625" fill="rgba(183, 183, 183, 1)"><SvgPath d="M 111.209602355957 7.849087238311768 L 103.6323928833008 0.2720138430595398 C 103.4571380615234 0.0966237485408783 103.2231903076172 0 102.9737396240234 0 C 102.7242889404297 0 102.4903411865234 0.0966237485408783 102.3150939941406 0.2720138430595398 L 101.7570877075195 0.8298844695091248 C 101.3939819335938 1.193400263786316 101.3939819335938 1.78421688079834 101.7570877075195 2.147178888320923 L 108.1198577880859 8.50994873046875 L 101.7500305175781 14.87977886199951 C 101.5747756958008 15.0551700592041 101.4780120849609 15.28897666931152 101.4780120849609 15.53828811645508 C 101.4780120849609 15.78787708282471 101.5747756958008 16.02168273925781 101.7500305175781 16.19721221923828 L 102.3080368041992 16.75494384765625 C 102.4834289550781 16.93033409118652 102.7172317504883 17.02695655822754 102.966682434082 17.02695655822754 C 103.2161331176758 17.02695655822754 103.4500732421875 16.93033409118652 103.6253280639648 16.75494384765625 L 111.209602355957 9.170949935913086 C 111.3852691650391 8.99500560760498 111.4817504882812 8.760091781616211 111.481201171875 8.510364532470703 C 111.4817504882812 8.259669303894043 111.3852691650391 8.024892807006836 111.209602355957 7.849087238311768 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="ed2a4c4c-bea1-4449-b339-d642b316cc63" style={styles.googlePixel524_rightArrow1}>
            <View data-layer="39835dcf-327c-4d87-9b5b-fdddee666d18" style={styles.googlePixel524_rightArrow1_group255}>
                <Svg data-layer="a7d09fea-7aa4-43b3-b055-75bf9dcfe3b9" style={styles.googlePixel524_rightArrow1_group255_path524} preserveAspectRatio="none" viewBox="101.47801971435547 0 10.003173828125 17.0269775390625" fill="rgba(183, 183, 183, 1)"><SvgPath d="M 101.7496185302734 7.849096775054932 L 109.3268127441406 0.2720141708850861 C 109.502067565918 0.09662386029958725 109.7360153198242 0 109.985466003418 0 C 110.2349166870117 0 110.468864440918 0.09662386029958725 110.6441116333008 0.2720141708850861 L 111.2021179199219 0.8298854827880859 C 111.5652236938477 1.193401694297791 111.5652236938477 1.784219026565552 111.2021179199219 2.147181510925293 L 104.83935546875 8.50995922088623 L 111.2091751098633 14.87979698181152 C 111.3844299316406 15.05518817901611 111.4811935424805 15.28899478912354 111.4811935424805 15.53830623626709 C 111.4811935424805 15.78789615631104 111.3844299316406 16.02170181274414 111.2091751098633 16.19723129272461 L 110.6511688232422 16.75496292114258 C 110.4757766723633 16.93035507202148 110.2419738769531 17.0269775390625 109.9925231933594 17.0269775390625 C 109.7430725097656 17.0269775390625 109.5091323852539 16.93035507202148 109.3338775634766 16.75496292114258 L 101.7496185302734 9.170960426330566 C 101.5739517211914 8.995016098022461 101.4774703979492 8.760102272033691 101.4780197143555 8.510375022888184 C 101.4774703979492 8.259678840637207 101.5739517211914 8.02490234375 101.7496185302734 7.849096775054932 Z"  /></Svg>
            </View>
        </View>
    </ScrollView>
    );
  }
}

GooglePixel524.propTypes = {

}

GooglePixel524.defaultProps = {

}


const styles = StyleSheet.create({
  "googlePixel524": {
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
  "googlePixel524_fiRrBell": {
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
  "googlePixel524_fiRrAlignLeft": {
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
  "googlePixel524_fiRrAlignLeft_path25": {
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
  "googlePixel524_fiRrAlignLeft_path26": {
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
  "googlePixel524_fiRrAlignLeft_path27": {
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
  "googlePixel524_fiRrAlignLeft_path28": {
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
  "googlePixel524_path347": {
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
  "googlePixel524_selectYourFavourables": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 15, 13, 1)",
    "fontSize": 20,
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
    "width": 204,
    "height": 37,
    "left": 95,
    "top": 125.5
  },
  "googlePixel524_whatIsTheLanguge": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(17, 7, 116, 1)",
    "fontSize": 17,
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
    "width": 184,
    "height": 35,
    "left": 105,
    "top": 349.25
  },
  "googlePixel524_bodyMontserratRe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(19, 19, 19, 1)",
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Overpass",
    "textAlign": "center",
    "lineHeight": 21,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 271,
    "height": 49,
    "left": 61,
    "top": 381.75
  },
  "googlePixel524_translate": {
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
    "width": 64,
    "height": 64,
    "left": 155,
    "top": 278.25
  },
  "googlePixel524_translate_path516": {
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
    "width": 44.92,
    "height": 37.89,
    "left": 0,
    "top": 0
  },
  "googlePixel524_translate_path517": {
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
    "width": 25.84,
    "height": 37.89,
    "left": 19.08,
    "top": 0
  },
  "googlePixel524_translate_path518": {
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
    "width": 13.64,
    "height": 14.8,
    "left": 12.13,
    "top": 11.54
  },
  "googlePixel524_translate_path519": {
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
    "width": 44.92,
    "height": 37.89,
    "left": 19.08,
    "top": 26.11
  },
  "googlePixel524_translate_path520": {
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
    "width": 18.95,
    "height": 37.89,
    "left": 45.05,
    "top": 26.11
  },
  "googlePixel524_translate_path521": {
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
    "width": 11.19,
    "height": 14.8,
    "left": 39.46,
    "top": 37.65
  },
  "googlePixel524_translate_group254": {
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
    "width": 31.57,
    "height": 40.9,
    "left": 19.08,
    "top": 11.55
  },
  "googlePixel524_translate_group254_path522": {
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
    "width": 6.68,
    "height": 14.79,
    "left": 0,
    "top": 0
  },
  "googlePixel524_translate_group254_path523": {
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
    "width": 5.59,
    "height": 14.8,
    "left": 25.97,
    "top": 26.1
  },
  "googlePixel524_rectangle1700": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 7
    },
    "shadowRadius": 16,
    "width": 90,
    "height": 103,
    "left": 94,
    "top": 441
  },
  "googlePixel524_rectangle1701": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 7
    },
    "shadowRadius": 16,
    "width": 90,
    "height": 103,
    "left": 210,
    "top": 441
  },
  "googlePixel524_ellipse295": {
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
    "width": 9,
    "height": 9,
    "left": 192,
    "top": 592
  },
  "googlePixel524_ellipse297": {
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
    "width": 9,
    "height": 9,
    "left": 177,
    "top": 592
  },
  "googlePixel524_ellipse300": {
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
    "width": 9,
    "height": 9,
    "left": 147,
    "top": 592
  },
  "googlePixel524_ellipse298": {
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
    "width": 9,
    "height": 9,
    "left": 162,
    "top": 592
  },
  "googlePixel524_ellipse301": {
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
    "width": 9,
    "height": 9,
    "left": 132,
    "top": 592
  },
  "googlePixel524_ellipse296": {
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
    "width": 9,
    "height": 9,
    "left": 207,
    "top": 592
  },
  "googlePixel524_ellipse302": {
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
    "width": 9,
    "height": 9,
    "left": 237,
    "top": 592
  },
  "googlePixel524_ellipse299": {
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
    "width": 9,
    "height": 9,
    "left": 222,
    "top": 592
  },
  "googlePixel524_ellipse303": {
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
    "width": 9,
    "height": 9,
    "left": 252,
    "top": 592
  },
  "googlePixel524_rightArrow1e031c448": {
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
    "width": 10,
    "height": 17.03,
    "left": 362.5,
    "top": 436
  },
  "googlePixel524_rightArrow1e031c448_group255a403c04b": {
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
    "width": 10,
    "height": 17.03,
    "left": 0,
    "top": 0
  },
  "googlePixel524_rightArrow1e031c448_group255a403c04b_path52485a6dc66": {
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
    "width": 10,
    "height": 17.03,
    "left": 0,
    "top": 0
  },
  "googlePixel524_rightArrow1": {
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
    "width": 10,
    "height": 17.03,
    "left": 24.5,
    "top": 436
  },
  "googlePixel524_rightArrow1_group255": {
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
    "width": 10,
    "height": 17.03,
    "left": 0,
    "top": 0
  },
  "googlePixel524_rightArrow1_group255_path524": {
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
    "width": 10,
    "height": 17.03,
    "left": 0,
    "top": 0
  }
});