var possible_routes, memo;

function find_route(from, to) {

	possible_routes = [];
	memo = [];

	get_routes(from, to);

	render_multiple(possible_routes);

}

function get_routes(from, to) {

	var find_same_line = same_line(from, to),
	route = { stations_count: 0, interchanges_count: 0, directions: [] };

	if (find_same_line) {
		route.stations_count = find_same_line.count;
		route.interchanges_count = 0;
		route.directions[0] = find_same_line;

		possible_routes.push(route);
	} else {
		var find_direct_intersection = direct_intersection(from, to);
		if (find_direct_intersection) {
			var count = count_total_stations(find_direct_intersection);
			route.stations_count = count;
			route.interchanges_count = 1;
			find_direct_intersection.copyTo(route.directions);

			possible_routes.push(route);
		} else {
			var from__lines = get_station_lines(from);
			for (var f = 0; from__lines[f]; f++) {
				var fl = from__lines[f];
				var from__lines_ipoints = get_ipoints(fl, from);
				for (var i = 0; from__lines_ipoints[i]; i++) {
					var ip = from__lines_ipoints[i];

					if (!memo.hasElement(ip)) {

						route.directions.empty();

						route.directions.push({ count: get_stations_count(from, ip, fl), direc: { from: (from), to: (ip), line: fl } });
						memo.push(ip);
						var p = find_multiple_intersections(ip, to, fl);

						for (var t = 0; p.directions[t]; t++)
							route.directions.push(p.directions[t]);

						merge_simult_dirns_on_same_line(route.directions);

						route.stations_count = count_total_stations(route.directions);
						route.interchanges_count = route.directions.length-1;

						var x = { stations_count: 0, interchanges_count: 0, directions: [] };
						x.stations_count = route.stations_count;
						x.interchanges_count = route.interchanges_count;
						route.directions.copyTo(x.directions);

						if (p.count > 0) {
							possible_routes.push(x);
						}

					}
				}
			}
		}
	}

}

function find_multiple_intersections(from, to, miss_line) {

	var dirns = [], min_st = 1000;

	var find_direct_intersection = direct_intersection(from, to);

	dirns.empty();

	if (find_direct_intersection) {
		for (var d = 0; find_direct_intersection[d]; d++) {
			dirns.push(find_direct_intersection[d]);
		}
	} else {
		var from__lines = get_station_lines(from);
		for (var f = 0; from__lines[f]; f++) {
			var fl = from__lines[f];
			var from__lines_ipoints = get_ipoints(fl, from);

			if (fl == miss_line)
				continue;

			for (var i = 0; from__lines_ipoints[i]; i++) {
				var ip = from__lines_ipoints[i];

				if (!memo.hasElement(ip)) {
					memo.push(ip);
					var p = find_multiple_intersections(ip, to, fl);
					if (p.count < min_st && p.count > 0) {
						dirns.empty();
						dirns.push({ count: get_stations_count(from, ip, fl), direc: { from: (from), to: (ip), line: fl } });
						for (var da = 0; p.directions[da]; da++) {
							dirns.push(p.directions[da]);
						}
						min_st = p.count;
					}
				}
			}
		}
	}

	merge_simult_dirns_on_same_line(dirns);

	return { count: count_total_stations(dirns), directions: dirns };

}

function same_line(from, to) {

	var from__lines = get_station_lines(from),
	to__lines = get_station_lines(to),
	common_line = commonElementInArrays(from__lines, to__lines);

	if (common_line) {
		var sc = get_stations_count(from, to, common_line);
		return { count: sc, direc: { from: (from), to: (to), line: common_line } };
	} else {
		return false;
	}

}

function direct_intersection(from, to) {

	var from__lines = get_station_lines(from),
	to__lines = get_station_lines(to),
	directions = [];

	for (var i = 0; from__lines[i]; i++) {
		var fl = from__lines[i];
		for (var j = 0; to__lines[j]; j++) {
			var tl = to__lines[j];
			if (lines[fl].intersections[tl]) {
				var intersection = lines[fl].intersections[tl],
				from_intrscn = same_line(from, intersection),
				intrscn_to = same_line(intersection, to);

				directions.push(from_intrscn, intrscn_to);
				return directions;
			}
		}
	 }

	// if the previous return value was never reached,
	// no intersection was found.
	return false;

}