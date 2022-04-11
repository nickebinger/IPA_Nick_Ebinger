// Calculate Y-Position of a NULL-Object linked to the path
// The expression was set as Position of the NULL-Object

eval("var data="+footage("data.json").sourceText);
exporte = data[0].Exporte_m10;

min = 0;
max = 100;
newExporte = exporte*4-160;
maxMovement = -672;
newBaseline = 852;

myYheight = ((newExporte) / max) * maxMovement + newBaseline;        
[value[0], myYheight]

// Display the axis-label (in Billion CHF)
// The expression was set as Source Text of a empty text layer

// Max

eval("var data="+footage("data.json").sourceText);
data[0].Dia_Entwicklung_Max;

// in between

eval("var data="+footage("data.json").sourceText);
max = data[0].Dia_Entwicklung_Max;
steps = data[0].Dia_Entwicklung_Steps;
faktor = thisLayer.name;
max-(steps*faktor);

// min

eval("var data="+footage("data.json").sourceText);
data[0].Dia_Entwicklung_Min;

// Display the year 
// The expression was set as Source Text of a empty text layer

eval("var data="+footage("data.json").sourceText);
data[0].Jahr;

// display the quarter (subtract -1 per quarter to the left)
// The expression was set as Source Text of a empty text layer

eval("var data="+footage("data.json").sourceText);

quartal = data[0].Quartal;
quartalNeu = quartal-1;
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

