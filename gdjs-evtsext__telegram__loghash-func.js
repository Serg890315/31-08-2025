
if (typeof gdjs.evtsExt__Telegram__LogHash !== "undefined") {
  gdjs.evtsExt__Telegram__LogHash.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Telegram__LogHash = {};


gdjs.evtsExt__Telegram__LogHash.userFunc0x10c17e8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const hash = window.tg.retrieveLaunchParams();
console.log(hash);
eventsFunctionContext.returnValue = JSON.stringify(hash);
};
gdjs.evtsExt__Telegram__LogHash.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Telegram__LogHash.userFunc0x10c17e8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Telegram__LogHash.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Telegram__LogHash.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Telegram__LogHash.registeredGdjsCallbacks = [];