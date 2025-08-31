gdjs.ProverkiCode = {};
gdjs.ProverkiCode.localVariables = [];
gdjs.ProverkiCode.GDOsagoObjects1= [];
gdjs.ProverkiCode.GDOsagoObjects2= [];
gdjs.ProverkiCode.GDOsagoObjects3= [];
gdjs.ProverkiCode.GDTechObjects1= [];
gdjs.ProverkiCode.GDTechObjects2= [];
gdjs.ProverkiCode.GDTechObjects3= [];
gdjs.ProverkiCode.GDRKLObjects1= [];
gdjs.ProverkiCode.GDRKLObjects2= [];
gdjs.ProverkiCode.GDRKLObjects3= [];
gdjs.ProverkiCode.GDOTTSObjects1= [];
gdjs.ProverkiCode.GDOTTSObjects2= [];
gdjs.ProverkiCode.GDOTTSObjects3= [];
gdjs.ProverkiCode.GDYellowButtonObjects1= [];
gdjs.ProverkiCode.GDYellowButtonObjects2= [];
gdjs.ProverkiCode.GDYellowButtonObjects3= [];
gdjs.ProverkiCode.GDGreyButtonObjects1= [];
gdjs.ProverkiCode.GDGreyButtonObjects2= [];
gdjs.ProverkiCode.GDGreyButtonObjects3= [];
gdjs.ProverkiCode.GDproverObjects1= [];
gdjs.ProverkiCode.GDproverObjects2= [];
gdjs.ProverkiCode.GDproverObjects3= [];
gdjs.ProverkiCode.GDin_9595VUObjects1= [];
gdjs.ProverkiCode.GDin_9595VUObjects2= [];
gdjs.ProverkiCode.GDin_9595VUObjects3= [];
gdjs.ProverkiCode.GDNewPanelSpriteObjects1= [];
gdjs.ProverkiCode.GDNewPanelSpriteObjects2= [];
gdjs.ProverkiCode.GDNewPanelSpriteObjects3= [];
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects3= [];
gdjs.ProverkiCode.GDNewPanelSprite2Objects1= [];
gdjs.ProverkiCode.GDNewPanelSprite2Objects2= [];
gdjs.ProverkiCode.GDNewPanelSprite2Objects3= [];


