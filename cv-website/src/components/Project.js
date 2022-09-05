import * as React from 'react';
import { useCallback } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


const Project = ({ data }) => {

    const { Title, image, Description, id } = data



    return (

        <div className="project-container" data-aos="fade-up"
            data-aos-offset={ 430 - (id * 175) }
            data-aos-delay="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-once="true" >

            <Card row className="project-card" component="li" sx={ { bgcolor: "rgb(255, 255, 255)", marginY: 3, boxShadow: "0px 0px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)" } }>

                { id % 2 === 1 ? <>
                    <div className="project-description">
                        <h2>{ Title }</h2>
                        <p className="description">{ Description }</p>
                    </div>

                    <Box
                        component="ul"
                        sx={ { display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, marginX: 2, marginY: 2 } }
                    >
                        <Card component="li" sx={ { minWidth: 300, flexGrow: 1 } }>
                            <CardCover>
                                <img
                                    src={ image }
                                    // srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                                    alt=""
                                />
                            </CardCover>
                            <CardContent sx={ { justifyContent: 'center', gap: 1 } }>
                                <Typography
                                    level="h6"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    mt={ { xs: 12, sm: 18 } }
                                >
                                    Image
                                </Typography>
                            </CardContent>
                        </Card>

                    </Box>



                </>
                    : <> <Box
                        component="ul"
                        sx={ { display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, marginX: 2, marginY: 2 } }
                    >
                        <Card component="li" sx={ { minWidth: 300, flexGrow: 1 } } onClick="{handleOnClick}">
                            <CardCover>
                                <img
                                    src={ image }
                                    alt=""
                                />
                            </CardCover>
                            <CardContent sx={ { justifyContent: 'center', gap: 1 } }>
                                <Typography
                                    level="h6"
                                    fontWeight="lg"
                                    textColor="#fff"
                                    mt={ { xs: 12, sm: 18 } }
                                >
                                    Image
                                </Typography>
                            </CardContent>
                        </Card>

                    </Box>
                        <div className="project-description">
                            <h2>{ Title } </h2>
                            <p className="description">{ Description }</p>
                        </div>
                    </>

                }


            </Card>
        </div >
    );

}

export default Project;