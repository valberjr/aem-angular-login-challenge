import { SpaAngularEditableComponentsModule } from '@adobe/aem-angular-editable-components';
import { AemAngularCoreWcmComponentsButtonV1 } from '@adobe/aem-core-components-angular-base/authoring/button/v1';
import { AemAngularCoreWcmComponentsDownloadV1 } from '@adobe/aem-core-components-angular-base/authoring/download/v1';
import { AemAngularCoreWcmComponentsImageV2 } from '@adobe/aem-core-components-angular-base/authoring/image/v2';
import { AemAngularCoreWcmComponentsListV2 } from '@adobe/aem-core-components-angular-base/authoring/list/v2';
import { AemAngularCoreWcmComponentsSeparatorV1 } from '@adobe/aem-core-components-angular-base/authoring/separator/v1';
import { AemAngularCoreWcmComponentsTitleV2 } from '@adobe/aem-core-components-angular-base/authoring/title/v2';
import { AemAngularCoreWcmComponentsBreadCrumbV2 } from '@adobe/aem-core-components-angular-base/layout/breadcrumb/v2';
import { AemAngularCoreWcmComponentsLanguageNavigationV1 } from '@adobe/aem-core-components-angular-base/layout/language-navigation/v1';
import { AemAngularCoreWcmComponentsNavigationV1 } from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import { AemAngularCoreWcmComponentsAccordionV1 } from '@adobe/aem-core-components-angular-spa/containers/accordion/v1';
import { AemAngularCoreWcmComponentsTabsV1 } from '@adobe/aem-core-components-angular-spa/containers/tabs/v1';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ContainerRightComponent } from './components/container-right/container-right.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';
import './components/import-components';
import { InputComponent } from './components/input/input.component';
import { ModelManagerService } from './components/model-manager.service';
import { PageComponent } from './components/page/page.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchComponent } from './components/search/search.component';
import { LinkComponent } from './components/link/link.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SpaAngularEditableComponentsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // AEM Modules
        AemAngularCoreWcmComponentsTabsV1,
        AemAngularCoreWcmComponentsTitleV2,
        AemAngularCoreWcmComponentsBreadCrumbV2,
        AemAngularCoreWcmComponentsNavigationV1,
        AemAngularCoreWcmComponentsButtonV1,
        AemAngularCoreWcmComponentsImageV2,
        AemAngularCoreWcmComponentsDownloadV1,
        AemAngularCoreWcmComponentsListV2,
        AemAngularCoreWcmComponentsAccordionV1,
        AemAngularCoreWcmComponentsSeparatorV1,
        AemAngularCoreWcmComponentsLanguageNavigationV1,
        // Angular Flex
        FlexLayoutModule,
        // Material Modules
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [ModelManagerService, { provide: APP_BASE_HREF, useValue: '/' }],
    declarations: [
        AppComponent,
        PageComponent,
        ContainerRightComponent,
        InputComponent,
        ButtonComponent,
        CurrentTimeComponent,
        WeatherComponent,
        SearchComponent,
        LinkComponent,
        LabelComponent,
    ],
    entryComponents: [
        PageComponent,
        ContainerRightComponent,
        InputComponent,
        ButtonComponent,
        CurrentTimeComponent,
        WeatherComponent,
        SearchComponent,
        LinkComponent,
        LabelComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
