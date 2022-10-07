import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './api/getUsers'
import Card from './components/card/Card'
import Cards from './components/Cards/Cards'
import Table from './components/table/Table'
import Footer from './components/table/Table'
export default function App() {
    const dispatch = useDispatch()
    const usersSlice = useSelector(state => state.users)

    useEffect(() => {
        dispatch({
            type: 'users/pending',
        })
        fetchUsers()
            .then(data => {
                dispatch({
                    type: 'users/fetchUsers',
                    payload: data
                })
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: 'users/rejected',
                })

            })
    }, [])


    return (
        <>
            <Cards/>
            <Table/>
        </>

    )
}
