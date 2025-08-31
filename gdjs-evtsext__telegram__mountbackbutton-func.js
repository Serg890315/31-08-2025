
if (typeof gdjs.evtsExt__Telegram__MountBackButton !== "undefined") {
  gdjs.evtsExt__Telegram__MountBackButton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Telegram__MountBackButton = {};


gdjs.evtsExt__Telegram__MountBackButton.userFunc0xb64e30 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (window.tg.backButton.mount.isAvailable()) {
  window.tg.backButton.mount();
}

if (window.tg.backButton.onClick.isAvailable()) {
  function onclick() {
    window.tg.backButtonClicked = true
  }

  function offclick() {
    window.tg.backButtonClicked = false
  }

  //const offClick = window.tg.backButton.onClick(listener);
  //offClick();
  // or
  window.tg.backButton.onClick(onclick);
  window.tg.backButton.offClick(offclick);
}
};
gdjs.evtsExt__Telegram__MountBackButton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Telegram__MountBackButton.userFunc0xb64e30(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}}

}


};

gdjs.evtsExt__Telegram__MountBackButton.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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


gdjs.evtsExt__Telegram__MountBackButton.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__Telegram__MountBackButton.registeredGdjsCallbacks = [];