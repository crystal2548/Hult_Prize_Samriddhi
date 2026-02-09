import React from 'react'
import { Card, Col, Row } from 'antd';

import homeCardsData from '../data/homeCardsData.js';

const CardData = () => {
    const cardData = homeCardsData;
    return (
        <div className="home-cards-overlay">
            <Row
                gutter={[32, 32]}
                justify="center"
                align="middle"
                className="hult-card-row"
            >
                {cardData.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={7} className="flex justify-center">
                        <Card
                            hoverable
                            bordered={false}
                            className="home-glass-card"
                            styles={{
                                body: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 0,
                                    width: '100%',
                                    background: 'transparent'
                                }
                            }}
                        >
                            <h3 className="home-card-title">
                                {item.title}
                            </h3>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardData;
