import { defineFeature, loadFeature } from 'jest-cucumber';
import { getApiResponse, parseAndValidateApiResponse, validateBaseUrl} from '../../commonSteps';

const feature = loadFeature('MediaAPI/Features/primaryTitle.feature');
let base_url = 'https://testapi.io/api/rmstest/media';
let response;

defineFeature(feature, (test) =>
{
    let myPlayList;
    test('Validate that primary title is always available', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });

        when('a Get request is made and response received', async () =>
        {
            response = await getApiResponse();
        });

        then('the primary title should not be null', () =>
        {
            myPlayList = parseAndValidateApiResponse();

            let primaryTitleEmpty = false;
            for (var i = 0; i < myPlayList.data.length; i++)
            {
                const currentTrack = JSON.parse(JSON.stringify(myPlayList.data[i]));
                let prop_title_list = 'title_list'
                if (currentTrack.hasOwnProperty(prop_title_list))
                {
                    const title_listObject = JSON.parse(JSON.stringify(currentTrack.title_list));
                    if (title_listObject.primary != null)
                    {
                        expect(title_listObject.primary).toBeDefined();
                        expect(title_listObject.primary).not.toBeNull();
                    }
                }
            };
        });
    });
});