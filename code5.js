gdjs.KvalifCode = {};
gdjs.KvalifCode.localVariables = [];
gdjs.KvalifCode.GDNewTiledSpriteObjects1= [];
gdjs.KvalifCode.GDNewTiledSpriteObjects2= [];
gdjs.KvalifCode.GDKvalObjects1= [];
gdjs.KvalifCode.GDKvalObjects2= [];
gdjs.KvalifCode.GDAny_9595textObjects1= [];
gdjs.KvalifCode.GDAny_9595textObjects2= [];
gdjs.KvalifCode.GDNewPanelSprite3Objects1= [];
gdjs.KvalifCode.GDNewPanelSprite3Objects2= [];
gdjs.KvalifCode.GDNextObjects1= [];
gdjs.KvalifCode.GDNextObjects2= [];
gdjs.KvalifCode.GDGreenButtonObjects1= [];
gdjs.KvalifCode.GDGreenButtonObjects2= [];
gdjs.KvalifCode.GDRedButtonWithShadowObjects1= [];
gdjs.KvalifCode.GDRedButtonWithShadowObjects2= [];
gdjs.KvalifCode.GDprav_9595kval1Objects1= [];
gdjs.KvalifCode.GDprav_9595kval1Objects2= [];
gdjs.KvalifCode.GDprav_9595kval2Objects1= [];
gdjs.KvalifCode.GDprav_9595kval2Objects2= [];
gdjs.KvalifCode.GDprav_9595kval3Objects1= [];
gdjs.KvalifCode.GDprav_9595kval3Objects2= [];
gdjs.KvalifCode.GDprav_9595kval4Objects1= [];
gdjs.KvalifCode.GDprav_9595kval4Objects2= [];
gdjs.KvalifCode.GDPRAVKVAL3Objects1= [];
gdjs.KvalifCode.GDPRAVKVAL3Objects2= [];
gdjs.KvalifCode.GDNewPanelSpriteObjects1= [];
gdjs.KvalifCode.GDNewPanelSpriteObjects2= [];
gdjs.KvalifCode.GD_951064_951080_951088_951086_951090_9510722Objects1= [];
gdjs.KvalifCode.GD_951064_951080_951088_951086_951090_9510722Objects2= [];
gdjs.KvalifCode.GDNewPanelSprite2Objects1= [];
gdjs.KvalifCode.GDNewPanelSprite2Objects2= [];


gdjs.KvalifCode.asyncCallback19685860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Potracheno", false);
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(43200), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19685860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19688396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Any_text"), gdjs.KvalifCode.GDAny_9595textObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);

