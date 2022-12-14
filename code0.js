gdjs.Focus_32the_32Game_32MenuCode = {};
gdjs.Focus_32the_32Game_32MenuCode.GDNewBBTextObjects1= [];
gdjs.Focus_32the_32Game_32MenuCode.GDNewBBTextObjects2= [];
gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects1= [];
gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects2= [];

gdjs.Focus_32the_32Game_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Focus_32the_32Game_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Focus_32the_32Game_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Focus_32the_32Game_32MenuCode.asyncCallback16882524 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}
gdjs.Focus_32the_32Game_32MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Focus_32the_32Game_32MenuCode.asyncCallback16882524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Focus_32the_32Game_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Focus_32the_32Game_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Focus_32the_32Game_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Focus_32the_32Game_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects1);
{for(var i = 0, len = gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects1[i].hide();
}
}
{ //Subevents
gdjs.Focus_32the_32Game_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Focus_32the_32Game_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Focus_32the_32Game_32MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.Focus_32the_32Game_32MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Focus_32the_32Game_32MenuCode.GDNewBitmapTextObjects2.length = 0;

gdjs.Focus_32the_32Game_32MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['Focus_32the_32Game_32MenuCode'] = gdjs.Focus_32the_32Game_32MenuCode;
