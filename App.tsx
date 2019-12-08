import React, {useEffect} from 'react';
import {View, Text, ViewStyle, TextStyle, FlatList, Alert, Button} from 'react-native';
import PullToRefresh from "./src/widget/PullToRefresh";
import Header from "./src/widget/Header";
import PullToRefreshLayout from "./src/widget/PullToRefreshLayout";
import CollapsibleText from "./src/widget/CollapsibleText";


interface State {
    refreshing: boolean;
    data: DataItem[];
    displayShuoming: string,
    btnShuoming: string
}


interface DataItem {
    key: string;
    text: string;
    on: boolean;
}

const data: DataItem[] = [];
for (let i = 0; i < 500; i++) {
    data.push({
        key: `data-${i}`,
        text: `number: ${i}`,
        on: false,
    });
}

var PK_GGVIEW = 'pkggview';

function ItemView({children, index}: { children: React.ReactElement, index: number }) {
    useEffect(function () {
        console.log('====== item loaded = ' + index);
    }, []);
    return children;
}

export default class App extends React.Component<{}, State> {


    constructor(props: any) {
        super(props);
    }


    render() {
        return (<View style={pageStyle.container}>

            <CollapsibleText numberOfLines={1}>

                tadofjwoejfowejfowefjewofjwoejfiowejfowejfowejfowejfqwdqpjoijfwofjqiofjwiofjweofjwofj

            </CollapsibleText>
        </View>)
    }


    // 测试 FlatList 嵌套
    flatListTest() {
        return (
            <PullToRefresh
                HeaderComponent={Header}
                headerHeight={100}
                refreshTriggerHeight={100}
                refreshingHoldHeight={100}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                style={{flex: 1, backgroundColor: 'red'}}
            >
                <FlatList
                    style={{flex: 1}}
                    data={this.state.data}
                    scrollEventThrottle={20}
                    pinchGestureEnabled={false}
                    renderItem={({item, index}: { item: DataItem; index: number }) => {
                        return this._renderItem(item, index, 'FlatList');
                    }}
                />
            </PullToRefresh>
        );
    }

    state = {
        data: data.slice(0, 50),
        refreshing: false,
        displayShuoming: 'none',
        btnShuoming: 'v'

    };

    _renderItem = (item: DataItem, index: number, prefix = '') => {
        const conStyles = [pageStyle.item];
        if (index % 2 === 1) {
            conStyles.push(pageStyle.itemOdd);
        }
        return (
            <ItemView key={index} index={index}>
                <View style={conStyles}>
                    <Text onPress={() => {
                        Alert.alert('click', item.text);
                    }} style={pageStyle.itemText}>in page {prefix} {item.text}</Text>
                </View>
            </ItemView>
        );
    };

    onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    refreshing: false,
                    data: prevState.data.concat(data.slice(prevState.data.length, prevState.data.length + 50)),
                };
            });
        }, 3000);
    };


}


const
    pageStyle = {
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
            padding: 0,
        } as ViewStyle,
        listCon: {
            flex: 1,
            backgroundColor: 'blue',
        } as ViewStyle,
        item: {
            flexDirection: 'row',
            height: 80,
            alignItems: 'center',
            paddingLeft: 15,
            backgroundColor: 'pink',
        } as ViewStyle,
        itemOdd: {
            backgroundColor: 'green',
        },
        itemText: {
            color: '#fff',
            textAlign: 'left',
            fontSize: 28,
        } as TextStyle,
        expandText: {
            color: 'blue',
            marginTop: 0
        }
    };

