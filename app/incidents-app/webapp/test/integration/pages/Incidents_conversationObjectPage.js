sap.ui.define(['sap/fe/test/ObjectPage'], function (ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.lkp.incidents.management.incidents',
            componentId: 'Incidents_conversationObjectPage',
            contextPath: '/Incidents/conversation'
        },
        CustomPageDefinitions
    );
});