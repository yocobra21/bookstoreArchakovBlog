import React from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

// props { title, author, price, image }
export default function BookCard({ title, author, price }) {
    return (
        <Card>
            <Image src='/bookimg.jpg' />
            {/* <Image src={image} /> */}
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>

            </Card.Content>
            <Card.Content extra>
                {price}
                <Icon name='ruble sign' />

            </Card.Content>
        </Card>
    )
}
