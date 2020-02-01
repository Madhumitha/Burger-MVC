const render = function(burger, id) {
return `
<h5> ${id} . ${burger} <button class="devourBtn"> Devour it </button> </h5>
`
}

exports.render = render;