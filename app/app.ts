import { Application } from '@nativescript/core';
import { isFirstLaunch } from './shared/services/preferences.service';

Application.run({ 
    moduleName: isFirstLaunch() ? 'views/onboarding/onboarding-page' : 'app-root'
});