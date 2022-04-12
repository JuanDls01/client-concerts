import axios from 'axios';

export const GET_EVENTS = 'GET_EVENTS';

const getEvents = () => async (dispatch) => {
    try {
        //const json = await axios.get('http://localhost:3001/events');
        //const events = json.data;
        const events = false;
        if(events){
            return dispatch({
                type: GET_EVENTS,
                payload: events
            })
        } else {
            const events = [{
                id: 'fjdsklfjdsklfjsd',
                name: 'Justin Bieber en el Luna Park',
                description: 'Artista de pop muy popular en adolescentes',
                imgEvent: 'https://elcomercio.pe/resizer/G93syvTejIPD9OQ_ssUkYpKpyyo=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/SB6BBMXOKVHQLK2HT6KMVRRAP4.jpg',
                date: '01/01/2022',
                time: '22:00',
                artist: {
                    id: 'fjkldsjfdskl',
                    name: 'Justin Bieber',
                    genre: {
                        id: 'jfdkslf',
                        name: 'Pop'
                    },
                    description: 'Artista de pop de x años bla bla bla'
                },
                stage: {
                    id: 'jfklsdjfsdlk',
                    name: 'Luna Park',
                    capacity: 1000, //Serían 1000 personas
                    location: 'Buenos Aires',
                    address: 'A la vuelta de la esquina',
                    lat: 'fds',//no se como lo pondrían pero no lo uso
                    lon: 'fds',//no se como lo pondrían pero no lo uso
                    description: 'fjdsklfjsdlk',
                }
            }];
            return dispatch({
                type: GET_EVENTS,
                payload: events,
            })
        }
    }
    catch (error) {
        console.log('El getEvents falló')
    }
}

export default getEvents;