// Station Data

var stations = {
	1: { name: "Rithala", lines: ["red"] },
	2: { name: "Rohini West", lines: ["red"] },
	3: { name: "Rohini East", lines: ["red"] },
	4: { name: "Pitampura", lines: ["red"] },
	5: { name: "Kohat Enclave", lines: ["red"] },
	6: { name: "NSP", lines: ["red"] },
	7: { name: "Keshav Puram", lines: ["red"] },
	8: { name: "Kanhaiya Nagar", lines: ["red"] },
	9: { name: "Inderlok", lines: ["red", "green"] },
	10: { name: "Shastri Nagar", lines: ["red"] },
	11: { name: "Pratap Nagar", lines: ["red"] },
	12: { name: "Pulbangash", lines: ["red"] },
	13: { name: "Tis Hazari", lines: ["red"] },
	14: { name: "Kashmere Gate", lines: ["red", "yellow"] },
	15: { name: "Shastri Park", lines: ["red"] },
	16: { name: "Seelampur", lines: ["red"] },
	17: { name: "Welcome", lines: ["red"] },
	18: { name: "Shahdara", lines: ["red"] },
	19: { name: "Mansarovar Park", lines: ["red"] },
	20: { name: "Jhilmil", lines: ["red"] },
	21: { name: "Dilshad Garden", lines: ["red"] },

	// 142 (Shalimar Palace)
	// 143 (Rohini Sector 18)
	// 144 (Badli)
	22: { name: "Jahangirpuri", lines: ["yellow"] },
	23: { name: "Adarsh Nagar", lines: ["yellow"] },
	24: { name: "Azadpur", lines: ["yellow"] },
	25: { name: "Model Town", lines: ["yellow"] },
	26: { name: "GTB Nagar", lines: ["yellow"] },
	27: { name: "Vishwavidyalaya", lines: ["yellow"] },
	28: { name: "Vidhan Sabha", lines: ["yellow"] },
	29: { name: "Civil Lines", lines: ["yellow"] },
	30: { name: "Chandni Chowk", lines: ["yellow"] },
	31: { name: "Chawri Bazar", lines: ["yellow"] },
	32: { name: "New Delhi", lines: ["yellow", "airport"] },
	33: { name: "Rajiv Chowk", lines: ["yellow", "blue"] },
	34: { name: "Patel Chowk", lines: ["yellow"] },
	35: { name: "Central Secretariat", lines: ["yellow", "violet"] },
	36: { name: "Udyog Bhawan", lines: ["yellow"] },
	37: { name: "Race Course", lines: ["yellow"] },
	38: { name: "Jor Bagh", lines: ["yellow"] },
	39: { name: "INA", lines: ["yellow"] },
	40: { name: "AIIMS", lines: ["yellow"] },
	41: { name: "Green Park", lines: ["yellow"] },
	42: { name: "Hauz Khaz Enclave", lines: ["yellow"] },
	43: { name: "Malvaiya Nagar", lines: ["yellow"] },
	44: { name: "Saket", lines: ["yellow"] },
	45: { name: "Qutab Minar", lines: ["yellow"] },
	46: { name: "Chhatarpur", lines: ["yellow"] },
	47: { name: "Sultanpur", lines: ["yellow"] },
	48: { name: "Ghitorni", lines: ["yellow"] },
	49: { name: "Arjangarh", lines: ["yellow"] },
	50: { name: "Guru Dhronacharya", lines: ["yellow"] },
	51: { name: "Sikandarpur", lines: ["yellow"] },
	52: { name: "MG Road", lines: ["yellow"] },
	53: { name: "IFFCO Chowk", lines: ["yellow"] },
	54: { name: "Huda City Centre", lines: ["yellow"] },

	// ITO (140)
	55: { name: "Mandi House", lines: ["violet", "blue"] },
	56: { name: "Janpath", lines: ["violet"] },
	57: { name: "Khan Market", lines: ["violet"] },
	58: { name: "JLN Stadium", lines: ["violet"] },
	59: { name: "Jangpura", lines: ["violet"] },
	60: { name: "Lajpat Nagar", lines: ["violet"] },
	61: { name: "Moolchand", lines: ["violet"] },
	62: { name: "Kailash Colony", lines: ["violet"] },
	63: { name: "Nehru Place", lines: ["violet"] },
	64: { name: "Kalkaji Mandir", lines: ["violet"] },
	65: { name: "Govindpuri", lines: ["violet"] },
	66: { name: "Okhla", lines: ["violet"] },
	67: { name: "Jasola", lines: ["violet"] },
	68: { name: "Sarita Vihar", lines: ["violet"] },
	69: { name: "Mohan Estate", lines: ["violet"] },
	70: { name: "Tughlakabad", lines: ["violet"] },
	71: { name: "Badarpur", lines: ["violet"] },
	// Faridabad (141)

	72: { name: "Ashok Park Main", lines: ["green", "green2"] },
	73: { name: "Satguru Ram Singh Marg", lines: ["green2"] },
	74: { name: "Kirti Nagar", lines: ["green2", "blue"] },
	
	75: { name: "Punjabi Bagh", lines: ["green"] },
	76: { name: "Shivaji Park", lines: ["green"] },
	77: { name: "Madipur", lines: ["green"] },
	78: { name: "Paschim Vihar", lines: ["green"] },
	79: { name: "Sehdev Park", lines: ["green"] },
	80: { name: "Peera Garhi", lines: ["green"] },
	81: { name: "Udyog Nagar", lines: ["green"] },
	82: { name: "Surajmal Stadium", lines: ["green"] },
	83: { name: "Nangloi", lines: ["green"] },
	84: { name: "Nangloi Railway Station", lines: ["green"] },
	85: { name: "Rajdhani Park", lines: ["green"] },
	86: { name: "Mundka", lines: ["green"] },

	87: { name: "Noida City Centre", lines: ["blue"] },
	88: { name: "Golf Course", lines: ["blue"] },
	89: { name: "Botanical Gardens", lines: ["blue"] },
	90: { name: "Noida Sec. 18", lines: ["blue"] },
	91: { name: "Noida Sec. 16", lines: ["blue"] },
	92: { name: "Noida Sec. 15", lines: ["blue"] },
	93: { name: "New Ashok Nagar", lines: ["blue"] },
	94: { name: "Mayur Vihar-1 Ext.", lines: ["blue"] },
	95: { name: "Mayur Vihar-1", lines: ["blue"] },
	96: { name: "Akshardham", lines: ["blue"] },
	97: { name: "Yamuna Bank", lines: ["blue", "blue2"] },
	98: { name: "Indraprastha", lines: ["blue"] },
	99: { name: "Pragati Maidan", lines: ["blue"] },
	// Mandi House (55)
	100: { name: "Barakhamba Road", lines: ["blue"] },
	// Rajiv Chowk (33)
	101: { name: "RK Ashram Marg", lines: ["blue"] },
	102: { name: "Jhandewalan", lines: ["blue"] },
	103: { name: "Karol Bagh", lines: ["blue"] },
	104: { name: "Rajendra Place", lines: ["blue"] },
	105: { name: "Patel Nagar", lines: ["blue"] },
	106: { name: "Shadipur", lines: ["blue"] },
	// Kirti Nagar (74)
	107: { name: "Moti Nagar", lines: ["blue"] },
	108: { name: "Ramesh Nagar", lines: ["blue"] },
	109: { name: "Rajouri Garden", lines: ["blue"] },
	110: { name: "Tagore Garden", lines: ["blue"] },
	111: { name: "Subhash Nagar", lines: ["blue"] },
	112: { name: "Tilak Nagar", lines: ["blue"] },
	113: { name: "Janakpuri East", lines: ["blue"] },
	114: { name: "Janakpuri West", lines: ["blue"] },
	115: { name: "Uttam Nagar East", lines: ["blue"] },
	116: { name: "Uttam Nagar West", lines: ["blue"] },
	117: { name: "Nawada", lines: ["blue"] },
	118: { name: "Dwarka Mor", lines: ["blue"] },
	119: { name: "Dwarka", lines: ["blue", "blue3"] },
	120: { name: "Dwarka Sector 14", lines: ["blue"] },
	121: { name: "Dwarka Sector 13", lines: ["blue"] },
	122: { name: "Dwarka Sector 12", lines: ["blue"] },
	123: { name: "Dwarka Sector 11", lines: ["blue"] },
	124: { name: "Dwarka Sector 10", lines: ["blue"] },
	125: { name: "Dwarka Sector 9", lines: ["blue"] },
	126: { name: "Dwarka Sector 21", lines: ["blue", "airport"] },

	127: { name: "Najafgarh Metro Depot", lines: ["blue3"] },

	128: { name: "Laxmi Nagar", lines: ["blue2"] },
	129: { name: "Nirman Vihar", lines: ["blue2"] },
	130: { name: "Preet Vihar", lines: ["blue2"] },
	131: { name: "Karkarduma", lines: ["blue2"] },
	132: { name: "Anand Vihar ISBT", lines: ["blue2"] },
	133: { name: "Kaushambi", lines: ["blue2"] },
	134: { name: "KB Vaishali", lines: ["blue2"] },

	135: { name: "Shivaji Stadium", lines: ["airport"] },
	136: { name: "Dhaula Khan", lines: ["airport"] },
	137: { name: "Delhi Aerocity", lines: ["airport"] },
	138: { name: "IGD Airport", lines: ["airport"] },
	139: { name: "IGI Airport", lines: ["airport"] },
	
	140: { name: "ITO", lines: ["violet"] },
	
	141: { name: "Faridabad", lines: ["violet"] },

	142: { name: "Shalimar Palace", lines: ["yellow"] },
	143: { name: "Rohini Sector 18", lines: ["yellow"] },
	144: { name: "Badli", lines: ["yellow"] },

},
lines = {
	"red": {
		name: "Red",
		stations: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
		intersections: {}
	},
	"green": {
		name: "Green",
		stations: [9, 72, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
		intersections: {}
	},
	"green2": {
		name: "Green",
		stations: [9, 72, 73, 74],
		intersections: {}
	},
	"yellow": {
		name: "Yellow",
		stations: [144, 143, 142, 22, 23, 24, 25, 26, 27, 28, 29, 14, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
		intersections: {}
	},
	"blue": {
		name: "Blue",
		stations: [87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 55, 100, 33, 102, 103, 104, 105, 106, 74, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126],
		intersections: {}
	},
	"blue2": {
		name: "Blue",
		"stations": [97, 128, 129, 130, 131, 132, 133, 134],
		intersections: {}
	},
	"blue3": {
		name: "Blue",
		"stations": [119, 127],
		intersections: {}
	},
	"violet": {
		name: "Violet",
		stations: [140, 55, 56, 35, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 141],
		intersections: {}
	},
	"airport" : {
		name: "Airport Express",
		stations: [32, 135, 136, 137, 138, 139, 126],
		intersections: {}
	}
},
ipoints = {
	"red": [],
	"yellow": [],
	"green": [],
	"green2": [],
	"violet": [],
	"airport": [],
	"blue": [],
	"blue2": [],
	"blue3": []
};

function process_data() {

	get_lines_intersections_data();
	get_ipoints_data();

}

function get_lines_intersections_data() {

	// Accumulates the 'intersections' object
	// for each line in the 'lines' variable

	for (var i = 1; stations[i]; i++) {
		var station_data = stations[i],
		station_lines = station_data.lines;
		if (station_lines.length > 1) {
			for (var j = 0; station_lines[j]; j++) {
				var line1 = station_lines[j];
				for (var k = j+1; station_lines[k]; k++) {
					var line2 = station_lines[k];
					lines[line1].intersections[line2] = i;
					lines[line2].intersections[line1] = i;
				}
			}
		}
	}	

}

function get_ipoints_data() {

	// Accumulates the intersection point 
	// stations for each line in the 'ipoints'
	// variable

	for (var i = 1; stations[i]; i++) {
		var station_data = stations[i],
		station_lines = station_data.lines;
		if (station_lines.length > 1) {
			for (var j = 0; station_lines[j]; j++) {
				var line = station_lines[j];
				ipoints[line].push(i);
			}
		}
	}

}