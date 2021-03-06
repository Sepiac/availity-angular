import demo from 'demo';

demo.factory('demoValidationService', AV_VAL => {

  class DemoValidationService {

    constructor() {

      this.firstName = 'Robert';
      this.lastName = null;
      this.phone = null;
      this.email = null;
      this.ssn = null;
      this.icd9 = null;
      this.npi = null;
      this.date = new Date();
      this.rule = 'defaultRules';
      this.selectedSate = null;
      this.states = [
        { id: 'AL', name: 'Alabama' },
        { id: 'CA', name: 'California' },
        { id: 'NM', name: 'New Mexico' },
        { id: 'TX', name: 'Texas' },
        { id: 'WY', name: 'Wyoming' }
      ];

      // keep a copy of the original state
      this.originalState = Object.assign({}, this);

    }

    onChangeRules() {
      this.rule = (this.rule === 'stateRules') ? 'defaultRules' : 'stateRules';
    }

    reset($scope) {
      Object.assign(this, this.originalState);
      $scope.$broadcast(AV_VAL.EVENTS.RESET);
    }

  }

  return new DemoValidationService();

});
