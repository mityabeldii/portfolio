import { sample } from 'effector';
import $$ui from 'models/ui';
import uiService from 'services/ui-service';
import { type Theme } from 'types/theme';

$$ui.setFaviconFx.use((faviconPath) => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = faviconPath;
});

uiService.themeMediaQuery.addEventListener('change', (event) => {
    const themeName: Theme = event.matches ? 'dark' : 'light';
    $$ui.themeChanged(themeName);
});

sample({
    clock: $$ui.themeChanged,
    target: $$ui.$theme,
});

sample({
    source: $$ui.$theme,
    clock: [$$ui.appLoaded, $$ui.themeChanged],
    fn: (theme) => (theme === 'light' ? '/DB-dark.svg' : '/DB-light.svg'),
    target: $$ui.setFaviconFx,
});
