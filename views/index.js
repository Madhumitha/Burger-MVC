const render = function (left, right) {
    return `
    <img src="../public/assets/img/burger.jpg" alt="Veggie Burger" >
    <div>
        <text>EAT - DA - BURGER!!!</text>
    </div>

    <div id="left">
        ${left}
    </div>

    <div id=center> 
        <form class="create-form">
            
        <div class = "form-group"> 
            <input type="text" id="burgerName" name="Bug"> </textarea>
        </div>
        
        <button type="submit" id="submitBtn">Submit</button>
        <p> Enter a burger you want to eat Click the "Submit" button</p>
        </form>
    </div>

    <div id="right">
        ${right}
    </div>


`
}

exports.render = render;