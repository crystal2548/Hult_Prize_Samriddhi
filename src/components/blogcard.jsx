import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './styles/blogcard.css';

const { Title, Text } = Typography;

const BlogCard = () => {
    const yearCards = [
        {
            title: 'Hult Prize 2024',
            year: 2024,
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
            status: 'Active',
            desc: 'Global Finals in Paris'
        },
        {
            title: 'Hult Prize 2023',
            year: 2023,
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
            status: 'Inactive',
            desc: 'Innovation Summit'
        },
        {
            title: 'Hult Prize 2022',
            year: 2022,
            image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop',
            status: 'Active',
            desc: 'Social Enterprise Kickoff'
        },
        {
            title: 'Hult Prize 2021',
            year: 2021,
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
            status: 'Inactive',
            desc: 'Digital Impact Series'
        },
    ];

    const recentCards = [
        {
            title: 'Hult Prize 2024',
            year: 2024,
            image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
            status: 'Active',
            desc: 'Global Finals in Paris'
        },
        {
            title: 'Hult Prize 2023',
            year: 2023,
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
            status: 'Inactive',
            desc: 'Innovation Summit'
        },
    ];

    return (
        <div className="blog-container">
            {/* Recent Blogs Section */}
            <h2 className="blog-section-title">Recent Blogs</h2>
            <Row gutter={[16, 16]} justify="center">
                {recentCards.map((item) => (
                    <Col xs={24} sm={16} lg={10} key={item.year} className="recent-blog-col">
                        <Card
                            hoverable
                            className="blog-card-recent"
                            bodyStyle={{ display: 'none' }}
                            cover={
                                <div className="recent-card-cover">
                                    <img
                                        alt={item.year}
                                        src={item.image}
                                    />
                                    <div className="recent-card-gradient" />
                                    <div className="recent-card-content">
                                        <Title level={4} className="recent-card-title">
                                            Hult Prize {item.year}
                                        </Title>

                                        <Text className="recent-card-desc">
                                            {item.desc}
                                        </Text>

                                        <div className="recent-card-meta">
                                            <span className="meta-item">
                                                <Calendar size={14} />
                                                <Text className="meta-item-text">{item.year}</Text>
                                            </span>
                                            <span className="meta-item">
                                                <Clock size={14} />
                                                <Text className="meta-item-text">12:00 PM</Text>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </Col>
                ))}
            </Row>

            {/* All Blogs Section */}
            <h2 className="blog-section-title-large">Samriddhi Blogs</h2>
            <Row gutter={[24, 24]}>
                {yearCards.map((item) => (
                    <Col xs={24} sm={12} lg={6} key={item.year}>
                        <Card
                            hoverable
                            className="blog-card-standard"
                            bodyStyle={{ padding: '24px' }}
                            cover={
                                <div className="standard-card-cover">
                                    <img
                                        alt={item.year}
                                        src={item.image}
                                    />
                                </div>
                            }
                        >
                            <div className="standard-card-body">
                                <Title level={4} className="standard-card-title">
                                    Hult Prize {item.year}
                                </Title>

                                <Text className="standard-card-desc">
                                    {item.desc}
                                </Text>

                                <div className="standard-card-meta">
                                    <span className="standard-meta-item">
                                        <Calendar size={14} color="#e5007e" />
                                        <Text className="standard-meta-text">{item.year}</Text>
                                    </span>
                                    <span className="standard-meta-item">
                                        <Clock size={14} color="#e5007e" />
                                        <Text className="standard-meta-text">12:00 PM</Text>
                                    </span>
                                </div>

                                <div className="view-details-link">
                                    View details <ArrowRight size={16} className="view-details-icon" />
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BlogCard;