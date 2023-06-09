const uiService = {
    themeMediaQuery: window.matchMedia('(prefers-color-scheme: dark)'),

    getTheme: (): 'light' | 'dark' => {
        return uiService.themeMediaQuery.matches ? 'dark' : 'light';
    },
};

export default uiService;
