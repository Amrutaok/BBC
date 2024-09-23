import { defineFeature, loadFeature } from 'jest-cucumber';
import { getApiResponse, parseAndValidateApiResponse, validateBaseUrl } from '../../commonSteps';
const feature = loadFeature('MediaAPI/Features/idSegmentType.feature');

let response;
defineFeature(feature, (test) =>
{
    let myPlayList;
    test('Validate track id is not null', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });

        when('a Get request is made', async () =>
        {
            response = await getApiResponse();
        });

        then('the id field should not be null', () =>
        {
            myPlayList = parseAndValidateApiResponse();
            let idNotFound = false;
            let idNull = false;
            for (var i = 0; i < myPlayList.data.length; i++)
            {
                const currentTrack = JSON.parse(JSON.stringify(myPlayList.data[i]));
                let prop_id = 'id';
                if (currentTrack.hasOwnProperty(prop_id))
                {
                    if (currentTrack.id != null)
                    {

                    }
                    else
                    {
                        idNull = true;
                    }
                }
                else
                {
                    idNotFound = true;
                }
            };
            expect(idNull).toBe(false);
            expect(idNotFound).toBe(false);
        });
    });
    test('Validate segment type of all tracks is music', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });

        when('a Get request is made', async () =>
        {
            response = await getApiResponse();
        });

        then('the segment_type for each object should be music', () =>
        {
            const myPlayList = JSON.parse(JSON.stringify(response.data));
            let segmentTypeFound = false;
            let segmentTypeNull = false;
            let nonMusicSegmentFound = false;
            for (var i = 0; i < myPlayList.data.length; i++)
            {
                const currentTrack = JSON.parse(JSON.stringify(myPlayList.data[i]));
                let prop_segment = 'segment_type';
                if (currentTrack.hasOwnProperty(prop_segment))
                {
                    expect(currentTrack.segment_type).toBeDefined();
                    expect(currentTrack.segment_type).not.toBeNull();
                    expect(currentTrack.segment_type).toBe('music');
                }
            };
            /*expect(segmentTypeNull).toBe(false);
            expect(segmentTypeFound).toBe(false);
            expect(nonMusicSegmentFound).toBe(false);*/
        });
    });
});