import { defineFeature, loadFeature } from 'jest-cucumber';
import { getApiResponse, parseAndValidateApiResponse, validateBaseUrl } from '../../commonSteps';

const feature = loadFeature('MediaAPI/Features/headerDate.feature');
let base_url = 'https://testapi.io/api/rmstest/media';
let response;

defineFeature(feature, (test) =>
{
    test('Validate the date in header', ({ given, when, then }) =>
    {
        validateBaseUrl()({ given });
        when('a Get request is made', async () =>
        {
            response = await getApiResponse();
        });
        then('the current date in GMT should be present', async () =>
        {
            const dateHeader = response.headers['date'];  // Get the date header
            expect(dateHeader).toBeDefined();  // Check if the date header is defined
            expect(new Date(dateHeader).getTime()).not.toBeNaN();
        });
    });
});
