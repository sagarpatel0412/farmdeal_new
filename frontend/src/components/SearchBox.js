import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
                style={{borderRadius:"12px",border:"none"}}
                placeholder="Search Product"
            ></Form.Control>

            <Button
                type='submit'
                //variant='outline-success'
                
                className='fa fa-search'
                style={{outline:"none",textDecoration:"none",borderRadius:"8px",border:"none"}}
            >
                
            </Button>
        </Form>
    )
}

export default SearchBox
