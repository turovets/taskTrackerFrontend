const collapse = () => {
  const  addEventListenerByDataAttr = (dataAttr, event, fn) =>  {
    let list = document.querySelectorAll(dataAttr);
    for (let i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  };

  function toggleElement(e) {
    let target = e.target;
    let collapseElement = getCollapseElement(target);
    collapseElement.classList.toggle('show');
  }

  function getCollapseElement(target) {
    let collapseElementId = target.getAttribute('data-target');
    return document.getElementById(collapseElementId);
  }

  addEventListenerByDataAttr("[data-toggle='collapse']", 'click', toggleElement);
};