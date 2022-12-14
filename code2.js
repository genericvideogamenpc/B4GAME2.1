gdjs.Options_32PanelCode = {};
gdjs.Options_32PanelCode.GDClosingObjects1= [];
gdjs.Options_32PanelCode.GDClosingObjects2= [];
gdjs.Options_32PanelCode.GDFullscreenObjects1= [];
gdjs.Options_32PanelCode.GDFullscreenObjects2= [];
gdjs.Options_32PanelCode.GDVolumeObjects1= [];
gdjs.Options_32PanelCode.GDVolumeObjects2= [];
gdjs.Options_32PanelCode.GDFullScreenObjects1= [];
gdjs.Options_32PanelCode.GDFullScreenObjects2= [];
gdjs.Options_32PanelCode.GDNewSpriteObjects1= [];
gdjs.Options_32PanelCode.GDNewSpriteObjects2= [];
gdjs.Options_32PanelCode.GDVolSliderObjects1= [];
gdjs.Options_32PanelCode.GDVolSliderObjects2= [];
gdjs.Options_32PanelCode.GDNewShapePainterObjects1= [];
gdjs.Options_32PanelCode.GDNewShapePainterObjects2= [];
gdjs.Options_32PanelCode.GDNewSprite2Objects1= [];
gdjs.Options_32PanelCode.GDNewSprite2Objects2= [];

gdjs.Options_32PanelCode.conditionTrue_0 = {val:false};
gdjs.Options_32PanelCode.condition0IsTrue_0 = {val:false};
gdjs.Options_32PanelCode.condition1IsTrue_0 = {val:false};
gdjs.Options_32PanelCode.condition2IsTrue_0 = {val:false};
gdjs.Options_32PanelCode.condition3IsTrue_0 = {val:false};
gdjs.Options_32PanelCode.conditionTrue_1 = {val:false};
gdjs.Options_32PanelCode.condition0IsTrue_1 = {val:false};
gdjs.Options_32PanelCode.condition1IsTrue_1 = {val:false};
gdjs.Options_32PanelCode.condition2IsTrue_1 = {val:false};
gdjs.Options_32PanelCode.condition3IsTrue_1 = {val:false};


gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Options_32PanelCode.GDNewSprite2Objects1});
gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Options_32PanelCode.GDNewSprite2Objects1});
gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Options_32PanelCode.GDNewSprite2Objects1});
gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Options_32PanelCode.GDNewSprite2Objects1});
gdjs.Options_32PanelCode.asyncCallback16241412 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}
gdjs.Options_32PanelCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Options_32PanelCode.asyncCallback16241412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Options_32PanelCode.eventsList1 = function(runtimeScene) {

{


gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
{
{gdjs.Options_32PanelCode.conditionTrue_1 = gdjs.Options_32PanelCode.condition0IsTrue_0;
gdjs.Options_32PanelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16208676);
}
}if (gdjs.Options_32PanelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Optionswav.wav", 1, false, 100, 1);
}}

}


{


gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelStopped(runtimeScene, 1);
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
{gdjs.Options_32PanelCode.conditionTrue_1 = gdjs.Options_32PanelCode.condition1IsTrue_0;
gdjs.Options_32PanelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16208748);
}
}}
if (gdjs.Options_32PanelCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Optionswav.wav", 1, false, 100, 1);
}}

}


