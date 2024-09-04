import HighlightsRoutes from './highlights.routes.js';

class HighlightsModule {
    /**
     * Configure the highlights module with the provided Express app.
     * @param {import('express').Application} app - The Express application instance.
     */
    configure(app) {
        app.use('/api', HighlightsRoutes);
    }
}

export default HighlightsModule;