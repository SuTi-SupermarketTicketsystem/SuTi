import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SuTiSharedModule } from 'app/shared/shared.module';
import { SuTiCoreModule } from 'app/core/core.module';
import { SuTiAppRoutingModule } from './app-routing.module';
import { SuTiHomeModule } from './home/home.module';
import { SuTiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SuTiSharedModule,
    SuTiCoreModule,
    SuTiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SuTiEntityModule,
    SuTiAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SuTiAppModule {}
