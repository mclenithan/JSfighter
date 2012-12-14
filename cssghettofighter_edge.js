/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Head',
            type:'rect',
            rect:['257px','33px','35px','52px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Body',
            type:'rect',
            rect:['231px','100px','88px','100px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'LLeg',
            type:'rect',
            rect:['231px','214px','35px','65px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RLeg',
            type:'rect',
            rect:['284px','214px','35px','65px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'LCalf',
            type:'rect',
            rect:['231px','292px','35px','42px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RCalf',
            type:'rect',
            rect:['284px','292px','35px','42px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'LFoot',
            type:'ellipse',
            rect:['206px','349px','60px','25px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-34deg']]
         },
         {
            id:'RFoot',
            type:'ellipse',
            rect:['284px','349px','60px','25px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['38deg']]
         },
         {
            id:'LArm',
            type:'rect',
            rect:['161px','118px','60px','25px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-33deg']]
         },
         {
            id:'RArm',
            type:'rect',
            rect:['327px','118px','60px','25px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['29deg']]
         },
         {
            id:'LFArm',
            type:'rect',
            rect:['110px','172px','60px','25px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-60deg']]
         },
         {
            id:'RFArm',
            type:'rect',
            rect:['378px','170px','60px','25px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['60deg']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RCalf}": [
            ["style", "top", '292px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '284px']
         ],
         "${_LCalf}": [
            ["style", "top", '292px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '231px']
         ],
         "${_LArm}": [
            ["style", "top", '102.52px'],
            ["style", "left", '157.97px'],
            ["transform", "rotateZ", '-1deg']
         ],
         "${_RFArm}": [
            ["style", "top", '104.04px'],
            ["style", "left", '396px'],
            ["transform", "rotateZ", '2deg']
         ],
         "${_LFoot}": [
            ["style", "top", '349px'],
            ["style", "left", '206px'],
            ["transform", "rotateZ", '-1deg']
         ],
         "${_LFArm}": [
            ["style", "top", '104.55px'],
            ["style", "left", '86px'],
            ["transform", "rotateZ", '-3deg']
         ],
         "${_Body}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '231px'],
            ["style", "width", '88px']
         ],
         "${_LLeg}": [
            ["style", "top", '214px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '231px']
         ],
         "${_RFoot}": [
            ["style", "top", '349px'],
            ["style", "left", '284px'],
            ["transform", "rotateZ", '-1deg']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RLeg}": [
            ["style", "top", '214px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '284px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RArm}": [
            ["style", "top", '102.97px'],
            ["style", "left", '327px'],
            ["transform", "rotateZ", '1deg']
         ],
         "${_Head}": [
            ["style", "top", '37.5px'],
            ["transform", "scaleY", '0.48077'],
            ["style", "height", '52px'],
            ["style", "left", '257px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         timeline: [
            { id: "eid99", tween: [ "style", "${_RLeg}", "-webkit-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid170", tween: [ "style", "${_RLeg}", "-moz-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid171", tween: [ "style", "${_RLeg}", "-ms-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid172", tween: [ "style", "${_RLeg}", "msTransformOrigin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid173", tween: [ "style", "${_RLeg}", "-o-transform-origin", [100,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid160", tween: [ "transform", "${_LLeg}", "scaleY", '0.96564', { fromValue: '1'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid8", tween: [ "style", "${_RArm}", "top", '117.98px', { fromValue: '102.97px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid36", tween: [ "style", "${_RArm}", "top", '137.98px', { fromValue: '117.98px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid82", tween: [ "style", "${_RArm}", "top", '80.14px', { fromValue: '137.98px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid130", tween: [ "style", "${_RArm}", "top", '93.05px', { fromValue: '80.14px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid139", tween: [ "style", "${_RArm}", "top", '97.52px', { fromValue: '93.05px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid24", tween: [ "style", "${_LFArm}", "left", '110px', { fromValue: '86px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid43", tween: [ "style", "${_LFArm}", "left", '357.66px', { fromValue: '110px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid77", tween: [ "style", "${_LFArm}", "left", '106.68px', { fromValue: '357.66px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid126", tween: [ "style", "${_LFArm}", "left", '167.56px', { fromValue: '106.68px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid141", tween: [ "style", "${_LFArm}", "left", '98.55px', { fromValue: '167.56px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid57", tween: [ "style", "${_RFoot}", "top", '169.54px', { fromValue: '349px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid104", tween: [ "style", "${_RFoot}", "top", '317.71px', { fromValue: '169.54px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid156", tween: [ "style", "${_RFoot}", "top", '345.57px', { fromValue: '317.71px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid54", tween: [ "style", "${_RCalf}", "left", '383.2px', { fromValue: '284px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid100", tween: [ "style", "${_RCalf}", "left", '279px', { fromValue: '383.2px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid46", tween: [ "transform", "${_LLeg}", "scaleX", '0.71429', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid87", tween: [ "transform", "${_LLeg}", "scaleX", '1', { fromValue: '0.71429'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid109", tween: [ "transform", "${_LLeg}", "scaleX", '0.67916', { fromValue: '1'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid150", tween: [ "transform", "${_LLeg}", "scaleX", '0.88572', { fromValue: '0.67916'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid157", tween: [ "transform", "${_RCalf}", "scaleY", '1.35714', { fromValue: '1'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid55", tween: [ "style", "${_RCalf}", "top", '176.63px', { fromValue: '292px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid101", tween: [ "style", "${_RCalf}", "top", '258px', { fromValue: '176.63px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid159", tween: [ "style", "${_RCalf}", "top", '285px', { fromValue: '258px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid32", tween: [ "style", "${_Head}", "top", '33px', { fromValue: '37.5px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid121", tween: [ "style", "${_Head}", "top", '46px', { fromValue: '33px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid169", tween: [ "style", "${_Head}", "top", '31px', { fromValue: '46px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid4", tween: [ "transform", "${_RFoot}", "rotateZ", '38deg', { fromValue: '-1deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid58", tween: [ "transform", "${_RFoot}", "rotateZ", '-77deg', { fromValue: '38deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid106", tween: [ "transform", "${_RFoot}", "rotateZ", '91deg', { fromValue: '-77deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid154", tween: [ "transform", "${_RFoot}", "rotateZ", '5deg', { fromValue: '91deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid56", tween: [ "style", "${_RFoot}", "left", '421.33px', { fromValue: '284px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid105", tween: [ "style", "${_RFoot}", "left", '266.02px', { fromValue: '421.33px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid155", tween: [ "style", "${_RFoot}", "left", '275.98px', { fromValue: '266.02px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid49", tween: [ "transform", "${_RLeg}", "rotateZ", '-108deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid98", tween: [ "transform", "${_RLeg}", "rotateZ", '-91deg', { fromValue: '-108deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid30", tween: [ "style", "${_Head}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid174", tween: [ "style", "${_Head}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid175", tween: [ "style", "${_Head}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid176", tween: [ "style", "${_Head}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid177", tween: [ "style", "${_Head}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid108", tween: [ "transform", "${_LLeg}", "rotateZ", '52deg', { fromValue: '0deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid147", tween: [ "transform", "${_LLeg}", "rotateZ", '0deg', { fromValue: '52deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid10", tween: [ "transform", "${_RFArm}", "rotateZ", '60deg', { fromValue: '2deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid40", tween: [ "transform", "${_RFArm}", "rotateZ", '56deg', { fromValue: '60deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid131", tween: [ "transform", "${_RFArm}", "rotateZ", '173deg', { fromValue: '56deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid134", tween: [ "transform", "${_RFArm}", "rotateZ", '-2deg', { fromValue: '173deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid48", tween: [ "style", "${_LLeg}", "left", '252px', { fromValue: '231px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid86", tween: [ "style", "${_LLeg}", "left", '232px', { fromValue: '252px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid110", tween: [ "style", "${_LLeg}", "left", '213.43px', { fromValue: '232px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid148", tween: [ "style", "${_LLeg}", "left", '230px', { fromValue: '213.43px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid50", tween: [ "style", "${_RLeg}", "left", '305.66px', { fromValue: '284px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid94", tween: [ "style", "${_RLeg}", "left", '261px', { fromValue: '305.66px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid116", tween: [ "transform", "${_LCalf}", "rotateZ", '-29deg', { fromValue: '0deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid164", tween: [ "transform", "${_LCalf}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid60", tween: [ "transform", "${_LCalf}", "scaleX", '0.71429', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid90", tween: [ "transform", "${_LCalf}", "scaleX", '1.05714', { fromValue: '0.71429'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid114", tween: [ "transform", "${_LCalf}", "scaleX", '0.67916', { fromValue: '1.05714'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid167", tween: [ "transform", "${_LCalf}", "scaleX", '0.90762', { fromValue: '0.67916'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid14", tween: [ "style", "${_RFArm}", "left", '378px', { fromValue: '396px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid38", tween: [ "style", "${_RFArm}", "left", '343.86px', { fromValue: '378px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid84", tween: [ "style", "${_RFArm}", "left", '384.14px', { fromValue: '343.86px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid132", tween: [ "style", "${_RFArm}", "left", '121.7px', { fromValue: '384.14px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid135", tween: [ "style", "${_RFArm}", "left", '392.67px', { fromValue: '121.7px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid6", tween: [ "transform", "${_RArm}", "rotateZ", '29deg', { fromValue: '1deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid39", tween: [ "transform", "${_RArm}", "rotateZ", '55deg', { fromValue: '29deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid81", tween: [ "transform", "${_RArm}", "rotateZ", '-42deg', { fromValue: '55deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid128", tween: [ "transform", "${_RArm}", "rotateZ", '172deg', { fromValue: '-42deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid137", tween: [ "transform", "${_RArm}", "rotateZ", '-1deg', { fromValue: '172deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid35", tween: [ "style", "${_RArm}", "left", '304.3px', { fromValue: '327px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid83", tween: [ "style", "${_RArm}", "left", '326.66px', { fromValue: '304.3px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid129", tween: [ "style", "${_RArm}", "left", '194.55px', { fromValue: '326.66px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid138", tween: [ "style", "${_RArm}", "left", '325.55px', { fromValue: '194.55px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid97", tween: [ "transform", "${_RLeg}", "scaleY", '0.64615', { fromValue: '1'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid153", tween: [ "transform", "${_RLeg}", "scaleY", '0.46154', { fromValue: '0.64615'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid22", tween: [ "transform", "${_LFArm}", "rotateZ", '-60deg', { fromValue: '-3deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid45", tween: [ "transform", "${_LFArm}", "rotateZ", '-42deg', { fromValue: '-60deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid79", tween: [ "transform", "${_LFArm}", "rotateZ", '128deg', { fromValue: '-42deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid125", tween: [ "transform", "${_LFArm}", "rotateZ", '266deg', { fromValue: '128deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid140", tween: [ "transform", "${_LFArm}", "rotateZ", '175deg', { fromValue: '266deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid111", tween: [ "style", "${_LLeg}", "top", '199.87px', { fromValue: '214px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid149", tween: [ "style", "${_LLeg}", "top", '205.13px', { fromValue: '199.87px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid89", tween: [ "style", "${_LCalf}", "top", '291px', { fromValue: '292px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid112", tween: [ "style", "${_LCalf}", "top", '269px', { fromValue: '291px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid166", tween: [ "style", "${_LCalf}", "top", '284.5px', { fromValue: '269px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid47", tween: [ "transform", "${_RLeg}", "scaleX", '0.54286', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid96", tween: [ "transform", "${_RLeg}", "scaleX", '1', { fromValue: '0.54286'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid152", tween: [ "transform", "${_RLeg}", "scaleX", '1.71429', { fromValue: '1'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid51", tween: [ "style", "${_RLeg}", "top", '186.58px', { fromValue: '214px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid95", tween: [ "style", "${_RLeg}", "top", '181.87px', { fromValue: '186.58px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid151", tween: [ "style", "${_RLeg}", "top", '175.87px', { fromValue: '181.87px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid52", tween: [ "transform", "${_RCalf}", "scaleX", '0.54286', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid103", tween: [ "transform", "${_RCalf}", "scaleX", '1.05714', { fromValue: '0.54286'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid158", tween: [ "transform", "${_RCalf}", "scaleX", '0.88572', { fromValue: '1.05714'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid115", tween: [ "transform", "${_LCalf}", "scaleY", '1.35714', { fromValue: '1'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "transform", "${_Head}", "scaleY", '1', { fromValue: '0.48077'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid33", tween: [ "transform", "${_Head}", "scaleY", '1.09615', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid120", tween: [ "transform", "${_Head}", "scaleY", '0.57692', { fromValue: '1.09615'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid168", tween: [ "transform", "${_Head}", "scaleY", '1.09615', { fromValue: '0.57692'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid62", tween: [ "style", "${_LFoot}", "left", '250.42px', { fromValue: '206px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid92", tween: [ "style", "${_LFoot}", "left", '207.95px', { fromValue: '250.42px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid117", tween: [ "style", "${_LFoot}", "left", '186.93px', { fromValue: '207.95px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid162", tween: [ "style", "${_LFoot}", "left", '202.39px', { fromValue: '186.93px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid26", tween: [ "style", "${_LFArm}", "top", '172px', { fromValue: '104.55px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid44", tween: [ "style", "${_LFArm}", "top", '40px', { fromValue: '172px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid78", tween: [ "style", "${_LFArm}", "top", '77.84px', { fromValue: '40px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid127", tween: [ "style", "${_LFArm}", "top", '124.3px', { fromValue: '77.84px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid142", tween: [ "style", "${_LFArm}", "top", '102.57px', { fromValue: '124.3px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid59", tween: [ "style", "${_LCalf}", "left", '250px', { fromValue: '231px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid88", tween: [ "style", "${_LCalf}", "left", '232px', { fromValue: '250px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid113", tween: [ "style", "${_LCalf}", "left", '189px', { fromValue: '232px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid165", tween: [ "style", "${_LCalf}", "left", '229.62px', { fromValue: '189px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid20", tween: [ "style", "${_LArm}", "left", '160.97px', { fromValue: '157.97px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid41", tween: [ "style", "${_LArm}", "left", '294.97px', { fromValue: '160.97px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid74", tween: [ "style", "${_LArm}", "left", '165.02px', { fromValue: '294.97px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid123", tween: [ "style", "${_LArm}", "left", '201.39px', { fromValue: '165.02px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid144", tween: [ "style", "${_LArm}", "left", '167.61px', { fromValue: '201.39px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2", tween: [ "transform", "${_LFoot}", "rotateZ", '-34deg', { fromValue: '-1deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid61", tween: [ "transform", "${_LFoot}", "rotateZ", '-182deg', { fromValue: '-34deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid91", tween: [ "transform", "${_LFoot}", "rotateZ", '1deg', { fromValue: '-182deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid119", tween: [ "transform", "${_LFoot}", "rotateZ", '-38deg', { fromValue: '1deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid161", tween: [ "transform", "${_LFoot}", "rotateZ", '-3deg', { fromValue: '-38deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "transform", "${_LArm}", "rotateZ", '-33deg', { fromValue: '-1deg'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid75", tween: [ "transform", "${_LArm}", "rotateZ", '-133deg', { fromValue: '-33deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid122", tween: [ "transform", "${_LArm}", "rotateZ", '-244deg', { fromValue: '-133deg'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid143", tween: [ "transform", "${_LArm}", "rotateZ", '-183deg', { fromValue: '-244deg'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "transform", "${_RCalf}", "rotateZ", '-99deg', { fromValue: '0deg'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid102", tween: [ "transform", "${_RCalf}", "rotateZ", '0deg', { fromValue: '-99deg'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid12", tween: [ "style", "${_RFArm}", "top", '169.73px', { fromValue: '104.04px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid37", tween: [ "style", "${_RFArm}", "top", '193.64px', { fromValue: '169.73px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid85", tween: [ "style", "${_RFArm}", "top", '87.36px', { fromValue: '193.64px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid133", tween: [ "style", "${_RFArm}", "top", '103.56px', { fromValue: '87.36px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid136", tween: [ "style", "${_RFArm}", "top", '94.94px', { fromValue: '103.56px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid63", tween: [ "style", "${_LFoot}", "top", '342px', { fromValue: '349px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid93", tween: [ "style", "${_LFoot}", "top", '350.55px', { fromValue: '342px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid118", tween: [ "style", "${_LFoot}", "top", '330.52px', { fromValue: '350.55px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid163", tween: [ "style", "${_LFoot}", "top", '346.45px', { fromValue: '330.52px'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid34", tween: [ "transform", "${_Body}", "scaleX", '0.40909', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid80", tween: [ "transform", "${_Body}", "scaleX", '1', { fromValue: '0.40909'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid107", tween: [ "transform", "${_Body}", "scaleX", '0.47727', { fromValue: '1'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid146", tween: [ "transform", "${_Body}", "scaleX", '1', { fromValue: '0.47727'}], position: 6000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid18", tween: [ "style", "${_LArm}", "top", '117.68px', { fromValue: '102.52px'}], position: 0, duration: 3000, easing: "easeOutBounce" },
            { id: "eid42", tween: [ "style", "${_LArm}", "top", '79.68px', { fromValue: '117.68px'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid76", tween: [ "style", "${_LArm}", "top", '74.97px', { fromValue: '79.68px'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid124", tween: [ "style", "${_LArm}", "top", '125.97px', { fromValue: '74.97px'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
            { id: "eid145", tween: [ "style", "${_LArm}", "top", '97.55px', { fromValue: '125.97px'}], position: 6000, duration: 1000, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-331967064");
