import React from 'react'
import styles from './SchedulePage.module.scss'
import { Panel } from '../components/Panel/Panel'
import { ScheduleModule } from '../components/ScheduleModule/ScheduleModule'

export const SchedulePage = () => {
  return (
    <section className={styles.schedule}>
      <Panel className={styles.panel} title='Schedule response'>
        <ScheduleModule handleSubmit={(date) => console.log('schedule module submit: ', date)} />
      </Panel>
    </section>
  )
}
