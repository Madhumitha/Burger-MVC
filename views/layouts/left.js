const render = function(burger, id) {
return `
<h5> ${id} . ${burger} <button class="devourBtn" data-id=${id}> Devour it </button> </h5>
`
}

exports.render = render;