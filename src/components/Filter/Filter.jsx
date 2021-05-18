import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Filter({setFilter}) {

    const [activeItem, setActiveItem] = React.useState('home')

    const handleItemClick = (e, { name }) => {
        setFilter(name)
        setActiveItem(name)
    }

    return (
        <div>
            <Menu secondary>
                <Menu.Item
                    name='all'
                    active={activeItem === 'all'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='expensive'
                    active={activeItem === 'expensive'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='cheap'
                    active={activeItem === 'cheap'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='author'
                    active={activeItem === 'author'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )
}
