// select  a variable utils start
function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}
// select  a variable utils end





// create element start
function createElement(tagname,classlist,content){
    const div = document.createElement(tagname);
    div.classList.add(classlist);
    div.innerHTML = content;

    return div;
}
// create element end

