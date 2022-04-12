// ------------ EXPORT ------------

// Get data (String) from the imported .json File and display as a text
// The expression was set as Source Text at Text Layer / Text / Source Text 

// Text Left 
eval("var data=" +footage("data.json").sourceText);
data[0].E_Geo1_Name;

// Text Middle 
eval("var data=" +footage("data.json").sourceText);
data[0].E_Geo2_Name;

// Text Right 
eval("var data=" +footage("data.json").sourceText);
data[0].E_Geo3_Name;

// Set Anchor Point of each Box 
// The Expression was set at each Shape Layer / Contents / Rectangle / Transform Rectangle / Anchor Point

var left = sourceRectAtTime(time,false).left;
var top = sourceRectAtTime(time,false).top;
var myWidth = sourceRectAtTime(time,false).width;
var myHeight = sourceRectAtTime(time,false).height;
var x = left + myWidth / 2;
var y = top + myHeight;
[x,y]

// Customize height of boxes 
// The expression was set at Shape Layer / Contents / Rectangle / Path 1 / Size

// Box Left
eval("var data=" +footage("data.json").sourceText);
height = data[0].E_Geo1_Teil;
heightNew = height*10;
[value[0], heightNew]

// Box Middle
eval("var data=" +footage("data.json").sourceText);
height = data[0].E_Geo2_Teil;
heightNew = height*10;
[value[0], heightNew]

// Box Right
eval("var data=" +footage("data.json").sourceText);
height = data[0].E_Geo2_Teil;
heightNew = height*10;
[value[0], heightNew]


// ------------ Import ------------

// Get data (String) from the imported .json File and display as a text
// The expression was set as Source Text at Text Layer / Text / Source Text 

// Text Left 
eval("var data=" +footage("data.json").sourceText);
data[0].I_Geo1_Name;

// Text Middle 
eval("var data=" +footage("data.json").sourceText);
data[0].I_Geo2_Name;

// Text Right 
eval("var data=" +footage("data.json").sourceText);
data[0].I_Geo3_Name;

// Set Anchor Point of each Box 
// The Expression was set at each Shape Layer / Contents / Rectangle / Transform Rectangle / Anchor Point

var left = sourceRectAtTime(time,false).left;
var top = sourceRectAtTime(time,false).top;
var myWidth = sourceRectAtTime(time,false).width;
var myHeight = sourceRectAtTime(time,false).height;
var x = left + myWidth / 2;
var y = top + myHeight;
[x,y]

// Customize height of boxes 
// The expression was set at Shape Layer / Contents / Rectangle / Path 1 / Size

// Box Left
eval("var data=" +footage("data.json").sourceText);
height = data[0].I_Geo1_Teil;
heightNew = height*10;
[value[0], heightNew]

// Box Middle
eval("var data=" +footage("data.json").sourceText);
height = data[0].I_Geo2_Teil;
heightNew = height*10;
[value[0], heightNew]

// Box Right
eval("var data=" +footage("data.json").sourceText);
height = data[0].I_Geo2_Teil;
heightNew = height*10;
[value[0], heightNew]
