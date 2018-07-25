import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/home'
import EchartStudy from '@/components/tool/EchartStudy'
import D3Study from '@/components/tool/D3Study'
import G6Study from '@/components/tool/G6Study'
import EchartQuestion from '@/components/question/EchartQuestion'
import CSSQuestion from '@/components/question/CSSQuestion'
import HtmlQuestion from '@/components/question/HtmlQuestion'
import ArborKnowledge from '@/components/knowledge/ArborKnowledge'
import RequireKnowledge from '@/components/knowledge/RequireKnowledge'
import CanvasKnowledge from '@/components/knowledge/CanvasKnowledge'
import Css3Knowledge from '@/components/knowledge/Css3Knowledge'
import BaiMapKnowledge from '@/components/knowledge/BaiMapKnowledge'
import NgGridKnowledge from '@/components/knowledge/NgGridKnowledge'
import RelationEm from '@/components/example/RelationEm'
import StarEm from '@/components/example/StarEm'
import FlowChartEm from '@/components/example/FlowChartEm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/EchartStudy',
          name: 'EchartStudy',
          component: EchartStudy
        },
        {
          path: '/D3Study',
          name: 'D3Study',
          component: D3Study
        },
        {
          path: '/G6Study',
          name: 'G6Study',
          component: G6Study
        },
        {
          path: '/EchartQuestion',
          name: 'EchartQuestion',
          component: EchartQuestion
        },
        {
          path: '/CSSQuestion',
          name: 'CSSQuestion',
          component: CSSQuestion
        },
        {
          path: '/HtmlQuestion',
          name: 'HtmlQuestion',
          component: HtmlQuestion
        },
        {
          path: '/ArborKnowledge',
          name: 'ArborKnowledge',
          component: ArborKnowledge
        },
        {
          path: '/BaiMapKnowledge',
          name: 'BaiMapKnowledge',
          component: BaiMapKnowledge
        },
        {
          path: '/RequireKnowledge',
          name: 'RequireKnowledge',
          component: RequireKnowledge
        },
        {
          path: '/CanvasKnowledge',
          name: 'CanvasKnowledge',
          component: CanvasKnowledge
        },
        
        {
          path: '/Css3Knowledge',
          name: 'Css3Knowledge',
          component: Css3Knowledge
        },
        {
          path: '/NgGridKnowledge',
          name: 'NgGridKnowledge',
          component: NgGridKnowledge
        },
        {
          path: '/RelationEm',
          name: 'RelationEm',
          component: RelationEm
        },
        {
          path: '/StarEm',
          name: 'StarEm',
          component: StarEm
        },
        {
          path: '/FlowChartEm',
          name: 'FlowChartEm',
          component: FlowChartEm
        }
      ]
    },
   
  ]
})
