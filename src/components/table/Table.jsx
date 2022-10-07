import React from 'react'
import { useSelector } from 'react-redux'
import Styles from './Table.module.css'
export default function Table() {

    const compareSlice = useSelector(state => state.compare)
    const names = compareSlice.emploies?.map(user => <th className={Styles.items}>{user.name}</th>)
    const salaries = compareSlice.emploies?.map(user => <td className={Styles.items}>{user.salary}</td>)
    const createdAts = compareSlice.emploies?.map(user => <td className={Styles.items}>{user.createdAt}</td>)

  return (
    <div className={Styles.wrapper}>
    <table>
        <thead>
            <th className={Styles.items}></th>
            {names}
        </thead>
        <tbody>
            <tr>
                <td className={Styles.column}>Salary</td>
                {salaries}
            </tr>
            <tr>
                <td className={Styles.column}>Created</td>
                {createdAts}
            </tr>
        </tbody>
    </table>
    </div>
  )
}
