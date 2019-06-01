/*
#Default Routes
*/
const routes = [
    { name: 'DASHBOARD', url: '/', icon: 'fas fa-chart-line' },
    { name: 'FEED', url: '/feed', icon: 'fas fa-rss' },
    { name: 'STATISTIC', url: '/statistic', icon: 'fas fa-poll' },
    { name: 'TEAMS', url: '/teams', icon: 'fas fa-users' },
    { name: 'PROJECTS', url: '/projects', icon: 'fas fa-users' },
    { name: 'SETTINGS', url: '/settings', icon: 'fas fa-cog' },
];
/*
#Allow other components consume routes array
*/
export default routes;