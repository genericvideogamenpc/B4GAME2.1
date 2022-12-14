
gdjs.evtsExt__PanelSpriteButton__ButtonFSM = gdjs.evtsExt__PanelSpriteButton__ButtonFSM || {};

/**
 * Behavior generated from Button finite state machine
 */
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM = class ButtonFSM extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ShouldCheckHovering = true;
    this._behaviorData.State = "Idle";
    this._behaviorData.TouchId = Number("0") || 0;
    this._behaviorData.TouchIsInside = false;
    this._behaviorData.MouseIsInside = false;
    this._behaviorData.Index = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ShouldCheckHovering !== newBehaviorData.ShouldCheckHovering)
      this._behaviorData.ShouldCheckHovering = newBehaviorData.ShouldCheckHovering;
    if (oldBehaviorData.State !== newBehaviorData.State)
      this._behaviorData.State = newBehaviorData.State;
    if (oldBehaviorData.TouchId !== newBehaviorData.TouchId)
      this._behaviorData.TouchId = newBehaviorData.TouchId;
    if (oldBehaviorData.TouchIsInside !== newBehaviorData.TouchIsInside)
      this._behaviorData.TouchIsInside = newBehaviorData.TouchIsInside;
    if (oldBehaviorData.MouseIsInside !== newBehaviorData.MouseIsInside)
      this._behaviorData.MouseIsInside = newBehaviorData.MouseIsInside;
    if (oldBehaviorData.Index !== newBehaviorData.Index)
      this._behaviorData.Index = newBehaviorData.Index;

    return true;
  }

  // Properties:
  
  _getShouldCheckHovering() {
    return this._behaviorData.ShouldCheckHovering !== undefined ? this._behaviorData.ShouldCheckHovering : true;
  }
  _setShouldCheckHovering(newValue) {
    this._behaviorData.ShouldCheckHovering = newValue;
  }
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "Idle";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
  _getTouchId() {
    return this._behaviorData.TouchId !== undefined ? this._behaviorData.TouchId : Number("0") || 0;
  }
  _setTouchId(newValue) {
    this._behaviorData.TouchId = newValue;
  }
  _getTouchIsInside() {
    return this._behaviorData.TouchIsInside !== undefined ? this._behaviorData.TouchIsInside : false;
  }
  _setTouchIsInside(newValue) {
    this._behaviorData.TouchIsInside = newValue;
  }
  _getMouseIsInside() {
    return this._behaviorData.MouseIsInside !== undefined ? this._behaviorData.MouseIsInside : false;
  }
  _setMouseIsInside(newValue) {
    this._behaviorData.MouseIsInside = newValue;
  }
  _getIndex() {
    return this._behaviorData.Index !== undefined ? this._behaviorData.Index : Number("") || 0;
  }
  _setIndex(newValue) {
    this._behaviorData.Index = newValue;
  }
}

/**
 * Shared data generated from Button finite state machine
 */
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.SharedData = class ButtonFSMSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PanelSpriteButton_ButtonFSMSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PanelSpriteButton_ButtonFSMSharedData = new gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.SharedData(
      initialData
    );
  }
  return instanceContainer._PanelSpriteButton_ButtonFSMSharedData;
}

// Methods:
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final = [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatCount4 = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatIndex4 = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95ButtonFSM_46ButtonFSM_46prototype_46doStepPostEventsContext_46GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3});
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseIsInside(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = !(gdjs.evtsExt__PanelSpriteButton__AnyTouchPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ShouldCheckMousePosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val ) {
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.mapOfGDgdjs_46evtsExt_95_95PanelSpriteButton_95_95ButtonFSM_46ButtonFSM_46prototype_46doStepPostEventsContext_46GDObjectObjects3Objects, runtimeScene, false, false);
}}
}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseIsInside(true);
}
}}

}


{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIsInside(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() != 0 ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()), (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()), (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0)) ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIsInside(true);
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5 */

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6);

for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6);

for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5_1final, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5);
}
}
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedInside");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5);


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())), (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())), (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getLayer()), 0)) ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(gdjs.evtTools.input.getStartedTouchIdentifier(runtimeScene, (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIsInside(true);
}
}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatCount4 = gdjs.evtTools.input.getStartedTouchCount(runtimeScene);
for(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatIndex4 = 0;gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatIndex4 < gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatCount4;++gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.repeatIndex4) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseIsInside() ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);

for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);

for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);
}
}
}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedInside");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = !(gdjs.evtsExt__PanelSpriteButton__AnyTouchPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15631980);
}
}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4);


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}}

}


{

/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3 */

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedOutside");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedOutside" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("PressedInside");
}
}}

}


{

/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Hovered");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseIsInside()) ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIsInside()) ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseIsInside() ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIsInside() ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2_1final, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);
}
}
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Validated");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside") ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated") ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Validated");
}
}}

}


{

/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1 */

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside") ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated") ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val = !(gdjs.evtsExt__PanelSpriteButton__AnyTouchPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}
if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()));
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0);
}
}
{ //Subevents
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}}

}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val = gdjs.evtsExt__PanelSpriteButton__AnyTouchPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldCheckHovering(false);
}
}}

}


{


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList13(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.GDObjectObjects6.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPostEventsContext.eventsList14(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects2= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsIdleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects2= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Validated" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects2= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHovered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects2= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Hovered" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedOutside" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocused = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1);

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "PressedInside" ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext = {};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2= [];

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.conditionTrue_1 = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldCheckHovering() ) {
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1_1final, gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1);
}
}
}if (gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.ShouldCheckMousePositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PanelSpriteButton::ButtonFSM", gdjs.evtsExt__PanelSpriteButton__ButtonFSM.ButtonFSM);
