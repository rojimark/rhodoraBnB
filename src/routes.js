import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import Home from './components/Home.vue'
import Rooms from './components/Rooms.vue'

export default[
{ path: '/',component: Home},
{ path: '/about',component: About },
{ path: '/contacts',component: Contacts},
{ path: '/rooms',component: Rooms}
]