gdjs.CreditsCode = {};
gdjs.CreditsCode.GDNewTextObjects1= [];
gdjs.CreditsCode.GDNewTextObjects2= [];
gdjs.CreditsCode.GDNewText2Objects1= [];
gdjs.CreditsCode.GDNewText2Objects2= [];
gdjs.CreditsCode.GDNewText3Objects1= [];
gdjs.CreditsCode.GDNewText3Objects2= [];
gdjs.CreditsCode.GDCoverObjects1= [];
gdjs.CreditsCode.GDCoverObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};
gdjs.CreditsCode.condition3IsTrue_0 = {val:false};
gdjs.CreditsCode.condition4IsTrue_0 = {val:false};
gdjs.CreditsCode.conditionTrue_1 = {val:false};
gdjs.CreditsCode.condition0IsTrue_1 = {val:false};
gdjs.CreditsCode.condition1IsTrue_1 = {val:false};
gdjs.CreditsCode.condition2IsTrue_1 = {val:false};
gdjs.CreditsCode.condition3IsTrue_1 = {val:false};
gdjs.CreditsCode.condition4IsTrue_1 = {val:false};


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.CreditsCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.CreditsCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewText3Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition0IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17381980);
}
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.CreditsCode.GDCoverObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCoverObjects1[i].getBehavior("Tween").addObjectPositionYTween("uncover", -(736), "easeInOutQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.CreditsCode.GDCoverObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
gdjs.CreditsCode.condition2IsTrue_0.val = false;
gdjs.CreditsCode.condition3IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDCoverObjects1.length;i<l;++i) {
    if ( !(gdjs.CreditsCode.GDCoverObjects1[i].getBehavior("Tween").isPlaying("uncover")) ) {
        gdjs.CreditsCode.condition1IsTrue_0.val = true;
        gdjs.CreditsCode.GDCoverObjects1[k] = gdjs.CreditsCode.GDCoverObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDCoverObjects1.length = k;}if ( gdjs.CreditsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDCoverObjects1.length;i<l;++i) {
    if ( !(gdjs.CreditsCode.GDCoverObjects1[i].getBehavior("Tween").isPlaying("cover")) ) {
        gdjs.CreditsCode.condition2IsTrue_0.val = true;
        gdjs.CreditsCode.GDCoverObjects1[k] = gdjs.CreditsCode.GDCoverObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDCoverObjects1.length = k;}if ( gdjs.CreditsCode.condition2IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition3IsTrue_0;
gdjs.CreditsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17383916);
}
}}
}
}
if (gdjs.CreditsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDCoverObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDCoverObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCoverObjects1[i].getBehavior("Tween").addObjectPositionYTween("cover", 0, "easeInOutQuad", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cover"), gdjs.CreditsCode.GDCoverObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDCoverObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDCoverObjects1[i].getBehavior("Tween").hasFinished("cover") ) {
        gdjs.CreditsCode.condition0IsTrue_0.val = true;
        gdjs.CreditsCode.GDCoverObjects1[k] = gdjs.CreditsCode.GDCoverObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDCoverObjects1.length = k;}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDNewText2Objects1.length = 0;
gdjs.CreditsCode.GDNewText2Objects2.length = 0;
gdjs.CreditsCode.GDNewText3Objects1.length = 0;
gdjs.CreditsCode.GDNewText3Objects2.length = 0;
gdjs.CreditsCode.GDCoverObjects1.length = 0;
gdjs.CreditsCode.GDCoverObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
