import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextWithImageComponent } from './text-with-image/text-with-image.component';
import { JobComponent } from './job/job.component';
import { SolitionComponent } from './solition/solition.component';
import { ServicesComponent } from './services/services.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { PorftolioComponent } from './porftolio/porftolio.component';
import { ReferancesComponent } from './referances/referances.component';
import { ConcactUsComponent } from './concact-us/concact-us.component';
import { FooterComponent } from './footer/footer.component';
import { OutroComponent } from './outro/outro.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TextWithImageComponent,
    JobComponent,
    SolitionComponent,
    ServicesComponent,
    CampaignsComponent,
    PorftolioComponent,
    ReferancesComponent,
    ConcactUsComponent,
    FooterComponent,
    OutroComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
