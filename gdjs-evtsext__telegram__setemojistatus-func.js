
if (typeof gdjs.evtsExt__Telegram__SetEmojiStatus !== "undefined") {
  gdjs.evtsExt__Telegram__SetEmojiStatus.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Telegram__SetEmojiStatus = {};


gdjs.evtsExt__Telegram__SetEmojiStatus.userFunc0x9e56b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const id = eventsFunctionContext.getArgument("id");

function SetEmodziStatus() {
  if (window.tg.setEmojiStatus.isAvailable()) {
    // Set for unlimited period of time.
    window.tg.setEmojiStatus(id);

    // Set for 1 day.
    //await window.tg.setEmojiStatus('5361800828313167608', 86400);
  }
}

if (window.tg.requestEmojiStatusAccess.isAvailable()) {
  window.tg.requestEmojiStatusAccess().then(SetEmodziStatus)
}
};
gdjs.evtsExt__Telegram__SetEmojiStatus.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Telegram__SetEmojiStatus.userFunc0x9e56b8(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}}

}


};

gdjs.evtsExt__Telegram__SetEmojiStatus.func = function(runtimeScene, id, parentEventsFunctionContext) {
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
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Telegram__SetEmojiStatus.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__Telegram__SetEmojiStatus.registeredGdjsCallbacks = [];