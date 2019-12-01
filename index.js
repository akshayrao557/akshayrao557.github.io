// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 150},
    width = 550 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

var amexdata = [
    {
        "skill_name": "Spring Boot",
        "rating": 4
    },
    {
        "skill_name": "GKE",
        "rating": 3.5
    },
    {
        "skill_name": "Docker",
        "rating": 3.5
    },
    {
        "skill_name": "Google Data Studio",
        "rating": 4
    }
];

var ciscodata = [
    {
        "skill_name": "Datastax GraphDB",
        "rating": 4
    },
    {
        "skill_name": "Cassandra",
        "rating": 3.5
    },
    {
        "skill_name": "Mulesoft",
        "rating": 4.5
    },
    {
        "skill_name": "JAVA",
        "rating": 4.5
    },
    {
        "skill_name": "JAVA",
        "rating": 4.5
    },
    {
        "skill_name": "Rabbit MQ",
        "rating": 3
    },
    {
        "skill_name": "SQL",
        "rating": 4.5
    },
    {
        "skill_name": "SQL",
        "rating": 4.5
    }
];

var ciscointerndata = [
    {
        "skill_name": "Salesforce (SFDC)",
        "rating": 4.5
    },
    {
        "skill_name": "Apex",
        "rating": 4.5
    },
    {
        "skill_name": "Hadoop",
        "rating": 2.5
    },
    {
        "skill_name": "SOQL",
        "rating": 4.5
    }
];


function draw(data, tag) {

// Add svg element
    var svg = d3.select(tag)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


    console.log(data);

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 5])
        .range([0, width]);

    var xAxis = d3.axisBottom(x).ticks(5);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("font-size", "12px")
        .style("fill", "#868e95");


// Y axis
    var y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(function (d) {
            return d.skill_name;
        }))
        .padding(1);


    svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .style("font-size", "12px")
        .style("font-weight", "800")
        .style("fill", "#868e95");


// Lines
    svg.selectAll("myline")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", function (d) {
            return x(d.rating);
        })
        .attr("x2", x(0))
        .attr("y1", function (d) {
            return y(d.skill_name);
        })
        .attr("y2", function (d) {
            return y(d.skill_name);
        })
        .attr("stroke", "white")

// Circles
    svg.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return x(d.rating);
        })
        .attr("cy", function (d) {
            return y(d.skill_name);
        })
        .attr("r", "20")
        .on("mouseover", function(d) {
            var focus = svg.append("g")
                        .attr("class", "focus");

            focus.append("rect")
                .attr("class", "tooltip")
                .attr("width", 100)
                .attr("height", 50)
                .attr("x", 50)
                .attr("y", -22)
                .attr("rx", 4)
                .attr("ry", 4);



            focus.append("text")
                .attr("x", 275)
                .attr("y", 15)
                .text("Rating: " + d.rating)
                .style("fill", "#868e95");



        })
        .on("mouseout", function() {
            svg.selectAll(".focus").style("display", "none");
        })
        .style("fill", "#fffff")
        .attr("stroke", "white")


    // var focus = svg.append("g")
    //     .attr("class", "focus")
    //     .style("display", "none");
    //
    // focus.append("circle")
    //     .attr("r", 5);
    //
    // focus.append("rect")
    //     .attr("class", "tooltip")
    //     .attr("width", 100)
    //     .attr("height", 50)
    //     .attr("x", 10)
    //     .attr("y", -22)
    //     .attr("rx", 4)
    //     .attr("ry", 4);
    //
    // focus.append("text")
    //     .attr("class", "tooltip-date")
    //     .attr("x", 18)
    //     .attr("y", -2);
    //
    // focus.append("text")
    //     .attr("x", 18)
    //     .attr("y", 18)
    //     .text("Likes:");
    //
    // focus.append("text")
    //     .attr("class", "tooltip-likes")
    //     .attr("x", 60)
    //     .attr("y", 18);


}

draw(amexdata, "#amex-intern");
draw(ciscodata, "#cisco-fte");
draw(ciscointerndata, "#cisco-intern")

// })

