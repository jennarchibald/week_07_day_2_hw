const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentSelectView = require('./views/instrument_select_view.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')
const instrumentFamilyData = require('./data/instrument_family_data.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const select = document.querySelector('#instrument-families');
  const instrumentSelectView = new InstrumentSelectView(select);
  instrumentSelectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

  const instrumentInfoDiv = document.querySelector('#instrument-info');
  const instrumentInfoView = new InstrumentInfoView(instrumentInfoDiv);
  instrumentInfoView.bindEvents();


});