{


gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32PanelCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.Options_32PanelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.Options_32PanelCode.GDFullScreenObjects1);
{for(var i = 0, len = gdjs.Options_32PanelCode.GDFullScreenObjects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDFullScreenObjects1[i].getBehavior("ToggleSwitch").SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32PanelCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.Options_32PanelCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.Options_32PanelCode.GDFullScreenObjects1);
{for(var i = 0, len = gdjs.Options_32PanelCode.GDFullScreenObjects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDFullScreenObjects1[i].getBehavior("ToggleSwitch").SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.Options_32PanelCode.GDFullScreenObjects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Options_32PanelCode.GDFullScreenObjects1.length;i<l;++i) {
    if ( !(gdjs.Options_32PanelCode.GDFullScreenObjects1[i].getBehavior("ToggleSwitch").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Options_32PanelCode.condition0IsTrue_0.val = true;
        gdjs.Options_32PanelCode.GDFullScreenObjects1[k] = gdjs.Options_32PanelCode.GDFullScreenObjects1[i];
        ++k;
    }
}
gdjs.Options_32PanelCode.GDFullScreenObjects1.length = k;}if (gdjs.Options_32PanelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.Options_32PanelCode.GDFullScreenObjects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Options_32PanelCode.GDFullScreenObjects1.length;i<l;++i) {
    if ( gdjs.Options_32PanelCode.GDFullScreenObjects1[i].getBehavior("ToggleSwitch").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Options_32PanelCode.condition0IsTrue_0.val = true;
        gdjs.Options_32PanelCode.GDFullScreenObjects1[k] = gdjs.Options_32PanelCode.GDFullScreenObjects1[i];
        ++k;
    }
}
gdjs.Options_32PanelCode.GDFullScreenObjects1.length = k;}if (gdjs.Options_32PanelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
{
{gdjs.Options_32PanelCode.conditionTrue_1 = gdjs.Options_32PanelCode.condition0IsTrue_0;
gdjs.Options_32PanelCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16236412);
}
}if (gdjs.Options_32PanelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Options_32PanelCode.GDClosingObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolSlider"), gdjs.Options_32PanelCode.GDVolSliderObjects1);
{for(var i = 0, len = gdjs.Options_32PanelCode.GDClosingObjects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDClosingObjects1[i].getBehavior("Tween").addObjectPositionYTween("Show", -(736), "easeInQuart", 1000, false);
}
}{for(var i = 0, len = gdjs.Options_32PanelCode.GDVolSliderObjects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDVolSliderObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.sound.getGlobalVolume(runtimeScene) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Options_32PanelCode.GDNewSprite2Objects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects, runtimeScene, true, true);
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32PanelCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Options_32PanelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Options_32PanelCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Options_32PanelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDNewSprite2Objects1[i].setAnimationName("Neutral");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Options_32PanelCode.GDNewSprite2Objects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32PanelCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Options_32PanelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Options_32PanelCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Options_32PanelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDNewSprite2Objects1[i].setAnimationName("Hover");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Options_32PanelCode.GDNewSprite2Objects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32PanelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Options_32PanelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Options_32PanelCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.Options_32PanelCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDNewSprite2Objects1[i].setAnimationName("Click");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Options_32PanelCode.GDClosingObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Options_32PanelCode.GDNewSprite2Objects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition1IsTrue_0.val = false;
gdjs.Options_32PanelCode.condition2IsTrue_0.val = false;
{
gdjs.Options_32PanelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Options_32PanelCode.mapOfGDgdjs_46Options_9532PanelCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Options_32PanelCode.condition0IsTrue_0.val ) {
{
gdjs.Options_32PanelCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Options_32PanelCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Options_32PanelCode.GDClosingObjects1.length;i<l;++i) {
    if ( !(gdjs.Options_32PanelCode.GDClosingObjects1[i].getBehavior("Tween").isPlaying("Exit")) ) {
        gdjs.Options_32PanelCode.condition2IsTrue_0.val = true;
        gdjs.Options_32PanelCode.GDClosingObjects1[k] = gdjs.Options_32PanelCode.GDClosingObjects1[i];
        ++k;
    }
}
gdjs.Options_32PanelCode.GDClosingObjects1.length = k;}}
}
if (gdjs.Options_32PanelCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Options_32PanelCode.GDClosingObjects1 */
{for(var i = 0, len = gdjs.Options_32PanelCode.GDClosingObjects1.length ;i < len;++i) {
    gdjs.Options_32PanelCode.GDClosingObjects1[i].getBehavior("Tween").addObjectPositionYTween("Exit", 0, "easeInQuart", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Closing"), gdjs.Options_32PanelCode.GDClosingObjects1);

gdjs.Options_32PanelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Options_32PanelCode.GDClosingObjects1.length;i<l;++i) {
    if ( gdjs.Options_32PanelCode.GDClosingObjects1[i].getBehavior("Tween").hasFinished("Exit") ) {
        gdjs.Options_32PanelCode.condition0IsTrue_0.val = true;
        gdjs.Options_32PanelCode.GDClosingObjects1[k] = gdjs.Options_32PanelCode.GDClosingObjects1[i];
        ++k;
    }
}
gdjs.Options_32PanelCode.GDClosingObjects1.length = k;}if (gdjs.Options_32PanelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Options_32PanelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("VolSlider"), gdjs.Options_32PanelCode.GDVolSliderObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.Options_32PanelCode.GDVolSliderObjects1.length === 0 ) ? 0 :gdjs.Options_32PanelCode.GDVolSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


};

gdjs.Options_32PanelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Options_32PanelCode.GDClosingObjects1.length = 0;
gdjs.Options_32PanelCode.GDClosingObjects2.length = 0;
gdjs.Options_32PanelCode.GDFullscreenObjects1.length = 0;
gdjs.Options_32PanelCode.GDFullscreenObjects2.length = 0;
gdjs.Options_32PanelCode.GDVolumeObjects1.length = 0;
gdjs.Options_32PanelCode.GDVolumeObjects2.length = 0;
gdjs.Options_32PanelCode.GDFullScreenObjects1.length = 0;
gdjs.Options_32PanelCode.GDFullScreenObjects2.length = 0;
gdjs.Options_32PanelCode.GDNewSpriteObjects1.length = 0;
gdjs.Options_32PanelCode.GDNewSpriteObjects2.length = 0;
gdjs.Options_32PanelCode.GDVolSliderObjects1.length = 0;
gdjs.Options_32PanelCode.GDVolSliderObjects2.length = 0;
gdjs.Options_32PanelCode.GDNewShapePainterObjects1.length = 0;
gdjs.Options_32PanelCode.GDNewShapePainterObjects2.length = 0;
gdjs.Options_32PanelCode.GDNewSprite2Objects1.length = 0;
gdjs.Options_32PanelCode.GDNewSprite2Objects2.length = 0;

gdjs.Options_32PanelCode.eventsList1(runtimeScene);

return;

}

gdjs['Options_32PanelCode'] = gdjs.Options_32PanelCode;
