import ReasonMasterRoutes from '../reasons-master/reason-master.routes.js';

/**
 * Module for ReasonMaster feature
 */
class ReasonMasterModule {
  /**
   * Configure the module
   * @param {import('express').Application} app - The express application
   */
  configure(app) {
    app.use('/api', ReasonMasterRoutes);
  }
}

export default ReasonMasterModule;