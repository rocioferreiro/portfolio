"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Web Vitals monitoring
    function sendToAnalytics(metric: any) {
      // Replace with your analytics service
      console.log('Performance metric:', metric)
    }

    // Largest Contentful Paint
    if ('largest-contentful-paint' in window.PerformanceObserver.supportedEntryTypes) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          sendToAnalytics({
            name: 'LCP',
            value: entry.startTime,
            delta: entry.startTime,
          })
        }
      })
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    }

    // First Input Delay
    if ('first-input' in window.PerformanceObserver.supportedEntryTypes) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          sendToAnalytics({
            name: 'FID',
            value: (entry as any).processingStart - entry.startTime,
            delta: (entry as any).processingStart - entry.startTime,
          })
        }
      })
      observer.observe({ type: 'first-input', buffered: true })
    }

    // Cumulative Layout Shift
    if ('layout-shift' in window.PerformanceObserver.supportedEntryTypes) {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          delta: clsValue,
        })
      })
      observer.observe({ type: 'layout-shift', buffered: true })
    }
  }, [])

  return null
}
