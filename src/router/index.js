import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Overview from '@/components/Overview'
import Features from '@/components/Features'
import Feature from '@/components/Feature'
import Tags from '@/components/Tags'
import Graphs from '@/components/Graphs'
import Reports from '@/components/Reports'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/overview', name: 'Overview', component: Overview },
    { path: '/features', name: 'Features', component: Features },
    { path: '/features/:id', name: 'Feature', component: Feature, props: true },
    { path: '/tags', name: 'Tags', component: Tags },
    { path: '/graphs', name: 'Graphs', component: Graphs },
    { path: '/reports', name: 'Reports', component: Reports }
  ]
})
