
if (typeof gdjs.evtsExt__Telegram__openTelegramLink !== "undefined") {
  gdjs.evtsExt__Telegram__openTelegramLink.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Telegram__openTelegramLink = {};


gdjs.evtsExt__Telegram__openTelegramLink.userFunc0x9e56b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const link = eventsFunctionContext.getArgument("link");

if (window.tg.openTelegramLink.isAvailable()) {
    window.tg.openTelegramLink(link);
}

};
gdjs.evtsExt__Telegram__openTelegramLink.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Telegram__openTelegramLink.userFunc0x9e56b8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Telegram__openTelegramLink.func = function(runtimeScene, link, parentEventsFunctionContext) {
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
if (argName === "link") return link;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Telegram__openTelegramLink.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Telegram__openTelegramLink.registeredGdjsCallbacks = [];