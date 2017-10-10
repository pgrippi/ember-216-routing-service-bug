import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'message'],
  page: 1,
  message: ''
});
