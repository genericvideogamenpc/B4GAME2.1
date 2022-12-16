gdjs.StoryCode = {};
gdjs.StoryCode.GDNewTextObjects1= [];
gdjs.StoryCode.GDNewTextObjects2= [];
gdjs.StoryCode.GDNewText2Objects1= [];
gdjs.StoryCode.GDNewText2Objects2= [];

gdjs.StoryCode.conditionTrue_0 = {val:false};
gdjs.StoryCode.condition0IsTrue_0 = {val:false};
gdjs.StoryCode.condition1IsTrue_0 = {val:false};
gdjs.StoryCode.condition2IsTrue_0 = {val:false};
gdjs.StoryCode.condition3IsTrue_0 = {val:false};
gdjs.StoryCode.conditionTrue_1 = {val:false};
gdjs.StoryCode.condition0IsTrue_1 = {val:false};
gdjs.StoryCode.condition1IsTrue_1 = {val:false};
gdjs.StoryCode.condition2IsTrue_1 = {val:false};
gdjs.StoryCode.condition3IsTrue_1 = {val:false};


gdjs.StoryCode.asyncCallback16290620 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.StoryCode.GDNewTextObjects2);

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StoryCode.GDNewText2Objects2);
{for(var i = 0, len = gdjs.StoryCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.StoryCode.GDNewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween("textbye", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.StoryCode.GDNewText2Objects2.length ;i < len;++i) {
    gdjs.StoryCode.GDNewText2Objects2[i].hide();
}
}}
gdjs.StoryCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StoryCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.StoryCode.asyncCallback16290620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StoryCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StoryCode.GDNewTextObjects1);

gdjs.StoryCode.condition0IsTrue_0.val = false;
gdjs.StoryCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StoryCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.StoryCode.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.StoryCode.condition0IsTrue_0.val = true;
        gdjs.StoryCode.GDNewTextObjects1[k] = gdjs.StoryCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.StoryCode.GDNewTextObjects1.length = k;}if ( gdjs.StoryCode.condition0IsTrue_0.val ) {
{
{gdjs.StoryCode.conditionTrue_1 = gdjs.StoryCode.condition1IsTrue_0;
gdjs.StoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16290316);
}
}}
if (gdjs.StoryCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.StoryCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StoryCode.GDNewTextObjects1);

gdjs.StoryCode.condition0IsTrue_0.val = false;
gdjs.StoryCode.condition1IsTrue_0.val = false;
gdjs.StoryCode.condition2IsTrue_0.val = false;
{
gdjs.StoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.StoryCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.StoryCode.GDNewTextObjects1.length;i<l;++i) {
    if ( !(gdjs.StoryCode.GDNewTextObjects1[i].getBehavior("Tween").isPlaying("textbye")) ) {
        gdjs.StoryCode.condition1IsTrue_0.val = true;
        gdjs.StoryCode.GDNewTextObjects1[k] = gdjs.StoryCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.StoryCode.GDNewTextObjects1.length = k;}if ( gdjs.StoryCode.condition1IsTrue_0.val ) {
{
{gdjs.StoryCode.conditionTrue_1 = gdjs.StoryCode.condition2IsTrue_0;
gdjs.StoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16291236);
}
}}
}
if (gdjs.StoryCode.condition2IsTrue_0.val) {
/* Reuse gdjs.StoryCode.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StoryCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StoryCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.StoryCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectOpacityTween("textbye", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.StoryCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StoryCode.GDNewText2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StoryCode.GDNewTextObjects1);

gdjs.StoryCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StoryCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.StoryCode.GDNewTextObjects1[i].getBehavior("Tween").hasFinished("textbye") ) {
        gdjs.StoryCode.condition0IsTrue_0.val = true;
        gdjs.StoryCode.GDNewTextObjects1[k] = gdjs.StoryCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.StoryCode.GDNewTextObjects1.length = k;}if (gdjs.StoryCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.StoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StoryCode.GDNewTextObjects1.length = 0;
gdjs.StoryCode.GDNewTextObjects2.length = 0;
gdjs.StoryCode.GDNewText2Objects1.length = 0;
gdjs.StoryCode.GDNewText2Objects2.length = 0;

gdjs.StoryCode.eventsList1(runtimeScene);

return;

}

gdjs['StoryCode'] = gdjs.StoryCode;
