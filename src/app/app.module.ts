import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentComponent } from './component/component.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { PersonalReportsComponent } from './personal-reports/personal-reports.component';
import { CommunityComponent } from './community/community.component';
import { LearnAstrologyComponent } from './learn-astrology/learn-astrology.component';
import { TimingComponent } from './timing/timing.component';
import { MarriageComponent } from './marriage/marriage.component';
import { StartBusinessComponent } from './start-business/start-business.component';
import { PoliticsComponent } from './politics/politics.component';
import { AboutComponent } from './about/about.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { CharacterComponent } from './character/character.component';
import { PrognozysComponent } from './prognozys/prognozys.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    ComponentComponent,
    LearnAstrologyComponent,
    TimingComponent,
    StartBusinessComponent,
    MarriageComponent,
    StoreComponent,
    HomeComponent,
    PersonalReportsComponent,
    PoliticsComponent,
    CommunityComponent,
    CelebritiesComponent,
    CharacterComponent,
    RegisterComponent,
    PrognozysComponent,
    AboutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'personal-reports', component:PersonalReportsComponent},
      {path: 'character', component:CharacterComponent},
      {path: 'community', component:CommunityComponent},
      {path: 'learnastrology', component:LearnAstrologyComponent},
      {path: 'timing', component:TimingComponent},
      {path: 'start-business', component:StartBusinessComponent},
      {path: 'marriage', component:MarriageComponent},
      {path: 'politics', component:PoliticsComponent},
      {path: 'about', component:AboutComponent},
      {path: 'prognozys', component:PrognozysComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'celebrities', component:CelebritiesComponent},
      {path: 'store', component:StoreComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
