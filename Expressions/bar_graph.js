// Get data (String) from the imported .json File and display as a text
// The expression was set as Source Text of a empty text layer

eval("var data=" +footage("data.json").sourceText);
data[0].E_Geo1_Name;

// Customize height of boxes 
// The expression was set as Scale of the Shape Layer

eval("var data=" +footage("data.json").sourceText);
height = data[0].E_Geo1_Teil;
heightNew = height*10;
[value[0], heightNew]
