var Handlebars = require('handlebars');

module.exports = function(content) {
    var js = Handlebars.precompile(content);
    var compiled = "var Handlebars = require('handlebars/runtime')['default'];\n";
    compiled += "module.exports = Handlebars.template(" + js.toString() + ");\n";

    return compiled;
}
