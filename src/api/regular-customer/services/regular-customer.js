'use strict';

/**
 * regular-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::regular-customer.regular-customer');
