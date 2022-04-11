// Get data (String) from the imported .json File and display as a text
// The expression was set as Source Text of a empty text layer

eval("var data=" +footage("data.json").sourceText);
data[0].E_Gruppe1_de;

// Animation first pie
// The expression was set as Trim Path End 

eval("var data=" +footage("data.json").sourceText);
value = data[0].E_Gruppe1_Teil;
easeOut(time,inPoint+0.2,inPoint+1.2,[0],[value]);

// Animation second pie 
// The expression was set as Trim Path End 

eval("var data=" +footage("data.json").sourceText);
valueStart = data[0].E_Gruppe1_Teil;
valueEnd = data[0].E_Gruppe2_Teil; 
valueEndCalc = valueStart+valueEnd;
easeOut(time,inPoint+0.5,inPoint+1,[valueStart],[valueEndCalc]);

// Animation third pie 
// The expression was set as Trim Path End 
eval("var data=" +footage("data.json").sourceText);
value1 = data[0].E_Gruppe1_Teil;
value2 = data[0].E_Gruppe2_Teil;
value3 = data[0].E_Gruppe3_Teil; 
valueStartCalc = value1+value2;
valueEndCalc = valueStartCalc+value3;
easeOut(time,inPoint+0.5,inPoint+1,[valueStartCalc],[valueEndCalc]);

// Animation last pie 
// The expression was set as Trim Path End 

eval("var data=" +footage("data.json").sourceText);
value1 = data[0].E_Gruppe1_Teil;
value2 = data[0].E_Gruppe2_Teil;
value3 = data[0].E_Gruppe3_Teil; 
valueStartCalc = value1+value2;+value3;
valueEndCalc = 100;
easeOut(time,inPoint+0.5,inPoint+1.2,[valueStartCalc],[valueEndCalc]);
