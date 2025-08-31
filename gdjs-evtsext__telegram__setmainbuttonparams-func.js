
if (typeof gdjs.evtsExt__Telegram__SetMainButtonParams !== "undefined") {
  gdjs.evtsExt__Telegram__SetMainButtonParams.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Telegram__SetMainButtonParams = {};


gdjs.evtsExt__Telegram__SetMainButtonParams.userFunc0xb58798 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const text = eventsFunctionContext.getArgument("text");
const backgroundColor = eventsFunctionContext.getArgument("backgroundColor");
const hasShineEffect = eventsFunctionContext.getArgument("hasShineEffect");
const isEnabled = eventsFunctionContext.getArgument("isEnabled");
const isLoaderVisible = eventsFunctionContext.getArgument("isLoaderVisible");
const isVisible = eventsFunctionContext.getArgument("isVisible");
const textColor = eventsFunctionContext.getArgument("textColor");

function setParams() {
  if (window.tg.mainButton.setParams.isAvailable()) {
    window.tg.mainButton.setParams({
      backgroundColor: backgroundColor,
      hasShineEffect: hasShineEffect,
      isEnabled: isEnabled,
      isLoaderVisible: isLoaderVisible,
      isVisible: isVisible,
      text: text,
      textColor: textColor
    });
  }
}

setParams()
setParams()
};
gdjs.evtsExt__Telegram__SetMainButtonParams.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Telegram__SetMainButtonParams.userFunc0xb58798(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Telegram__SetMainButtonParams.func = function(runtimeScene, text, backgroundColor, hasShineEffect, isEnabled, isLoaderVisible, isVisible, textColor, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Telegram"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Telegram"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "text") return text;
if (argName === "backgroundColor") return backgroundColor;
if (argName === "hasShineEffect") return hasShineEffect;
if (argName === "isEnabled") return isEnabled;
if (argName === "isLoaderVisible") return isLoaderVisible;
if (argName === "isVisible") return isVisible;
if (argName === "textColor") return textColor;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Telegram__SetMainButtonParams.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Telegram__SetMainButtonParams.registeredGdjsCallbacks = [];