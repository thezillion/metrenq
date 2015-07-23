// basic functions and
// declarations

Array.prototype.hasElement = function(x) {

	if (this.indexOf(x) == -1)
		return false;
	else
		return true;

};

Array.prototype.empty = function() {

	this.splice(0, this.length);
	return this;

};

Array.prototype.j = function() {

	return this.join("");

};

Array.prototype.copyTo = function(arr) {

	for (var i = 0; this[i]; i++)
		arr.push(this[i]);

};

function get_station_name(st) {

	return stations[st].name;	

}

function get_station_lines(st) {

	return stations[st].lines;	

}

function get_line_name(ln) {

	return lines[ln].name;

}

function get_line_details(ln) {

	var first_station = lines[ln].stations[0],
	last_station = lines[ln].stations[lines[ln].stations.length-1];
	return [get_station_name(first_station), "-", get_station_name(last_station)].j();

}

function get_ipoints(line, st) {

	var x = [];
	ipoints[line].copyTo(x);

	for (var i = 0; x[i]; i++) {
		if (x[i] && (x[i] == st || memo.hasElement(x[i]))) {
			x.splice(i, 1);
			i--;
		}
	}

	return x;

}

function _(el) {

	return document.querySelector(el);

}

function commonElementInArrays(arr1, arr2) {

	// Returns the first common element in two arrays
	for (var i = 0; arr1[i]; i++) {
		if (arr2.hasElement(arr1[i]))
			return arr1[i];
	}

	// this line will be executed if the loop terminates without finding a value
	return false;

}

function firstWordsCap(str) {

	var sp = str.split(" "), str2 = "";
	for (var i = 0; sp[i]; i++) {
		str2 += str.replace(sp[i][0], sp[i][0].toUpperCase());
	}

	return str2;

}

function stripNos(str) {

	return str.replace(/[0-9]/g, '');

}

function isIPoint(st) {

	var lines = Object.keys(ipoints);

}

function get_towards(from, to, line) {

	var towards, line__stations = lines[line].stations;
	if (line__stations.indexOf(from) < line__stations.indexOf(to))
		towards = line__stations[line__stations.length-1];
	else
		towards = line__stations[0];

	return towards;

}

function get_stations_count(st1, st2, line) {

	if (stations[st1].lines.hasElement(line) && stations[st2].lines.hasElement(line)) {
		return Math.abs(lines[line].stations.indexOf(st1) - lines[line].stations.indexOf(st2));
	} else {
		return false;
	}

}

function count_total_stations(directions) {

	var c = 0;
	for (var i = 0; directions[i]; i++)
		c += directions[i].count;
	// console.log(directions, c);
	return c;

}

function merge_simult_dirns_on_same_line(d) {

	for (var i = 0, p = d.length-1; i<p; i++) {
		if (d[i].direc.line == d[i+1].direc.line) {
			d[i].direc.to = d[i+1].direc.to;
			d[i].count += d[i+1].count;
			d.splice(i+1, 1);
			p = d.length-1;
			i--;
		}
	}

}

$(document).ready(function() {

	process_data();
	markupSelects();

	$("#boarding").select2();
	$("#deboarding").select2();

	$("#boarding").select2();
	$("#deboarding").select2();

	$("#searchRoute").click(function() {
		var from = $("#boarding").val(),
		to = $("#deboarding").val();
		find_route(Math.abs(from), Math.abs(to));
	});

});