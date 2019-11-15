import React from 'react'

import Content from './content'
import ContentHeader from './contentHeader'

export default props => (
    <div className="container">
        <ContentHeader title="Página Inicial"/>
        <Content title="Página Inicial">
            <span>Página Inicial da Aplicação</span><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus a sed magnam adipisci consequatur nemo, sapiente, quisquam assumenda ullam tenetur fuga tempore nihil aspernatur. Soluta delectus quibusdam minima odio?lorem</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laboriosam, officia aut veritatis nulla, quibusdam ipsam porro eum ducimus temporibus doloribus repudiandae quia consequatur possimus error est nam similique deserunt.</p>
        </Content>
    </div>
)