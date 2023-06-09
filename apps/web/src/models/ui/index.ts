import { createDomain } from 'effector';
import uiService from 'services/ui-service';
import { type Theme } from 'types/theme';

const domain = createDomain('ui');

const $$ui = {
    $theme: domain.store<Theme>(uiService.getTheme()),

    themeChanged: domain.event<Theme>(),
    appLoaded: domain.event<void>(),

    setFaviconFx: domain.effect<string, void>(),
};

export default $$ui;
