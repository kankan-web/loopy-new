'use client'

import { useLocale } from '@/hooks'
import { useInView } from '@/hooks/useInView'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'

// 直接导入首屏必需的 SetupHero
import { SetupHero } from './Setup'

// 懒加载其他组件
const Project = lazy(() => import('./Project').then(mod => ({ default: mod.Project })))
const Team = lazy(() => import('./Team').then(mod => ({ default: mod.Team })))
const Contact = lazy(() => import('./Contact').then(mod => ({ default: mod.Contact })))
const Faq = lazy(() => import('./Faq').then(mod => ({ default: mod.Faq })))

// 加载占位组件
const LoadingFallback = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#00DC82] border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function HomepageHero() {
  const { t } = useLocale()
  const [projectRef, projectInView] = useInView()
  const [teamRef, teamInView] = useInView()
  const [contactRef, contactInView] = useInView()
  const [faqRef, faqInView] = useInView()

  return (
    <div className="min-h-screen">
      <SetupHero />

      <motion.div
        ref={projectRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Project />
        </Suspense>
      </motion.div>

      <motion.div
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Team />
        </Suspense>
      </motion.div>

      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </motion.div>

      <motion.div
        ref={faqRef}
        initial={{ opacity: 0, y: 50 }}
        animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Faq />
        </Suspense>
      </motion.div>
    </div>
  )
}
