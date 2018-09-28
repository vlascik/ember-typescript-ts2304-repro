import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';
import IntlService from 'ember-intl/services/intl';

export default class ApplicationRoute extends Route {
  @service
  public intl!: IntlService;
  asdf() {
    // this.intl.
  }
}
