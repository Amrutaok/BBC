import { defineFeature, loadFeature } from 'jest-cucumber';
import { getApiResponse, parseAndValidateApiResponse, validateBaseUrl} from '../../commonSteps';

const feature = loadFeature('MediaAPI/Features/nowPlaying.feature');
let base_url = 'https://testapi.io/api/rmstest/media';  // Global variable for base_url
let response;
let nPlayingCount = 0;

defineFeature(feature, (test) =>
{
    let myPlayList;
    test('Only one track is playing at a time', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });

        when('a Get request is made', async () =>
        {
            response = await getApiResponse();
        });

        then('only one track is playing', () =>
        {
            myPlayList = parseAndValidateApiResponse();
            for (var i = 0; i < myPlayList.data.length; i++)
            {
                const currentTrack = JSON.parse(JSON.stringify(myPlayList.data[i]));
                let prop_offset = 'offset'
                if (currentTrack.hasOwnProperty(prop_offset))
                {
                    const offsetObject = JSON.parse(JSON.stringify(currentTrack.offset));
                    if (offsetObject.now_playing)
                    {
                        nPlayingCount = nPlayingCount + 1;
                    }
                }
            };
            expect(nPlayingCount).toBe(1);
        });
    });
});