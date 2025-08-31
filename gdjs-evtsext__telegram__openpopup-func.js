
if (typeof gdjs.evtsExt__Telegram__OpenPopup !== "undefined") {
  gdjs.evtsExt__Telegram__OpenPopup.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Telegram__OpenPopup = {};


gdjs.evtsExt__Telegram__OpenPopup.userFunc0x9e56b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const title = eventsFunctionContext.getArgument("title");
const message = eventsFunctionContext.getArgument("message");
const button_type = eventsFunctionContext.getArgument("button_type");
const button_text = eventsFunctionContext.getArgument("button_text");

if (window.tg.popup.open.isAvailable()) {
  // popup.isOpened() -> false
  const promise = window.tg.popup.open({
    title: title,
    message: message,
    buttons: [{ id: 'my-id', type: button_type, text: button_text }],
  });
  // popup.isOpened() -> true
  //const buttonId = await promise;
  // popup.isOpened() -> false
}
};
gdjs.evtsExt__Telegram__OpenPopup.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Telegram__OpenPopup.userFunc0x9e56b8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Telegram__OpenPopup.func = function(runtimeScene, title, message, button_type, button_text, parentEventsFunctionContext) {
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
if (argName === "title") return title;
if (argName === "message") return message;
if (argName === "button_type") return button_type;
if (argName === "button_text") return button_text;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Telegram__OpenPopup.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Telegram__OpenPopup.registeredGdjsCallbacks = [];