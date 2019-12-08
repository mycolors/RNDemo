package com.rndemo;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.rndemo.module.PluImageLayout;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by lijie on 16/6/27.
 */
public class AppReactPackage implements ReactPackage {

    //加入供RN层调用库的Module
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }


    //加入供RN层引用View/ViewGroup的Manager.
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> result = new ArrayList<ViewManager>();
        result.add(new PluImageLayout());
        return result;
    }
}
