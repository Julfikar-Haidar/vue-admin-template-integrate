import Login from '../components/Login'
import dashboard from '../components/dashboard'
// import Navbar from '../components/Navbar'
// import AddSmoothie from '../components/AddSmoothie'
// import EditSmoothie from '../components/EditSmoothie'
// import Details from '../components/Details'


export const routes = [

    {path: '/', component: Login, name: 'Login'},

     {path: '/dashboard', component: dashboard, name: 'dashboard'},
    // {path: '/add_smoothies', component: AddSmoothie, name: 'AddSmoothie'},
    // {path: '/edit-smoothie/:smoothie_slug', component: EditSmoothie, name: 'EditSmoothie'},
    // {path: '/details-smoothie/:smoothie_id', component: Details, name: 'Details'},

];


