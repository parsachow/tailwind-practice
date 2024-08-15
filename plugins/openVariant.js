const plugin = require("tailwindcss/plugin")

// set up and register custom tailwindcss variant here
const openVariant = plugin(function({addVariant}){
    addVariant("group-open", ":merge(.group).open &");
    addVariant("peer-open", ":merge(.peer).open ~ &"); 
    // peer targets sibling class
})

module.exports = openVariant;