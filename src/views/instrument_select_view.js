const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelectView = function (select) {
  this.select = select;
}

InstrumentSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instruments-ready', (event) => {
    this.addOptions(event.detail);
  });

  this.select.addEventListener('change', (event) => {
    PubSub.publish('InstrumentSelect:selection-made', event.target.value);
  });
};

InstrumentSelectView.prototype.addOptions = function (instrumentData) {
  instrumentData.forEach ( (instrument, index) =>{
  const option = document.createElement('option');
  option.textContent = instrument.name;
  option.value = index;
  this.select.appendChild(option);
});
};

module.exports = InstrumentSelectView;