gdjs.ProverkiCode.asyncCallback19734348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ProverkiCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Potracheno", false);
}gdjs.ProverkiCode.localVariables.length = 0;
}
gdjs.ProverkiCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ProverkiCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(43200), (runtimeScene) => (gdjs.ProverkiCode.asyncCallback19734348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ProverkiCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Osago"), gdjs.ProverkiCode.GDOsagoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDOsagoObjects2.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDOsagoObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDOsagoObjects2[k] = gdjs.ProverkiCode.GDOsagoObjects2[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDOsagoObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://nsis.ru/products/osago/check/", null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RKL"), gdjs.ProverkiCode.GDRKLObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDRKLObjects2.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDRKLObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDRKLObjects2[k] = gdjs.ProverkiCode.GDRKLObjects2[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDRKLObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://мвд.рф/rkl?ysclid=m95kibl5zh33513056", null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tech"), gdjs.ProverkiCode.GDTechObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDTechObjects2.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDTechObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDTechObjects2[k] = gdjs.ProverkiCode.GDTechObjects2[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDTechObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://rosstrah.ru/proverka-to/?ysclid=m95kk2036y859175542", null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.ProverkiCode.GDYellowButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDYellowButtonObjects2.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDYellowButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDYellowButtonObjects2[k] = gdjs.ProverkiCode.GDYellowButtonObjects2[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDYellowButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://www.rst.gov.ru/portal/gost/home/activity/compliance/evaluationcompliance/AcknowledgementCorrespondence/vehicletypeapproval018?ysclid=mda089m0rx632497008", null);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.ProverkiCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ProverkiCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("prover"), gdjs.ProverkiCode.GDproverObjects1);
{for(var i = 0, len = gdjs.ProverkiCode.GDproverObjects1.length ;i < len;++i) {
    gdjs.ProverkiCode.GDproverObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.ProverkiCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ProverkiCode.GDGreyButtonObjects1.length;i<l;++i) {
    if ( gdjs.ProverkiCode.GDGreyButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ProverkiCode.GDGreyButtonObjects1[k] = gdjs.ProverkiCode.GDGreyButtonObjects1[i];
        ++k;
    }
}
gdjs.ProverkiCode.GDGreyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


{


gdjs.ProverkiCode.eventsList1(runtimeScene);
}


};

gdjs.ProverkiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ProverkiCode.GDOsagoObjects1.length = 0;
gdjs.ProverkiCode.GDOsagoObjects2.length = 0;
gdjs.ProverkiCode.GDOsagoObjects3.length = 0;
gdjs.ProverkiCode.GDTechObjects1.length = 0;
gdjs.ProverkiCode.GDTechObjects2.length = 0;
gdjs.ProverkiCode.GDTechObjects3.length = 0;
gdjs.ProverkiCode.GDRKLObjects1.length = 0;
gdjs.ProverkiCode.GDRKLObjects2.length = 0;
gdjs.ProverkiCode.GDRKLObjects3.length = 0;
gdjs.ProverkiCode.GDOTTSObjects1.length = 0;
gdjs.ProverkiCode.GDOTTSObjects2.length = 0;
gdjs.ProverkiCode.GDOTTSObjects3.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects1.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects2.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects3.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects1.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects2.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects3.length = 0;
gdjs.ProverkiCode.GDproverObjects1.length = 0;
gdjs.ProverkiCode.GDproverObjects2.length = 0;
gdjs.ProverkiCode.GDproverObjects3.length = 0;
gdjs.ProverkiCode.GDin_9595VUObjects1.length = 0;
gdjs.ProverkiCode.GDin_9595VUObjects2.length = 0;
gdjs.ProverkiCode.GDin_9595VUObjects3.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects3.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects3.length = 0;

gdjs.ProverkiCode.eventsList2(runtimeScene);
gdjs.ProverkiCode.GDOsagoObjects1.length = 0;
gdjs.ProverkiCode.GDOsagoObjects2.length = 0;
gdjs.ProverkiCode.GDOsagoObjects3.length = 0;
gdjs.ProverkiCode.GDTechObjects1.length = 0;
gdjs.ProverkiCode.GDTechObjects2.length = 0;
gdjs.ProverkiCode.GDTechObjects3.length = 0;
gdjs.ProverkiCode.GDRKLObjects1.length = 0;
gdjs.ProverkiCode.GDRKLObjects2.length = 0;
gdjs.ProverkiCode.GDRKLObjects3.length = 0;
gdjs.ProverkiCode.GDOTTSObjects1.length = 0;
gdjs.ProverkiCode.GDOTTSObjects2.length = 0;
gdjs.ProverkiCode.GDOTTSObjects3.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects1.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects2.length = 0;
gdjs.ProverkiCode.GDYellowButtonObjects3.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects1.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects2.length = 0;
gdjs.ProverkiCode.GDGreyButtonObjects3.length = 0;
gdjs.ProverkiCode.GDproverObjects1.length = 0;
gdjs.ProverkiCode.GDproverObjects2.length = 0;
gdjs.ProverkiCode.GDproverObjects3.length = 0;
gdjs.ProverkiCode.GDin_9595VUObjects1.length = 0;
gdjs.ProverkiCode.GDin_9595VUObjects2.length = 0;
gdjs.ProverkiCode.GDin_9595VUObjects3.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.ProverkiCode.GD_951064_951080_951088_951086_951090_9510722Objects3.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.ProverkiCode.GDNewPanelSprite2Objects3.length = 0;


return;

}

gdjs['ProverkiCode'] = gdjs.ProverkiCode;
