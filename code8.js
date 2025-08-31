gdjs.PodderCode = {};
gdjs.PodderCode.localVariables = [];
gdjs.PodderCode.GDProekt_9595TelObjects1= [];
gdjs.PodderCode.GDProekt_9595TelObjects2= [];
gdjs.PodderCode.GDProekt_9595TelObjects3= [];
gdjs.PodderCode.GDGAI_9595RossiiObjects1= [];
gdjs.PodderCode.GDGAI_9595RossiiObjects2= [];
gdjs.PodderCode.GDGAI_9595RossiiObjects3= [];
gdjs.PodderCode.GDSaitObjects1= [];
gdjs.PodderCode.GDSaitObjects2= [];
gdjs.PodderCode.GDSaitObjects3= [];
gdjs.PodderCode.GDPodderObjects1= [];
gdjs.PodderCode.GDPodderObjects2= [];
gdjs.PodderCode.GDPodderObjects3= [];
gdjs.PodderCode.GDNewPanelSprite3Objects1= [];
gdjs.PodderCode.GDNewPanelSprite3Objects2= [];
gdjs.PodderCode.GDNewPanelSprite3Objects3= [];
gdjs.PodderCode.GDGreenButtonObjects1= [];
gdjs.PodderCode.GDGreenButtonObjects2= [];
gdjs.PodderCode.GDGreenButtonObjects3= [];
gdjs.PodderCode.GDNewPanelSpriteObjects1= [];
gdjs.PodderCode.GDNewPanelSpriteObjects2= [];
gdjs.PodderCode.GDNewPanelSpriteObjects3= [];
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects3= [];
gdjs.PodderCode.GDNewPanelSprite2Objects1= [];
gdjs.PodderCode.GDNewPanelSprite2Objects2= [];
gdjs.PodderCode.GDNewPanelSprite2Objects3= [];


gdjs.PodderCode.asyncCallback19845868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.PodderCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Potracheno", false);
}gdjs.PodderCode.localVariables.length = 0;
}
gdjs.PodderCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.PodderCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(43200), (runtimeScene) => (gdjs.PodderCode.asyncCallback19845868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDProekt_95959595TelObjects2Objects = Hashtable.newFrom({"Proekt_Tel": gdjs.PodderCode.GDProekt_9595TelObjects2});
gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDGAI_95959595RossiiObjects2Objects = Hashtable.newFrom({"GAI_Rossii": gdjs.PodderCode.GDGAI_9595RossiiObjects2});
gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDSaitObjects2Objects = Hashtable.newFrom({"Sait": gdjs.PodderCode.GDSaitObjects2});
gdjs.PodderCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Proekt_Tel"), gdjs.PodderCode.GDProekt_9595TelObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDProekt_95959595TelObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://t.me/+YyeTvHxhpyBjZmVi", null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GAI_Rossii"), gdjs.PodderCode.GDGAI_9595RossiiObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDGAI_95959595RossiiObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://t.me/+NsQGIMHT2yk5MDk6", null);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sait"), gdjs.PodderCode.GDSaitObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PodderCode.mapOfGDgdjs_9546PodderCode_9546GDSaitObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Telegram__openLink.func(runtimeScene, "https://webtid.ru/gai", null);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.PodderCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PodderCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.PodderCode.GDNewPanelSprite3Objects1);
{for(var i = 0, len = gdjs.PodderCode.GDNewPanelSprite3Objects1.length ;i < len;++i) {
    gdjs.PodderCode.GDNewPanelSprite3Objects1[i].getBehavior("Opacity").setOpacity(90);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.PodderCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PodderCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.PodderCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.PodderCode.GDGreenButtonObjects1[k] = gdjs.PodderCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.PodderCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


{


gdjs.PodderCode.eventsList1(runtimeScene);
}


};

gdjs.PodderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PodderCode.GDProekt_9595TelObjects1.length = 0;
gdjs.PodderCode.GDProekt_9595TelObjects2.length = 0;
gdjs.PodderCode.GDProekt_9595TelObjects3.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects1.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects2.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects3.length = 0;
gdjs.PodderCode.GDSaitObjects1.length = 0;
gdjs.PodderCode.GDSaitObjects2.length = 0;
gdjs.PodderCode.GDSaitObjects3.length = 0;
gdjs.PodderCode.GDPodderObjects1.length = 0;
gdjs.PodderCode.GDPodderObjects2.length = 0;
gdjs.PodderCode.GDPodderObjects3.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects3.length = 0;
gdjs.PodderCode.GDGreenButtonObjects1.length = 0;
gdjs.PodderCode.GDGreenButtonObjects2.length = 0;
gdjs.PodderCode.GDGreenButtonObjects3.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects3.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects3.length = 0;

gdjs.PodderCode.eventsList2(runtimeScene);
gdjs.PodderCode.GDProekt_9595TelObjects1.length = 0;
gdjs.PodderCode.GDProekt_9595TelObjects2.length = 0;
gdjs.PodderCode.GDProekt_9595TelObjects3.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects1.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects2.length = 0;
gdjs.PodderCode.GDGAI_9595RossiiObjects3.length = 0;
gdjs.PodderCode.GDSaitObjects1.length = 0;
gdjs.PodderCode.GDSaitObjects2.length = 0;
gdjs.PodderCode.GDSaitObjects3.length = 0;
gdjs.PodderCode.GDPodderObjects1.length = 0;
gdjs.PodderCode.GDPodderObjects2.length = 0;
gdjs.PodderCode.GDPodderObjects3.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite3Objects3.length = 0;
gdjs.PodderCode.GDGreenButtonObjects1.length = 0;
gdjs.PodderCode.GDGreenButtonObjects2.length = 0;
gdjs.PodderCode.GDGreenButtonObjects3.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.PodderCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.PodderCode.GD_951064_951080_951088_951086_951090_9510722Objects3.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.PodderCode.GDNewPanelSprite2Objects3.length = 0;


return;

}

gdjs['PodderCode'] = gdjs.PodderCode;
