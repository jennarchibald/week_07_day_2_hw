const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:instruments-ready', this.data);

  PubSub.subscribe('InstrumentSelect:selection-made', (event) => {
      PubSub.publish('InstrumentFamilies:instrument-data-found', this.findInstrumentData(event.detail));
  });
};

InstrumentFamilies.prototype.findInstrumentData = function (instrumentIndex) {
  return this.data[instrumentIndex]
};

module.exports = InstrumentFamilies;
