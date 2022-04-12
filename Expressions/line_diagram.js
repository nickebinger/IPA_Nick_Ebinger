// ------------ EXPORT ------------

// Calculate Y-Position of a NULL-Object linked to the path
// The expression was set at NULL-Object / Position

// NULL Exporte 2019 Q1
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m10;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2019 Q2
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m9;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2019 Q3
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m8;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2019 Q4
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m7;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2020 Q1
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m6;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2020 Q2
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m5;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2020 Q3
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m4;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2020 Q4
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m3;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2021 Q1
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m2;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2021 Q2
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m1;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Exporte 2021 Q3
eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte;
min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// Display the axis-label (in Billion CHF)
// The expression was set at Text Layer / Text /  Source Text 

// Max (65)
eval("var data="+footage("data.json").sourceText);
data[0].Dia_Entwicklung_Max;

// in between (60-45)
eval("var data="+footage("data.json").sourceText);
max = data[0].Dia_Entwicklung_Max;
steps = data[0].Dia_Entwicklung_Steps;
faktor = thisLayer.name;
max-(steps*faktor);

// Min (40) 
eval("var data="+footage("data.json").sourceText);
data[0].Dia_Entwicklung_Min;

// Display the year 
// The expression was set at Text Layer / Text / Source Text

// 2021
eval("var data="+footage("data.json").sourceText);
data[0].Jahr;

// 2020
eval("var data="+footage("data.json").sourceText);
jahr = data[0].Jahr;
jahr-1;

// 2019
eval("var data="+footage("data.json").sourceText);
jahr = data[0].Jahr;
jahr-2;


// Display the quarter (subtract -1 per quarter to the left)
// The expression was set at Text Layer / Text / Source Text

eval("var data="+footage("data.json").sourceText);
quartal = data[0].Quartal;
quartalNeu = quartal-1; // Decrease here per Quarter to the left 
text_1 = data[0].Quartal_Text_1;
text_2 = data[0].Quartal_Text_2;
text_3 = data[0].Quartal_Text_3;
text_4 = data[0].Quartal_Text_4;
switch(quartalNeu) {
	case 1:
		displayText = text_1;
		break;
	case 2:
		displayText = text_2;
		break;
	case 3:
		displayText = text_3;
		break;
	case 4:
		displayText = text_4;
		break;
	case 0:
		displayText = text_4;
		break;
	case -1:
		displayText = text_3;
		break;
	case -2:
		displayText = text_2;
		break;
	case -3:
		displayText = text_1;
		break;
	case -4:
		displayText = text_4;
		break;
	case -5:
		displayText = text_3;
		break;
	case -6:
		displayText = text_2;
		break;
	case -7:
		displayText = text_1;
		break;
	case -8:
		displayText = text_4;
		break;
	case -9:
		displayText = text_3;
		break;
	case -10:
		displayText = text_2;
		break;
	default:
		displayText = quartalNeu;
}


// ------------ IMPORT ------------

// Calculate Y-Position of a NULL-Object linked to the path
// The expression was set at NULL-Object / Position

// NULL Importe 2019 Q1
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m10;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2019 Q2
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m9;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2019 Q3
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m8;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2019 Q4
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m7;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2020 Q1
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m6;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2020 Q2
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m5;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2020 Q3
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m4;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2020 Q4
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m3;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2021 Q1
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m2;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2021 Q2
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe_m1;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// NULL Importe 2021 Q3
eval("var data="+footage("data.json").sourceText);
importe = data[0].Importe;
min = 0;
max = 100;
newImporte = importe*4-160;
maxMovement = -672;
newBaseline = 852;
myYheight = ((newImporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// Display the axis-label (in Billion CHF)
// The expression was set at Text Layer / Text /  Source Text 

// Max (65)
eval("var data="+footage("data.json").sourceText);
data[0].Dia_Entwicklung_Max;

// in between (60-45)
eval("var data="+footage("data.json").sourceText);
max = data[0].Dia_Entwicklung_Max;
steps = data[0].Dia_Entwicklung_Steps;
faktor = thisLayer.name;
max-(steps*faktor);

// Min (40) 
eval("var data="+footage("data.json").sourceText);
data[0].Dia_Entwicklung_Min;

// Display the year 
// The expression was set at Text Layer / Text / Source Text

// 2021
eval("var data="+footage("data.json").sourceText);
data[0].Jahr;

// 2020
eval("var data="+footage("data.json").sourceText);
jahr = data[0].Jahr;
jahr-1;

// 2019
eval("var data="+footage("data.json").sourceText);
jahr = data[0].Jahr;
jahr-2;


// Display the quarter (subtract -1 per quarter to the left)
// The expression was set at Text Layer / Text / Source Text

eval("var data="+footage("data.json").sourceText);
quartal = data[0].Quartal;
quartalNeu = quartal-1; // Decrease here per Quarter to the left 
text_1 = data[0].Quartal_Text_1;
text_2 = data[0].Quartal_Text_2;
text_3 = data[0].Quartal_Text_3;
text_4 = data[0].Quartal_Text_4;
switch(quartalNeu) {
	case 1:
		displayText = text_1;
		break;
	case 2:
		displayText = text_2;
		break;
	case 3:
		displayText = text_3;
		break;
	case 4:
		displayText = text_4;
		break;
	case 0:
		displayText = text_4;
		break;
	case -1:
		displayText = text_3;
		break;
	case -2:
		displayText = text_2;
		break;
	case -3:
		displayText = text_1;
		break;
	case -4:
		displayText = text_4;
		break;
	case -5:
		displayText = text_3;
		break;
	case -6:
		displayText = text_2;
		break;
	case -7:
		displayText = text_1;
		break;
	case -8:
		displayText = text_4;
		break;
	case -9:
		displayText = text_3;
		break;
	case -10:
		displayText = text_2;
		break;
	default:
		displayText = quartalNeu;
}
