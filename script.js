let body = document.querySelector('body'),
    wrapper = document.createElement('div'),
    title = document.createElement('div'),
    text = document.createElement('textarea'),
    keybord = document.createElement('div');

function createElements (name, style, parrent) {
    parrent.append(name);
    name.classList.add(style);
}

createElements(wrapper, 'wrapper', body);
createElements(title, 'title', wrapper);
createElements(text, 'textarea', wrapper);
createElements(keybord, 'keybord', wrapper);
createElements(wrapper, 'wrapper', body);
createElements(wrapper, 'wrapper', body);