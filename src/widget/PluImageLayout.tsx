/**
 * Created by lijie on 16/7/1.
 */


'use strict';

// var React = require('React');
// var ReactNative = require('ReactNative');
// var requireNativeComponent = require('requireNativeComponent');


import React, {createRef} from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';
import {NativeModules, findNodeHandle} from 'react-native';

const {UIManager} = NativeModules;

const PK_REF_KEY = "pk_ref_key";

export default class PluImageLayout extends React.Component {

    constructor(props: any) {
        super(props)
        createRef()

    }

    // propTypes: {
    //     ...View.propTypes,
    // }
    //
    shellUpward(distance: number) {
        UIManager.dispatchViewManagerCommand(
            this.getPluImageHandle(),
            1,
            [distance]
        );
    }

    loadingAnim() {
        UIManager.dispatchViewManagerCommand(
            this.getPluImageHandle(),
            2,
            null
        );
    }

    resetShell(distance: number, maxLength: number, maxTime: number) {
        UIManager.dispatchViewManagerCommand(
            this.getPluImageHandle(),
            3,
            [distance, maxLength, maxTime]
        );
    }


    render() {
        return (

            <RCTPluImageLayout
                style={{width: 38, height: 70, marginRight: 10, marginTop: -20}}
                ref={PK_REF_KEY}>
            </RCTPluImageLayout>
        )
    }


    getPluImageHandle(): number {
        return 1
        // return findNodeHandle(this.refs[PK_REF_KEY])

    }
}

interface Interface {

}




var RCTPluImageLayout = requireNativeComponent('AndroidPluImageLayout',);

// module.exports = PluImageLayout;
