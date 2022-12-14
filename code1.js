gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects3= [];
gdjs.Main_32MenuCode.GDTitleObjects4= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects4= [];
gdjs.Main_32MenuCode.GDOptionsObjects1= [];
gdjs.Main_32MenuCode.GDOptionsObjects2= [];
gdjs.Main_32MenuCode.GDOptionsObjects3= [];
gdjs.Main_32MenuCode.GDOptionsObjects4= [];
gdjs.Main_32MenuCode.GDQuitObjects1= [];
gdjs.Main_32MenuCode.GDQuitObjects2= [];
gdjs.Main_32MenuCode.GDQuitObjects3= [];
gdjs.Main_32MenuCode.GDQuitObjects4= [];
gdjs.Main_32MenuCode.GDLampObjects1= [];
gdjs.Main_32MenuCode.GDLampObjects2= [];
gdjs.Main_32MenuCode.GDLampObjects3= [];
gdjs.Main_32MenuCode.GDLampObjects4= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects3= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects4= [];
gdjs.Main_32MenuCode.GDNightstandObjects1= [];
gdjs.Main_32MenuCode.GDNightstandObjects2= [];
gdjs.Main_32MenuCode.GDNightstandObjects3= [];
gdjs.Main_32MenuCode.GDNightstandObjects4= [];
gdjs.Main_32MenuCode.GDBedObjects1= [];
gdjs.Main_32MenuCode.GDBedObjects2= [];
gdjs.Main_32MenuCode.GDBedObjects3= [];
gdjs.Main_32MenuCode.GDBedObjects4= [];
gdjs.Main_32MenuCode.GDScreenlightObjects1= [];
gdjs.Main_32MenuCode.GDScreenlightObjects2= [];
gdjs.Main_32MenuCode.GDScreenlightObjects3= [];
gdjs.Main_32MenuCode.GDScreenlightObjects4= [];
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects1= [];
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects2= [];
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects3= [];
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects4= [];
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects3= [];
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects4= [];
gdjs.Main_32MenuCode.GDClosingObjects1= [];
gdjs.Main_32MenuCode.GDClosingObjects2= [];
gdjs.Main_32MenuCode.GDClosingObjects3= [];
gdjs.Main_32MenuCode.GDClosingObjects4= [];
gdjs.Main_32MenuCode.GDNewTextObjects1= [];
gdjs.Main_32MenuCode.GDNewTextObjects2= [];
gdjs.Main_32MenuCode.GDNewTextObjects3= [];
gdjs.Main_32MenuCode.GDNewTextObjects4= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects3[i].getBehavior("Tween").addObjectPositionXTween("", 0, "easeOutQuint", 1200, false);
}
}}

}


};gdjs.Main_32MenuCode.asyncCallback16172140 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects3[i].setOpacity(150);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16172140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16171980);
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects2});
gdjs.Main_32MenuCode.asyncCallback16177652 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Story", false);
}}
gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16177652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].setEffectDoubleParameter("Effect", "gamma", 2.2);
}
}}

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].getBehavior("Tween").isPlaying("Click")) ) {
        gdjs.Main_32MenuCode.condition2IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDPlayButtonObjects2[k] = gdjs.Main_32MenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = k;}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("ClickS", 1.05, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("LeaveS", 1, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("LeaveS", 1, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Main_32MenuCode.GDClosingObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDClosingObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDClosingObjects2[i].getBehavior("Tween").addObjectPositionYTween("play", 0, "easeInCubic", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Main_32MenuCode.GDClosingObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDClosingObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDClosingObjects2[i].getBehavior("Tween").hasFinished("play") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDClosingObjects2[k] = gdjs.Main_32MenuCode.GDClosingObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDClosingObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList4(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
/* Reuse gdjs.Main_32MenuCode.GDOptionsObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects3[i].getBehavior("Tween").addObjectPositionXTween("", -(94), "easeOutQuint", 1200, false);
}
}}

}


};gdjs.Main_32MenuCode.asyncCallback16181260 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects3[i].setOpacity(150);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.55), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16181260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16181100);
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects2});
gdjs.Main_32MenuCode.asyncCallback16187028 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options Panel", false);
}}
gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16187028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects1Objects = Hashtable.newFrom({"Options": gdjs.Main_32MenuCode.GDOptionsObjects1});
gdjs.Main_32MenuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDOptionsObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects1[i].setEffectDoubleParameter("Effect", "gamma", 2.2);
}
}}

}


};gdjs.Main_32MenuCode.eventsList11 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDOptionsObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDOptionsObjects2[i].getBehavior("Tween").isPlaying("Click")) ) {
        gdjs.Main_32MenuCode.condition2IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDOptionsObjects2[k] = gdjs.Main_32MenuCode.GDOptionsObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDOptionsObjects2.length = k;}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects2[i].getBehavior("Tween").addObjectScaleTween("ClickO", 1.05, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects2[i].getBehavior("Tween").addObjectScaleTween("LeaveO", 1, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDOptionsObjects2[i].getBehavior("Tween").addObjectScaleTween("LeaveO", 1, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Main_32MenuCode.GDOptionsObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Main_32MenuCode.GDClosingObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDClosingObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDClosingObjects2[i].getBehavior("Tween").addObjectPositionYTween("OptionsMenu", 0, "easeOutQuad", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Main_32MenuCode.GDClosingObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDClosingObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDClosingObjects2[i].getBehavior("Tween").hasFinished("OptionsMenu") ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDClosingObjects2[k] = gdjs.Main_32MenuCode.GDClosingObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDClosingObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16186908);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList10(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
/* Reuse gdjs.Main_32MenuCode.GDQuitObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects3[i].getBehavior("Tween").addObjectPositionXTween("", -(188), "easeOutQuint", 1200, false);
}
}}

}


};gdjs.Main_32MenuCode.asyncCallback16190644 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects3[i].setOpacity(150);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32MenuCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.8), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16190644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16190460);
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects1});
gdjs.Main_32MenuCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuitObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuitObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].setEffectDoubleParameter("Effect", "gamma", 1.4);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects1[i].setEffectDoubleParameter("Effect", "gamma", 2.2);
}
}}

}


};gdjs.Main_32MenuCode.eventsList16 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList14(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDQuitObjects2.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Tween").isPlaying("Click")) ) {
        gdjs.Main_32MenuCode.condition2IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDQuitObjects2[k] = gdjs.Main_32MenuCode.GDQuitObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDQuitObjects2.length = k;}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuitObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Tween").addObjectScaleTween("ClickO", 1.05, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDQuitObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Tween").addObjectScaleTween("LeaveO", 1, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDQuitObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDQuitObjects2[i].getBehavior("Tween").addObjectScaleTween("LeaveO", 1, 1, "easeInOutQuad", 50, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Main_32MenuCode.eventsList15(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Main_32MenuCode.GDTitleObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitleObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitleObjects3[i].getBehavior("Tween").addObjectPositionYTween("Logo", 256, "easeOutExpo", 1000, false);
}
}}

}


};gdjs.Main_32MenuCode.asyncCallback16198180 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Main_32MenuCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16198180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback16201268 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Lamp"), gdjs.Main_32MenuCode.GDLampObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDLampObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLampObjects2[i].setRadius(260);
}
}}
gdjs.Main_32MenuCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Main_32MenuCode.GDLampObjects1) asyncObjectsList.addObject("Lamp", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16201268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList20 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("RAND")) == 40;
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Lamp"), gdjs.Main_32MenuCode.GDLampObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLampObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLampObjects1[i].setRadius(180);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList21 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16198084);
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16199180);
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Main_32MenuCode.GDClosingObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDClosingObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDClosingObjects2[i].getBehavior("Tween").addObjectPositionYTween("Open", -(736), "easeInCubic", 1000, false);
}
}}

}


{



}


{


{
{runtimeScene.getVariables().get("RAND").setNumber(gdjs.random(40));
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList22 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16168932);
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MAINMENU.wav", 1, false, 100, 1);
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16170420);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "MAINMENU.wav", 1, false, 100, 1);
}}

}


{


gdjs.Main_32MenuCode.eventsList5(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList11(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList16(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList21(runtimeScene);
}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects4.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects3.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects4.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects3.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects4.length = 0;
gdjs.Main_32MenuCode.GDLampObjects1.length = 0;
gdjs.Main_32MenuCode.GDLampObjects2.length = 0;
gdjs.Main_32MenuCode.GDLampObjects3.length = 0;
gdjs.Main_32MenuCode.GDLampObjects4.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects4.length = 0;
gdjs.Main_32MenuCode.GDNightstandObjects1.length = 0;
gdjs.Main_32MenuCode.GDNightstandObjects2.length = 0;
gdjs.Main_32MenuCode.GDNightstandObjects3.length = 0;
gdjs.Main_32MenuCode.GDNightstandObjects4.length = 0;
gdjs.Main_32MenuCode.GDBedObjects1.length = 0;
gdjs.Main_32MenuCode.GDBedObjects2.length = 0;
gdjs.Main_32MenuCode.GDBedObjects3.length = 0;
gdjs.Main_32MenuCode.GDBedObjects4.length = 0;
gdjs.Main_32MenuCode.GDScreenlightObjects1.length = 0;
gdjs.Main_32MenuCode.GDScreenlightObjects2.length = 0;
gdjs.Main_32MenuCode.GDScreenlightObjects3.length = 0;
gdjs.Main_32MenuCode.GDScreenlightObjects4.length = 0;
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewParticlesEmitterObjects4.length = 0;
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Main_32MenuCode.GDClosingObjects1.length = 0;
gdjs.Main_32MenuCode.GDClosingObjects2.length = 0;
gdjs.Main_32MenuCode.GDClosingObjects3.length = 0;
gdjs.Main_32MenuCode.GDClosingObjects4.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDNewTextObjects4.length = 0;

gdjs.Main_32MenuCode.eventsList22(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
