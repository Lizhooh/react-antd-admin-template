import Index from '../views/index';
import Chart from '../views/chart';
import Chart2 from '../views/chart2';

export default [
    {
        path: ['/index'],
        exact: true,
        component: Index,
    },
    {
        path: ['/chart'],
        exact: true,
        component: Chart,
    },
    {
        path: ['/chart2'],
        exact: true,
        component: Chart2,
    },
];