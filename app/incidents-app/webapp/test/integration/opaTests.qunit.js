sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/lkp/incidents/management/incidents/test/integration/FirstJourney',
        'com/lkp/incidents/management/incidents/test/integration/pages/IncidentsList',
        'com/lkp/incidents/management/incidents/test/integration/pages/IncidentsObjectPage',
        'com/lkp/incidents/management/incidents/test/integration/pages/Incidents_conversationObjectPage'
    ],
    function (JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage, Incidents_conversationObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/lkp/incidents/management/incidents') + '/index.html'
        });


        JourneyRunner.run(
            {
                pages: {
                    onTheIncidentsList: IncidentsList,
                    onTheIncidentsObjectPage: IncidentsObjectPage,
                    onTheIncidents_conversationObjectPage: Incidents_conversationObjectPage
                }
            },
            opaJourney.run
        );
    }
);