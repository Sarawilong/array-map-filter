const mixedArray = [-15, "Yahoo", { name: "No one" }, function() {}];
const types = mixedArray.map(function(something) {
  return something typeof;
});
console.log(types);