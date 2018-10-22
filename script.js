
const headline_exp = /\*+ DONE (.*)/gm;
const svg = d3.select(document.getElementById("vis"));
svg.style("background-color", "red");
d3.text("test.org_archive").then(function(org) {
    org.split("\n").forEach(function(line) {
        let match = headline_exp.exec(line);
        if(match != null) {
            console.log(match[1]);
        }
    });
});
