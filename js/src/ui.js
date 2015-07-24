function markupSelects() {

	var a;

	for (var i = 1; i<=139; i++) {
		a = document.createElement("option");
		$(a).html(get_station_name(i));
		$(a).attr("value", i);
		$("#boarding").append($(a));
	}

	for (i = 1; i<=139; i++) {
		a = document.createElement("option");
		$(a).html(get_station_name(i));
		$(a).attr("value", i);
		$("#deboarding").append($(a));
	}

}

function render_multiple(routes) {

	var sorted = [];

	for (var ko = 0; routes[ko]; ko++) {
		sorted.push(routes[ko].stations_count);
	}

	sorted.sort();

	$(".options").html(["<h3>", ko, " route", (ko==1?"":"s"), " found</h3>"].j());

	for (var j = 0; sorted[j]; j++) {

		for (var k = 0; routes[k]; k++) {

			if (routes[k].stations_count == sorted[j]) {

				var stations_count = routes[k].stations_count,
				directions = routes[k].directions,
				interchanges_count = routes[k].interchanges_count;

				$(".options").append("<h4 id='sc'>"+stations_count+" stations, "+(interchanges_count)+" interchange"+(interchanges_count==1?"":"s")+"</h4>");

				for (var i = 0; directions[i]; i++) {
					var x = document.createElement("p");
					$(x).addClass("bg-success "+(directions[i].direc.line.replace(/\d+/g, '')));
					$(x).html("<b>Step "+(i+1)+"</b>: "+gen_text(directions[i].direc));
					$(".options").append($(x));
				}

				$(".options").append("<hr/>");

				routes.splice(k, 1);

				break;

			}

		}

	}

}

function gen_text(o) {

	var from__name = get_station_name(o.from),
	to__name = get_station_name(o.to),
	line__name = get_line_name(o.line),
	towards__name = get_station_name(get_towards(o.from, o.to, o.line)),
	line__details = get_line_details(o.line);

	return ["Board the <b>", line__name, "</b> line train (", line__details, ") from ", from__name, " towards <b>", towards__name, "</b> and deboard at <b>", to__name, "</b>."].j();

}