import * as React from "react";
import {View, Text, Button} from "react-native";

export default class SplashScreen extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<View>
            <Text>
                RNDemo
            </Text>
            <Button title={'点击进入主页'} onPress={() => {
                console.log('点击进入主页')
            }}/>
        </View>);
    }

}
