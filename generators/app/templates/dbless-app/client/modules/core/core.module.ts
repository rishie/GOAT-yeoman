import { NgModule }                              from '@angular/core';
import { HttpModule }                            from '@angular/http';
import { SharedModule }                          from '../shared/shared.module';
import { CoreRoutingModule }                     from './core-routing.module';

import { Http, XHRBackend, RequestOptions }      from '@angular/http';

import { CoreComponent }		                     from './core.component';
import { HeaderComponent }                       from './components/header/header.component';
import { FooterComponent }                       from './components/footer/footer.component';

import { ErrorHandlerActions }                   from '../../redux/actions/error/errorHandler.actions';
import { SEOActions }                            from '../../redux/actions/seo/seo.actions';

//Angular and 3rd party serices
import { Cookie }                                from 'ng2-cookies/ng2-cookies';

import { IAppState, rootReducer, enhancers }     from '../../redux/store/index';
let createLogger = require('redux-logger');

@NgModule({
  imports:      [ SharedModule, CoreRoutingModule ],
  declarations: [ CoreComponent, HeaderComponent, FooterComponent ],
  exports:      [ CoreRoutingModule, HttpModule, CoreComponent, HeaderComponent, FooterComponent ],
  providers: 	[
    Http,
  	ErrorHandlerActions,
  	SEOActions,

  	Cookie
  ]
})
export class CoreModule {

}