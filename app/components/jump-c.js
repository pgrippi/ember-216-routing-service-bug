import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    jumpMessage() {
      let queryParams = { message: 'hello world!' };
      this.get('router').transitionTo('index', { queryParams });
    },

    jumpPage() {
      let queryParams = { page: 2 };
      this.get('router').transitionTo('index', { queryParams });
    },

    jumpAll() {
      let queryParams = { message: 'hello world!', page: 2 };
      this.get('router').transitionTo('index', { queryParams });
    },

    jumpNone() {
      this.get('router').transitionTo('index');
    }
  }
});
