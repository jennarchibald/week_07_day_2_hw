const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function (div) {
  this.div = div;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instrument-data-found', (event) => {
    this.clearHTML();
    this.render(event.detail);
  });
};

InstrumentInfoView.prototype.render = function (data) {
  this.addHeading(data.name, 'instrument-name-heading');
  this.addInfoParagraph(data.description);
  this.addHeading('Instruments include:', 'instrument-list-heading')
  const list = this.createListElement();
  this.addInstrumentsToList(list, data.instruments);
};

InstrumentInfoView.prototype.addHeading = function (headingText, headingClass) {
  const heading = document.createElement('h3');
  heading.textContent = headingText;
  heading.classList.add(headingClass);
  this.div.appendChild(heading);
};

InstrumentInfoView.prototype.addInfoParagraph = function (paraText) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('instrument-info-paragraph');
  paragraph.textContent = paraText;
  this.div.appendChild(paragraph);
};

InstrumentInfoView.prototype.createListElement = function () {
  const list = document.createElement('ul');
  list.classList.add('instrument-info-list');
  this.div.appendChild(list);
  return list;
};

InstrumentInfoView.prototype.addInstrumentsToList = function (list, instruments) {
  for (let instrument of instruments) {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  }
};

InstrumentInfoView.prototype.clearHTML = function () {
  this.div.innerHTML = '';
};

module.exports = InstrumentInfoView;
