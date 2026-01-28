import React from 'react';
import { Row, Col, Card, Badge, Typography } from 'antd';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
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
        <div style={{ padding: '80px !important', margin: '60px !important', background: '' }}>
            {/* Recent Blogs Topic */}
            <h2 className='text-4xl font-bold text-center !my-10 uppercase text-white'>Recent Blogs</h2>
            <Row gutter={[16, 16]} justify="center" >
                {recentCards.map((item) => (
                    <Col xs={24} sm={16} lg={10} key={item.year} className="!mx-5">
                        <Card
                            hoverable
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#e5007e';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(230, 0, 126,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#303030';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            style={{
                                borderRadius: '16px',
                                background: '#141414',
                                overflow: 'hidden',
                                border: '1px solid #303030',
                                transition: 'all 0.3s ease',
                            }}
                            // We keep the body empty or minimal because the content is now in the 'cover'
                            bodyStyle={{ display: 'none' }}
                            cover={
                                <div
                                    style={{ overflow: 'hidden', height: '320px', position: 'relative' }}
                                    onMouseEnter={(e) => {
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) img.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) img.style.transform = 'scale(1)';
                                    }}
                                >
                                    <img
                                        alt={item.year}
                                        src={item.image}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '70%',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
                                        zIndex: 1
                                    }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '20px',
                                        right: '20px',
                                        zIndex: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    }}>
                                        <Title level={4} style={{ color: '#ffffff ', margin: '0 !important', fontSize: '22px', fontWeight: 'bold' }}>
                                            Hult Prize {item.year}
                                        </Title>

                                        <Text style={{ color: '#d9d9d9', fontSize: '14px', lineHeight: '1.4' }}>
                                            {item.desc}
                                        </Text>

                                        <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1890ff' }}>
                                                <Calendar size={14} />
                                                <Text style={{ color: '#ffffff', fontSize: '12px' }}>{item.year}</Text>
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1890ff' }}>
                                                <Clock size={14} />
                                                <Text style={{ color: '#ffffff', fontSize: '12px' }}>12:00 PM</Text>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </Col>
                ))}
            </Row>
            {/* For All Blogs */}
            <h2 className='text-4xl font-bold text-center !my-[100px] uppercase !text-white' >samriddhi blogs</h2>
            <Row gutter={[24, 24]}>
                {yearCards.map((item) => (
                    <Col xs={24} sm={12} lg={6} key={item.year}>
                        {/* <Badge.Ribbon
                            text={item.status}
                            color={item.status === 'Active' ? '#52c41a' : '#434343'}
                        > */}
                        <Card
                            hoverable
                            // CARD HOVER: Only controls Border and Glow
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#1890ff';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(24, 144, 255, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#303030';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                            style={{
                                borderRadius: '16px',
                                background: '#141414',
                                overflow: 'hidden',
                                border: '1px solid #303030',
                                transition: 'all 0.3s ease',
                            }}
                            bodyStyle={{ padding: '24px !important' }}
                            cover={
                                <div
                                    style={{ overflow: 'hidden', height: '220px' }}
                                    // IMAGE AREA HOVER: Only controls Zoom
                                    onMouseEnter={(e) => {
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) img.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const img = e.currentTarget.querySelector('img');
                                        if (img) img.style.transform = 'scale(1)';
                                    }}
                                >
                                    <img
                                        alt={item.year}
                                        src={item.image}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                    />
                                </div>
                            }
                        >
                            <div className='flex flex-col gap-3'>
                                <Title level={4} style={{ color: '#ffffff ', margin: '0 !important' }}>
                                    Hult Prize {item.year}
                                </Title>

                                <Text style={{ color: '#a6a6a6 ', fontSize: '14px', minHeight: '60px', display: 'block' }}>
                                    {item.desc}
                                </Text>

                                <div style={{ display: 'flex', gap: '16px', color: '#ffffff' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Calendar size={14} color="#e5007e" />
                                        <Text style={{ color: '#ffffff' }}>{item.year}</Text>
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Clock size={14} color="#e5007e" />
                                        <Text style={{ color: '#ffffff' }}>12:00 PM</Text>
                                    </span>
                                </div>

                                <div style={{ color: '#e5007e', display: 'flex', alignItems: 'center', fontWeight: 'bold', marginTop: '8px' }}>
                                    View details <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

export default BlogCard;