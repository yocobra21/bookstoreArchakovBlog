import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function HeaderMenu() {
    return (
        <>
            <Menu>
                <Menu.Item
                    name='bookStore'
                >
                    Book Store
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='total'
                    >
                        Total &nbsp; <b> 0 RUB</b>
                    </Menu.Item>

                    <Menu.Item
                        name='cart'
                    >
                        Cart &nbsp; <b>(0)</b>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </>
    )
}