{for(var i = 0, len = gdjs.KvalifCode.GDAny_9595textObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDAny_9595textObjects2[i].getBehavior("Text").setText("Постановление о лишении по иным статьям КоАП РФ (КРОМЕ 12.8, 12.26) НЕ ИСПОЛНЕНО(срок лишения не истёк)\n\n     Если трезв - ч.2 ст.12.7 КоАП РФ \n     Установлено опьянение -  ч. 3 ст.12.8 или ч.2 ст.12.26 КоАП РФ \n\nПостановление о лишении по иным статьям КоАП РФ (кроме 12.8, 12.26) ИСПОЛНЕНО (срок лишения истёк), но не прошел 1 год с даты исполнения и не выполнены условия ч.4.1 ст.32.6 КоАП РФ(ВУ не вернул) \n\n     Если трезв - ч.1 ст.12.7 КоАП РФ \n     Установлено опьянение -  ч. 3 ст.12.8 или ч.2 ст.12.26 КоАП РФ\n\nПостановление о лишении по иным статьям КоАП РФ (кроме 12.8, 12.26) ИСПОЛНЕНО(срок лишения истёк), ПРОШЕЛ 1 ГОД с даты исполнения, но не выполнены условия ч.4.1 ст.32.6 КоАП РФ(ВУ не вернул) \n\n     Если трезв - ч. 2 ст.12.3 КоАП РФ \n     Установлено опьянение - ч. 1 ст.12.8 или ч.1 ст.12.26 КоАП РФ + ч.2 ст.12.3 КоАП РФ");
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("Пьянка", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDAny_9595textObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDAny_9595textObjects2[i].setCharacterSize(24);
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
for (const obj of gdjs.KvalifCode.GDNextObjects1) asyncObjectsList.addObject("Next", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19688396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19692628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Any_text"), gdjs.KvalifCode.GDAny_9595textObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);

{for(var i = 0, len = gdjs.KvalifCode.GDAny_9595textObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDAny_9595textObjects2[i].getBehavior("Text").setText("Постановление (приговор) по ст. 12.8, 12.26 КоАП РФ, ст.264.1, ч.2,4,6 ст.264 УК РФ, в случае лишения права НЕ ИСПОЛНЕНО (срок лишения не истёк) \n\n     Если трезв - ч.2 ст.12.7 КоАП РФ \n     Установлено опьянение - ст.264.1 УК РФ + ч.2 ст.12.7 КоАП РФ \n\nПостановление по ст. 12.8, 12.26 КоАП РФ, ИСПОЛНЕНО (срок лишения истёк), но не прошел 1 год с даты исполнения и не выполнены условия ч.4.1 ст.32.6 КоАП РФ (ВУ не вернул) \n\n     Если трезв - ч.1 ст.12.7 КоАП РФ ст.264.1 УК РФ + ч.1ст.12.7 КоАП РФ\n     Установлено опьянение - ст.264.1 УК РФ + ч.1 ст.12.7 КоАП РФ\n\nПостановление по ст. 12.8, 12.26 КоАП РФ, ИСПОЛНЕНО (срок лишения истёк), ПРОШЕЛ 1 ГОД с даты исполнения, но не выполнены условия ч.4.1 ст.32.6 КоАП РФ (ВУ не вернул)\n\n     Если трезв -   ч. 2 ст.12.3 КоАП РФ\n     Установлено опьянение - ч. 1 ст.12.8 или ч.1 ст.12.26 КоАП РФ + ч.2 ст.12.3 КоАП РФ");
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("Не пьянка", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
for (const obj of gdjs.KvalifCode.GDNextObjects1) asyncObjectsList.addObject("Next", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19692628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19695084 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);
gdjs.copyArray(runtimeScene.getObjects("PRAVKVAL3"), gdjs.KvalifCode.GDPRAVKVAL3Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval1"), gdjs.KvalifCode.GDprav_9595kval1Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval2"), gdjs.KvalifCode.GDprav_9595kval2Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval4"), gdjs.KvalifCode.GDprav_9595kval4Objects2);
{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval1Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("СТР.2", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval4Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval4Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDPRAVKVAL3Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDPRAVKVAL3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval2Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval2Objects2[i].hide();
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19695084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19696908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);

gdjs.copyArray(runtimeScene.getObjects("prav_kval1"), gdjs.KvalifCode.GDprav_9595kval1Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval2"), gdjs.KvalifCode.GDprav_9595kval2Objects2);
{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("СТР.3", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval1Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval1Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval2Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(1)).setNumber(2);
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
for (const obj of gdjs.KvalifCode.GDNextObjects1) asyncObjectsList.addObject("Next", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19696908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19698532 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);

gdjs.copyArray(runtimeScene.getObjects("PRAVKVAL3"), gdjs.KvalifCode.GDPRAVKVAL3Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval2"), gdjs.KvalifCode.GDprav_9595kval2Objects2);
{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("СТР.4", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval2Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDPRAVKVAL3Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDPRAVKVAL3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(1)).setNumber(3);
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
for (const obj of gdjs.KvalifCode.GDNextObjects1) asyncObjectsList.addObject("Next", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19698532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19700236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);

gdjs.copyArray(runtimeScene.getObjects("PRAVKVAL3"), gdjs.KvalifCode.GDPRAVKVAL3Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval4"), gdjs.KvalifCode.GDprav_9595kval4Objects2);
{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("СТР.1", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDPRAVKVAL3Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDPRAVKVAL3Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval4Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval4Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(1)).setNumber(4);
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
for (const obj of gdjs.KvalifCode.GDNextObjects1) asyncObjectsList.addObject("Next", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19700236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.asyncCallback19701916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.KvalifCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Next"), gdjs.KvalifCode.GDNextObjects2);

gdjs.copyArray(runtimeScene.getObjects("prav_kval1"), gdjs.KvalifCode.GDprav_9595kval1Objects2);
gdjs.copyArray(runtimeScene.getObjects("prav_kval4"), gdjs.KvalifCode.GDprav_9595kval4Objects2);
{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].SetLabelText("СТР.2", null);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval4Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval4Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval1Objects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNextObjects2.length ;i < len;++i) {
    gdjs.KvalifCode.GDNextObjects2[i].returnVariable(gdjs.KvalifCode.GDNextObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}gdjs.KvalifCode.localVariables.length = 0;
}
gdjs.KvalifCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.KvalifCode.localVariables);
for (const obj of gdjs.KvalifCode.GDNextObjects1) asyncObjectsList.addObject("Next", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.KvalifCode.asyncCallback19701916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.KvalifCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite3"), gdjs.KvalifCode.GDNewPanelSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.KvalifCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("PRAVKVAL3"), gdjs.KvalifCode.GDPRAVKVAL3Objects1);
gdjs.copyArray(runtimeScene.getObjects("prav_kval1"), gdjs.KvalifCode.GDprav_9595kval1Objects1);
gdjs.copyArray(runtimeScene.getObjects("prav_kval2"), gdjs.KvalifCode.GDprav_9595kval2Objects1);
gdjs.copyArray(runtimeScene.getObjects("prav_kval4"), gdjs.KvalifCode.GDprav_9595kval4Objects1);
{for(var i = 0, len = gdjs.KvalifCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.KvalifCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(25);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDNewPanelSprite3Objects1.length ;i < len;++i) {
    gdjs.KvalifCode.GDNewPanelSprite3Objects1[i].getBehavior("Opacity").setOpacity(20);
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval1Objects1.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval2Objects1.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDPRAVKVAL3Objects1.length ;i < len;++i) {
    gdjs.KvalifCode.GDPRAVKVAL3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.KvalifCode.GDprav_9595kval4Objects1.length ;i < len;++i) {
    gdjs.KvalifCode.GDprav_9595kval4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].getVariableNumber(gdjs.KvalifCode.GDNextObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].getVariableNumber(gdjs.KvalifCode.GDNextObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.KvalifCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDGreenButtonObjects1[k] = gdjs.KvalifCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fabula", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.KvalifCode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDRedButtonWithShadowObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDRedButtonWithShadowObjects1[k] = gdjs.KvalifCode.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDRedButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19695012);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].getVariableNumber(gdjs.KvalifCode.GDNextObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19696836);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].getVariableNumber(gdjs.KvalifCode.GDNextObjects1[i].getVariables().getFromIndex(1)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19698236);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].getVariableNumber(gdjs.KvalifCode.GDNextObjects1[i].getVariables().getFromIndex(1)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19700164);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.KvalifCode.GDNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.KvalifCode.GDNextObjects1.length;i<l;++i) {
    if ( gdjs.KvalifCode.GDNextObjects1[i].getVariableNumber(gdjs.KvalifCode.GDNextObjects1[i].getVariables().getFromIndex(1)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.KvalifCode.GDNextObjects1[k] = gdjs.KvalifCode.GDNextObjects1[i];
        ++k;
    }
}
gdjs.KvalifCode.GDNextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19701620);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.KvalifCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.KvalifCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.KvalifCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.KvalifCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.KvalifCode.GDKvalObjects1.length = 0;
gdjs.KvalifCode.GDKvalObjects2.length = 0;
gdjs.KvalifCode.GDAny_9595textObjects1.length = 0;
gdjs.KvalifCode.GDAny_9595textObjects2.length = 0;
gdjs.KvalifCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.KvalifCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.KvalifCode.GDNextObjects1.length = 0;
gdjs.KvalifCode.GDNextObjects2.length = 0;
gdjs.KvalifCode.GDGreenButtonObjects1.length = 0;
gdjs.KvalifCode.GDGreenButtonObjects2.length = 0;
gdjs.KvalifCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.KvalifCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval1Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval1Objects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval2Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval2Objects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval3Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval3Objects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval4Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval4Objects2.length = 0;
gdjs.KvalifCode.GDPRAVKVAL3Objects1.length = 0;
gdjs.KvalifCode.GDPRAVKVAL3Objects2.length = 0;
gdjs.KvalifCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.KvalifCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.KvalifCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.KvalifCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.KvalifCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.KvalifCode.GDNewPanelSprite2Objects2.length = 0;

gdjs.KvalifCode.eventsList8(runtimeScene);
gdjs.KvalifCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.KvalifCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.KvalifCode.GDKvalObjects1.length = 0;
gdjs.KvalifCode.GDKvalObjects2.length = 0;
gdjs.KvalifCode.GDAny_9595textObjects1.length = 0;
gdjs.KvalifCode.GDAny_9595textObjects2.length = 0;
gdjs.KvalifCode.GDNewPanelSprite3Objects1.length = 0;
gdjs.KvalifCode.GDNewPanelSprite3Objects2.length = 0;
gdjs.KvalifCode.GDNextObjects1.length = 0;
gdjs.KvalifCode.GDNextObjects2.length = 0;
gdjs.KvalifCode.GDGreenButtonObjects1.length = 0;
gdjs.KvalifCode.GDGreenButtonObjects2.length = 0;
gdjs.KvalifCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.KvalifCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval1Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval1Objects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval2Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval2Objects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval3Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval3Objects2.length = 0;
gdjs.KvalifCode.GDprav_9595kval4Objects1.length = 0;
gdjs.KvalifCode.GDprav_9595kval4Objects2.length = 0;
gdjs.KvalifCode.GDPRAVKVAL3Objects1.length = 0;
gdjs.KvalifCode.GDPRAVKVAL3Objects2.length = 0;
gdjs.KvalifCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.KvalifCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.KvalifCode.GD_951064_951080_951088_951086_951090_9510722Objects1.length = 0;
gdjs.KvalifCode.GD_951064_951080_951088_951086_951090_9510722Objects2.length = 0;
gdjs.KvalifCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.KvalifCode.GDNewPanelSprite2Objects2.length = 0;


return;

}

gdjs['KvalifCode'] = gdjs.KvalifCode;
